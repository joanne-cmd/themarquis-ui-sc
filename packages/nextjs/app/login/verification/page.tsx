"use client";
import OTPInput from "~~/components/verification";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useVerification from "~~/utils/api/hooks/useVerification";
import { useQueryClient } from "@tanstack/react-query";
import useResend from "~~/utils/api/hooks/useResend";
import { makePrivateEmail } from "~~/utils/ConvertData";
import { setCookie } from "cookies-next";
import { notification } from "~~/utils/scaffold-stark/notification";
import BackgroundGradient from "~~/components/BackgroundGradient";
import VerificationFailure from "~~/components/Modal/VerificationFailure";

function Page() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(() => {
    const storedValue = parseFloat(
      localStorage.getItem("loginCountdown") || "",
    );

    if (isNaN(storedValue)) {
      return 30;
    }

    if (storedValue === 0) {
      return 0;
    }

    return storedValue > 0 ? storedValue : 30;
  });
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [resendDisabled, setResendDisabled] = useState<boolean>(true);
  const router = useRouter();

  const queryClient = useQueryClient();
  const email = queryClient.getQueryData<string>(["userEmail"]);

  const handleOtpComplete = async (otp: string): Promise<void> => {
    setOtpCode(otp);
    handleVerification(otp);
  };

  const handleVerificationSuccess = (data: any) => {
    queryClient.setQueryData(["accessToken"], data.data.access_token);
    setCookie("accessToken", data.data.access_token);
    queryClient.invalidateQueries({ refetchType: "active" });
    setLoading(false);
    router.push("/login/welcome");
    localStorage.setItem("signupCountdown", "30");
  };

  const handleVerificationFailed = (error: any) => {
    queryClient.invalidateQueries({ refetchType: "active" });
    setLoading(false);
    setErrorModal(true);
    notification.error(error.response.data.message);
    setOtpCode("");
  };

  const handleResendSuccess = (data: any) => {
    console.log("success", data);
    setOtpCode("");
    setResendDisabled(true);
    localStorage.setItem("loginCountdown", "30");
  };

  const handleResendFailed = (error: any) => {
    notification.error(error.response.data.message);
  };

  const { mutate: verification } = useVerification(
    handleVerificationSuccess,
    handleVerificationFailed,
  );

  const { mutate: resend } = useResend(handleResendSuccess, handleResendFailed);

  const handleVerification = async (otp: string) => {
    setLoading(true);
    verification({
      email: email ?? "",
      code: otp ?? otpCode,
    });
  };

  const handleResend = () => {
    resend({
      email: email ?? "",
    });
  };

  useEffect(() => {
    if (countdown < 30) {
      localStorage.setItem("loginCountdown", countdown.toString());
    }
    if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="font-monserrat">
      <div className="flex flex-col py-8 px-12 gap-4 h-screen-minus-80 justify-center">
        <BackgroundGradient />
        <div className="flex flex-col max-w-[1700px] relative z-50 mx-auto w-full h-full max-h-[500px] mb-[100px]">
          <div>
            <div className="sm:text-3xl font-bold text-[16px] mb-1">
              <span>WELCOME TO </span>
              <span className="text-gradient"> BACK !</span>
            </div>
            <span className="text-[#CACACA] sm:text-[20px] text-[14px]">
              Verification code has been sent to your email{" "}
              <span>{makePrivateEmail(email ?? "")}</span>
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-end flex-wrap gap-10">
              <OTPInput onOtpComplete={handleOtpComplete} />
              <button
                className={`text-[#00ECFF] w-[200px] cursor-pointer mb-7 ${
                  resendDisabled ? "cursor-default text-[#C1C1C1]" : ""
                }`}
                onClick={handleResend}
                disabled={resendDisabled}
              >
                {resendDisabled ? `Resend in ${countdown}s` : "Resend"}
              </button>
            </div>
          </div>

          <div className="button-flow-login">
            <button
              className="shadow-button w-[245px] h-[55px] font-arcade text-shadow-deposit text-2xl"
              onClick={() => handleVerification(otpCode)}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>
      <VerificationFailure
        isOpen={errorModal}
        onClose={() => setErrorModal(false)}
      />
    </div>
  );
}

export default Page;
