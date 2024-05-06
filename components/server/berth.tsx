"use client"

import Image from "next/image"
import Sleeper from "./sleeper"
import Wheel from "@/public/steering-wheel.png"

import jsonObject from "@/Data.json"
import SleeperDouble from "./sleeperDouble"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { noOfPassangersAtom } from "@/app/(Recoil)/(atom)/noOfPassangers"
import { selectAtom } from "@/app/(Recoil)/(atom)/select"

type allSleepers = {
    [key: string]: boolean
}

interface selection {
    [key: string]: boolean
}

interface dataObjectTypes {
    [key: string]: number
}

interface dataObject {
    Price: dataObjectTypes
}

const Berth = () => {

    const { LowerSingle,
        LowerDouble,
        UpperSingle,
        UpperDouble,
        AllSleepers,
    } = jsonObject

    const { Price }: dataObject = jsonObject

    const setNoOfPassangers = useSetRecoilState(noOfPassangersAtom)
    const select= useRecoilValue(selectAtom)

    const handleNoOfPassangers = (value: string, n: number) => {
        if (select[value] === true) {
            setNoOfPassangers(prev => prev - n)
        } else {
            setNoOfPassangers(prev => prev + n)
        }
    }

    return (
        <div className="flex w-[580px] justify-between gap-4">
            <div className="upper bg-slate-300 w-[280px] rounded-xl">
                <div className="text-center text-xl font-semibold p-2">
                    Upper Deck
                </div>
                <div className=" w-14 float-right px-3">
                    <Image src={Wheel} alt="wheel" />
                </div>
                <div className="flex justify-between w-full">
                    <div className="w-1/2 p-3 text-left">
                        <div className="text-lg">
                            Single
                        </div>
                        {UpperSingle.map((n: string, index) => (
                            <Sleeper key={index} n={n} Price={Price} handleNoOfPassangers={handleNoOfPassangers} />
                        ))}
                    </div>
                    <div className="w-1/3 p-3 text-right" >
                        <div className=" text-lg text-center">
                            Double
                        </div>
                        {UpperDouble.map((n, index) => (
                            <SleeperDouble key={index} n={n} Price={Price} handleNoOfPassangers={handleNoOfPassangers} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="upper bg-slate-300 w-[280px] rounded-xl">
                <div className="text-center text-xl font-semibold p-2">
                    Lower Deck
                </div>
                <div className=" w-14 float-right px-3">
                    <Image src={Wheel} alt="wheel" />
                </div>
                <div className="flex justify-between w-full">
                    <div className="w-1/2 p-3 text-left">
                        <div className="text-lg">
                            Single
                        </div>
                        <div>
                            {LowerSingle.map((n, index) => (
                                <Sleeper key={index} n={n} Price={Price} handleNoOfPassangers={handleNoOfPassangers} />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 p-3 text-right" >
                        <div className="text-lg text-center">
                            Double
                        </div>
                        {LowerDouble.map((n, index) => (
                            <SleeperDouble key={index} n={n} Price={Price} handleNoOfPassangers={handleNoOfPassangers} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Berth
