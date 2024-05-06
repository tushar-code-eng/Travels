import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

import whatsapp from "@/public/whatsapp.png"
import { Switch } from '@mui/material';

const MbPassangerDetails = () => {
    return (
        <div className=' md:hidden'>
            <div className=" border-2 border-slate-300 w-[95%] m-auto mt-2 rounded-lg shadow-xl p-2">
                <div className="flex justify-between">
                    <div>
                        <div className="text-sm font-bold">
                            Sun, 21 Apr - 23:45
                        </div>
                        <div className="text-xs">
                            PickUp
                        </div>
                    </div>
                    <div>
                        <ArrowForwardIcon />
                    </div>
                    <div>
                        <div className="text-sm font-bold">
                            Mon, 22 Apr - 23:45
                        </div>
                        <div className="text-xs">
                            Drop Off
                        </div>
                    </div>
                </div>
                <div className="font-bold text-yellow-500 mt-2">
                    VOLVO AC Sleeper (2+1)
                </div>
                <div>
                    <div className="h-36 p-2 flex justify-center gap-6">
                        <div className=" flex flex-col justify-between" >
                            <div>
                                Pickup time
                            </div>
                            <div >
                                duration
                            </div>
                            <div >
                                DropOff Time
                            </div>
                        </div>
                        <div className="h-full w-2 bg-slate-300 flex flex-col items-center justify-between">
                            <div className="w-2 h-2 bg-black rounded-[50%]">
                            </div>
                            <div className="w-2 h-2 bg-black rounded-[50%]">
                            </div>
                        </div>
                        <div className=" flex flex-col justify-between" >
                            <div>
                                Pickup Location
                            </div>
                            <div >
                                DropOff Location
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 border-slate-300 w-[95%] m-auto mt-2 rounded-lg shadow-xl p-2'>
                <div >
                    <div className='text-xl font-bold'>
                        Contact Details
                    </div>
                    <div className='text-xs'>
                        Tickets and bus details will be sent here
                    </div>
                </div>
                <div className='w-[95%] border bg-white rounded px-2 py-1 m-auto mt-3'>
                    <div className='text-xs'>
                        Email ID
                    </div>
                    <input className='font-semibold outline-none w-full' placeholder='tusharbajaj10@gmail.com' />
                </div>
                <div className='w-[95%] border bg-white rounded px-2 py-1 m-auto my-3'>
                    <div className='text-xs'>
                        Phone
                    </div>
                    <input className='font-semibold outline-none w-full' placeholder='6280918368' />
                </div>
                <div className='flex justify-between items-center gap-3 w-full'>
                    <div>
                        <Image src={whatsapp} width={40} alt='Image' />
                    </div>
                    <div className='text-xs'>
                        Share booking and trip details on WhatsApp
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
            </div>
            <div className='border-2 border-slate-300 w-[95%] m-auto mt-2 rounded-lg shadow-xl p-2'>
                <div className='text-xl font-bold'>
                    Passanger Details
                </div>
                <div className='w-full flex text-sm'>
                    <input className='w-1/2' type="text" placeholder='Full Name' />
                    <input className='w-1/3' type="text" placeholder='Age' />
                    <select
                        id="gender"
                        name="gender"
                        className="w-1/3 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MbPassangerDetails
