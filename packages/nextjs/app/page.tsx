"use client";
import Image from "next/image";
import React from "react";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { IoGameControllerSharp } from "@react-icons/all-files/io5/IoGameControllerSharp";
import { VscGlobe } from "@react-icons/all-files/vsc/VscGlobe";
import GameCarousel from "@/app/LandingComponents/GamesCarousel";
import { Header } from "~~/components/Header";
import CardsFeatures from "@/app/LandingComponents/CardsFeatures";
import IconList from "@/app/LandingComponents/IconList";
import Link from "next/link";
import "./styles/styles.css";
import { Footer } from "~~/components/Footer";

export default function Home() {
  const items = [
    "CRYPTO GAMING",
    "STRATEGY GAME",
    "MIND - BENDING",
    "NFT ASSETS",
  ];

  const users = [
    {
      id: 1,
      medal: "/gold-medal.png",
      avatar: "/avatar.png",
      name: "YIXUAN",
      points: "8888",
    },
    {
      id: 2,
      medal: "/silver-medal.png",
      avatar: "/avatar.png",
      name: "YIXUAN",
      points: "8888",
    },
    {
      id: 3,
      medal: "/bronce-medal.png",
      avatar: "/avatar.png",
      name: "YIXUAN",
      points: "8888",
    },
  ];

  return (
    <>
      <div className="relative bg-image w-full h-[850px]">
        <div
          className={`flex  h-full justify-center items-center flex-col gap-8 md:gap-16 font-arcade`}
        >
          <div className="flex gap-2 md:gap-6 text-white text-center text-[22px] md:text-[70px] font-bold">
            <span>ON-CHAIN</span>
            <span>•</span>
            <span>RANDOMNESS</span>
            <span>•</span>
            <span>STRATEGY</span>
          </div>
          <button className="relative text-white text-[16px] md:text-[20px] py-2 md:py-4 px-10 md:px-20 font-arcade bg-clip-padding border-4 border-transparent bg-gradient-to-r from-[#AD6DFF] to-[#00ECFF] hex-button">
            <span className="absolute inset-0 bg-black z-10 border-4 border-transparent rounded-lg bg-clip-padding p-1 hex-button"></span>
            <span className="relative z-20">DOWNLOAD</span>
          </button>
        </div>
      </div>

      <main className="font-monserrat">
        <div className="bg-transparent">
          <div className="flex justify-center items-center">
            <IconList items={items} />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center pt-10 md:pt-20 px-6 text-center gap-10">
              <span className="text-lg md:text-5xl font-bold pb-4 md:pb-10 text-responsive">
                AVAILABLE ON
              </span>
              <div className="w-full flex flex-wrap md:flex-nowrap justify-center pb-10 md:pb-20 items-center gap-10">
                <div className="text-center">
                  <div className="lg:text-3xl flex items-center gap-5 lg:gap-20 justify-center font-valorant text-responsive">
                    <div className="flex flex-col items-center">
                      <span>300+</span>
                      <span className="text-xs lg:text-lg">DOWNLOADS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>200+</span>
                      <span className="text-xs lg:text-lg">ACTIVE USERS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>4.9</span>
                      <span className="text-xs lg:text-lg">STORE RATING</span>
                    </div>
                  </div>
                  <div className="flex gap-8 lg:gap-20 py-5 lg:py-10 justify-center">
                    <Image
                      src="/appStore.svg"
                      alt="logo app store"
                      width={150}
                      height={29}
                      className="lg:w-[200px]  lg:h-[86px]"
                    />
                    <Image
                      src="/google.svg"
                      alt="logo google"
                      width={150}
                      height={28}
                      className="lg:w-[200px] lg:h-[86px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-[600px] width-container">
                  <span className="text-lg md:text-3xl text-center text-responsive">
                    Leaderboard
                  </span>
                  <div className="flex flex-col justify-center items-center gap-4">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="flex bg-[#21262B] py-3 px-4 items-center rounded-[17px] w-[500px] width-content"
                      >
                        <Image
                          src={user.medal}
                          alt="medal"
                          width={45}
                          height={65}
                        />
                        <div className="flex justify-between w-full ml-4">
                          <div className="flex gap-4 items-center">
                            <Image
                              src={user.avatar}
                              alt="avatar"
                              width={40}
                              height={40}
                            />
                            <span>{user.name}</span>
                          </div>
                          <div className="flex items-center">
                            {user.points} pts.
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20">
                <div className="flex justify-center items-center w-full max-w-[297px] lg:max-w-[742px] h-auto lg:h-[517px]">
                  <Image
                    src="/video-highlights.svg"
                    alt="icon play"
                    width={545}
                    height={317}
                  />
                </div>
                <div className="max-w-full lg:max-w-[520px] flex flex-col gap-4 p-4 text-center lg:text-left m-inline">
                  <span className="text-2xl lg:text-5xl font-bold m-mobile">
                    PLAY STRATEGY ON-CHAIN NOW!
                  </span>
                  <span className="text-lg lg:text-xl text-mobile">
                    We bring you an innovative online platform, built with
                    Flutter & Rust on Starknet, that delivers a perfect play
                    experience on both iOS and Android. Enjoy seamless, engaging
                    gameplay anytime, anywhere. Join the fun and start playing
                    now!
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-center py-10 lg:py-20">
                <span className="text-2xl lg:text-5xl font-monserrat pb-5 lg:pb-10 text-center">
                  MAIN FEATURES
                </span>
                <div className="flex flex-wrap justify-center gap-10 lg:gap-20 column-flex">
                  <CardsFeatures
                    icon={<FaUsers className="w-[30px] h-[30px]" />}
                    text="Online Multiplayer"
                  />
                  <CardsFeatures
                    icon={<FaUser className="w-[30px] h-[30px]" />}
                    text="Offline mode"
                  />
                  <CardsFeatures
                    icon={<VscGlobe className="w-[30px] h-[30px]" />}
                    text="Play And Earn"
                  />
                  <CardsFeatures
                    icon={
                      <IoGameControllerSharp className="w-[30px] h-[30px]" />
                    }
                    text="Mobile-First Design"
                  />
                </div>
              </div>
              <div className="w-full bg-games py-10">
                <div className="flex justify-center items-center w-full pb-10 lg:pb-20">
                  <span className="text-2xl lg:text-5xl">GAMES</span>
                </div>
                <GameCarousel />
              </div>
              <div className="w-full py-10 lg:py-20">
                <div className="flex items-center justify-between gap-10">
                  <Image
                    src="/rectan.png"
                    alt="rectan"
                    width={60}
                    height={200}
                  />
                  <div className="flex flex-col items-center justify-center py-10 lg:py-20 gap-10">
                    <span className="text-2xl lg:text-4xl font-bold font-monserrat text-center">
                      POWERED BY
                    </span>
                    <Image
                      src="/starknet.svg"
                      alt="starknet"
                      width={500}
                      height={60}
                      className="img-mobile"
                    />
                  </div>
                  <Image
                    src="/rectan.png"
                    alt="rectan"
                    width={60}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full px-8">
                <div className="flex flex-col gap-4 justify-start m-inline">
                  <Image
                    src="logo-marquis.svg"
                    alt="logo"
                    width={357}
                    height={100}
                  />
                  <div className="flex gap-4 m-inline">
                    <a>
                      <Image src="/x.png" alt="x" width={30} height={30} />
                    </a>
                    <a>
                      <Image
                        src="/message.png"
                        alt="message"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a>
                      <Image
                        src="/discord.png"
                        alt="discord"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a>
                      <Image
                        src="/youtube.png"
                        alt="youtube"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex gap-24 flex-wrap py-10 md:py-20 column-flex">
                  <div className="flex flex-col items-center">
                    <span className="text-[#939393]">Game</span>
                    <a>Download</a>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[#939393]">Resources</span>
                    <a>Docs</a>
                    <a>Blogs</a>
                    <Link href="/brankit">Brand Assets</Link>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[#939393]">Useful Links</span>
                    <a>Terms and Conditions</a>
                    <a>Privacy Policy</a>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <span className="text-[#939393] text-center">
                      Subscribe to our newsletter
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your email address"
                        className="bg-[#21262B] rounded-[45px] px-6 py-3 text-small"
                      />
                      <span className="bg-white text-black px-6 py-3 rounded-[45px] absolute left-20 md:left-48 absolute-container text-small">
                        Subscribe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}