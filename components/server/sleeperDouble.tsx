"use client"
import { greenAtom } from "@/app/(Recoil)/(atom)/green"
// import { noOfPassangersAtom } from "@/app/(Recoil)/(atom)/noOfPassangers"
import { seatCountAtom } from "@/app/(Recoil)/(atom)/seatCount"
import { selectAtom } from "@/app/(Recoil)/(atom)/select"
import { totalPriceAtom } from "@/app/(Recoil)/(atom)/totalPrice"
import { useRecoilState, useSetRecoilState } from "recoil"

type allSleepers = {
    [key: string]: boolean
}

type priceType = {
    [key: string]: number
}

interface AllSleepers {
    [key: string]: boolean
}

interface selectInterface {
    [key:string]:boolean
}

interface SleeperProps {
    n: string
    Price: priceType
    handleNoOfPassangers:(value: string, n: number) => void
}

const SleeperDouble = ({ n, Price,handleNoOfPassangers }: SleeperProps) => {

    const [select, setSelect] = useRecoilState(selectAtom)
    const [green, setGreen] = useRecoilState(greenAtom)
    const setSeatCount = useSetRecoilState(seatCountAtom)
    const setTotalPrice = useSetRecoilState(totalPriceAtom)
    // const setNoOfPassangers = useSetRecoilState(noOfPassangersAtom)

    const handleClick = (value: string) => {
        setGreen((prevState) => ({
            ...prevState,
            [value]: !prevState[value]
        }))
        setSelect(prevState => ({
            ...prevState,
            [value]: !prevState[value]
        }))
        if (select[value] === true) {
            //decreasing seat Count
            setSeatCount(s => s - 1)
            setTotalPrice(prev => prev - Price[value])
        } else {
            //Increasing seat count
            setSeatCount(s => s + 1)
            setTotalPrice(prev => prev + Price[value])
        }
    }

    return (
        <div className="w-20 relative flex justify-center">
            <div className={green[n] ? " bg-green-600 h-16 w-16 rounded-lg flex justify-center items-center mt-3 cursor-pointer transition-transform ease-in-out duration-200 transform border-0 hover:scale-120" : "h-16 w-16 bg-slate-100 rounded-lg flex justify-center items-center mt-3 cursor-pointer transition-transform ease-in-out duration-200 transform border-0 hover:scale-110"}
                onClick={() => { handleClick(n); handleNoOfPassangers(n, 2) }}>
                {n}
            </div>
            <div className={green[n] ? "absolute right-full top-[40%] bg-slate-800 text-white font-semibold rounded p-1" : "hidden"}>
                ₹{Price[n]}
            </div>
        </div>
    )
}

export default SleeperDouble
