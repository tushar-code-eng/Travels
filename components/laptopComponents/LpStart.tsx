"use client"
import Image from "next/image"
import querryImage from '@/public/querry.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LpBox from "./LpBox";

const LpStart = () => {

    return (
        <div className="w-full mt-20">
            <div className="w-[85%] mx-auto border-2 mb-2 rounded-md">
                <div className=' flex justify-between p-2 border-b-2 shadow-sm'>
                    <div>
                        <h1 className='text-yellow-500 text-3xl font-bold'>VOLVO AC</h1>
                        <p className='text-sm text-left ml-1'>sleeper(2+1)</p>
                    </div>
                    {/* <div>
                        <p className='text-sm '>Starting At</p>
                        <h1 className='text-center text-3xl font-bold'>₹ 707</h1>
                    </div> */}
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <LpBox />
                    </div>
                    <div className="flex justify-center items-center">
                        Image
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LpStart
