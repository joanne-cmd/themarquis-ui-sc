"use client"
import Image from "next/image"
import GameButtons from "../../components/GameButtons/gameButtons"
import Chips, { Color } from "../../components/RouletteChips/Chips/Chips"
import { useState, useEffect } from "react"
import ChosenNumbers from "../../components/ChosenNumbers/ChosenNumbers"
import SlotNumber from "../../components/RouletteNumber/SlotNumber"
import { ColorSlot } from "../../components/RouletteNumber/SlotNumber";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm"
import '../../roulette.css'
import MiniatureChips from "../../components/MiniatureChips/MiniatureChips"

interface Slot {
    color: string
    coins: number[];
}

export const slots: Slot[] = [
    {
        color: '',
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },

    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Gray,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },

    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
    {
        color: ColorSlot.Purple,
        coins: []
    },
];

function Board() {
    const [data, setData] = useState(slots)
    const [valueChip, setValuechip] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eraseMode, setEraseMode] = useState(false);
    const [selectedChip, setSelectedChip] = useState<Color | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleChipClick = (color: Color) => {
        setSelectedChip((prevColor) => (prevColor === color ? null : color));
      };

      const handleBoardClick = () => {
        setSelectedChip(null);
      };

    useEffect(() => {
        if (eraseMode) {
            document.body.classList.add('erase-mode');
        } else {
            document.body.classList.remove('erase-mode');
        }
        return () => {
            document.body.classList.remove('erase-mode');
        };
    }, [eraseMode]);

    const calculateTotalBets = () => {
        const totalBets = data.reduce((total, slot) => {
            return total + slot.coins.reduce((sum, coin) => sum + coin, 0);
        }, 0);
        return totalBets;
    };

    const handleConfirmClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        const resetSlots = slots.map(slot => ({ ...slot, coins: [] }));
        setData(resetSlots);
    };

    const handleEraseClick = () => {
        setEraseMode(!eraseMode);
    };

 
    //console.log(data)
    return (
        <section onMouseMove={handleMouseMove} onClick={handleBoardClick}>
            <div className="flex gap-20 justify-center items-center">
                <div className="flex gap-8">
                    <div className="py-4 px-6 border border-solid border-white flex justify-between rounded-2xl w-[400px] bg-[#111]">
                        <span>BETS:</span>
                        <span>{calculateTotalBets()} USDM</span>

                    </div>
                    <div className="py-4 px-6 border border-solid border-white flex justify-between rounded-2xl w-[400px] bg-[#111]">
                        <span>BALANCE:</span>
                        <span>68 USDM</span>
                    </div>
                    <button>
                        <Image src="/images-game/help_icon.png" alt="icon" width={30} height={30}></Image>
                    </button>
                </div>
                <div className="flex items-center">
                    <span>BET CLOSED!</span>
                    <div className="timer">
                        <span className="text-3xl">00</span>
                    </div>
                </div>
            </div>
            <div className="container-game">
                <div className="flex flex-col items-center justify-between">
                    <Image src="/images/roulette-1.png" alt="roulette" width={560} height={560}></Image>
                    <button
                        className="btn-degrade w-[400px] rounded-[12px] text-white text-2xl hover:text-gray-200 px-24 py-4"
                        onClick={handleConfirmClick}
                    >CONFIRM</button>
                </div>
                {isModalOpen && (
                    <ModalConfirm
                        setIsModalOpen={handleCloseModal}
                        bets={calculateTotalBets()}
                        handleConfirm={handleConfirm}
                    ></ModalConfirm>
                )}
                <div className="container-boardgame">
                    <div className="container-board">
                        <div>
                            <ChosenNumbers setData={setData} slots={slots}></ChosenNumbers>
                        </div>
                        <div className="flex flex-col">
                            <div className="table">
                                {data.map((element, index) => {
                                    return (
                                        <SlotNumber
                                            background={element.color}
                                            key={index}
                                            slot={element}
                                            slots={data}
                                            setData={setData}
                                            index={index}
                                            valueChip={valueChip}
                                            eraseMode={eraseMode}
                                        >{index}</SlotNumber>);
                                }
                                )}
                                <button className='w-[50px] h-[70px] border border-solid border-white text-center'>1st</button>
                                <button className='w-[50px] h-[70px] border border-solid border-white'>2st</button>
                                <button className='w-[50px] h-[70px] border border-solid border-white'>3st</button>
                            </div>
                            <div className="option">
                                <div className="flex flex-col w-[200px] justify-center items-center border border-solid border-white">
                                    <div className="py-4">1-12</div>
                                    <div className="flex">
                                        <div className="w-[100px] text-center border border-solid border-white py-4">1-18</div>
                                        <div className="w-[100px] text-center border border-solid border-white py-4">EVEN</div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[200px] justify-center items-center border border-solid border-white">
                                    <div className="py-4">13-24</div>
                                    <div className="flex">
                                        <div className="w-[100px] text-center border border-solid border-white bg-[#2B2A2A] py-4">BLACK</div>
                                        <div className="w-[100px] text-center border border-solid border-white bg-[#561589] py-4">PURPLE</div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[200px] justify-center items-center border border-solid border-white">
                                    <div className="py-4">25-35</div>
                                    <div className="flex">
                                        <div className="w-[100px] text-center border border-solid border-white py-4">ODD</div>
                                        <div className="w-[100px] text-center border border-solid border-white py-4">19-35</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 container-chip">
                        
                        <Chips color={Color.White} 
                        onClick={function () { setValuechip(5), handleChipClick(Color.White); }} 
                        mousePosition={mousePosition} 
                  
                          >5</Chips>
                        <Chips color={Color.Blue} 
                        onClick={function () { setValuechip(10), handleChipClick(Color.Blue); }} 
                        mousePosition={mousePosition} 
             
                        >10</Chips>

                        <Chips color={Color.Yellow} 
                        onClick={function () { setValuechip(50), handleChipClick(Color.Yellow); }} 
                        mousePosition={mousePosition} 
                   
                        >50</Chips>

                        <Chips color={Color.Green} 
                        onClick={function () { setValuechip(100),handleChipClick(Color.Green); }} 
                        mousePosition={mousePosition} 
                        
                        >100</Chips>
                    </div>
                    
                    <GameButtons
                        clear={handleConfirm}
                        eraseMode={eraseMode}
                        handleEraseClick={handleEraseClick}
                    ></GameButtons>
                    {selectedChip && (
                        <MiniatureChips
                          mousePosition={mousePosition}
                          color={selectedChip}
                        />
                      )}
                </div>
            </div>
        </section>
    )
}

export default Board