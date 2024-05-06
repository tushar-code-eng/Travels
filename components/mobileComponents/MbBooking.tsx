"use client"

import Berth from "../server/berth"
import TotalAmountMb from "./TotalAmountMb"
import jsonObject from "@/Data.json"
import { useSearchParams } from 'next/navigation'
import SleeperInfo from "../server/sleeperInfo"
import { useRecoilValue } from "recoil"
import { seatCountAtom } from "@/app/(Recoil)/(atom)/seatCount"
import { selectAtom } from "@/app/(Recoil)/(atom)/select"

interface selection {
    [key: string]: boolean
}

interface MbBookingParams {
    noOfPassangers: number
    setNoOfPassangers: React.Dispatch<React.SetStateAction<number>>
}

const MbBooking = () => {

    const searchedParams = useSearchParams()

    const getDate = searchedParams.get("date")
    const getDay = searchedParams.get("day")
    const getMonth = searchedParams.get("month")
    const getYear = searchedParams.get("year")

    const getNextDate = searchedParams.get("nextdate")
    const getNextDay = searchedParams.get("nextday")
    const getNextMonth = searchedParams.get("nextmonth")
    const getNextYear = searchedParams.get("nextyear")

    const seatCount = useRecoilValue(seatCountAtom)

    return (
        <div className='lg:hidden'>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-sm">
                            {getDate} {getMonth} {getYear}
                        </div>
                        <div className="text-3xl font-semibold">
                            21:00
                        </div>
                        <div>
                            Chandigarh
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            --7:15hrs--
                        </div>
                        <div className="text-green-600 font-bold">
                            +1 Day
                        </div>
                    </div>
                    <div>
                        <div className="text-sm">
                            {getNextDate} {getNextMonth} {getNextYear}
                        </div>
                        <div className="text-3xl font-semibold flex justify-end">
                            4:15
                        </div>
                        <div className="flex justify-end">
                            Jammu
                        </div>
                    </div>
                </div>
                <div className="mt-6 px-4 flex justify-between items-center">
                    <div className="bg-red-400">
                        Sticker
                    </div>
                    <div className="bg-blue-400">
                        Live Tracking
                    </div>
                </div>
                <div className="overflow-x-auto mt-4 flex justify-start items-center sm:justify-center">
                    <div>
                        <Berth />
                    </div>
                </div>
                <div>
                    <SleeperInfo />
                </div>
            </div>
            <div className="sticky z-10 bottom-0 w-full">
                {(seatCount > 0) && <TotalAmountMb/>}
            </div>
        </div>
    )
}

export default MbBooking
