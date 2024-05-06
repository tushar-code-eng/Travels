"use client"

import React, { useState } from 'react'
import Berth from '../server/berth'
import TotalAmount from './TotalAmount'
import { useSearchParams } from 'next/navigation'
import SleeperInfo from '../server/sleeperInfo'
import Image from 'next/image'

import jsonObject from "@/Data.json"

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import LOGO from "@/public/logo.png"

import { useUser } from "@clerk/clerk-react";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { selectAtom } from '@/app/(Recoil)/(atom)/select'
import { seatCountAtom } from '@/app/(Recoil)/(atom)/seatCount'
import { totalPriceAtom } from '@/app/(Recoil)/(atom)/totalPrice'
import { noOfPassangersAtom } from '@/app/(Recoil)/(atom)/noOfPassangers'

interface dataObjectTypes {
    [key: string]: number
}

interface dataObject {
    Price: dataObjectTypes
}

const LpBooking = () => {

    const select = useRecoilValue(selectAtom)
    const seatCount = useRecoilValue(seatCountAtom)
    const totalPrice = useRecoilValue(totalPriceAtom)
    const noOfPassangers = useRecoilValue(noOfPassangersAtom)

    const { user } = useUser()

    const { Price }: dataObject = jsonObject

    let sl = Object.keys(select)

    const searchedParams = useSearchParams()

    const getDate = searchedParams.get("date")
    const getDay = searchedParams.get("day")
    const getMonth = searchedParams.get("month")
    const getYear = searchedParams.get("year")

    const getNextDate = searchedParams.get("nextdate")
    const getNextDay = searchedParams.get("nextday")
    const getNextMonth = searchedParams.get("nextmonth")
    const getNextYear = searchedParams.get("nextyear")

    const getPickUp = searchedParams.get("pickfrom")
    const getDropOff = searchedParams.get("dropto")

    return (
        <div className='hidden lg:grid w-[95%] xl:w-[90%] m-auto mt-6 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 bg-white grid-cols-8 mb-4'>
            <div className=' col-start-1 col-end-6 flex flex-col justify-center items-center p-4'>
                <div className='w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <div>
                            <div className='text-sm'>
                                {getDate} {getMonth} {getYear}
                            </div>
                            <div className='text-2xl font-semibold flex justify-center'>
                                21:00
                            </div>
                        </div>
                        <div>
                            <div>
                                --7:15hrs--
                            </div>
                            <div className='text-green-600 font-bold flex justify-center'>
                                +1 Day
                            </div>
                        </div>
                        <div>
                            <div className='text-sm'>
                                {getNextDate} {getNextMonth} {getNextYear}
                            </div>
                            <div className='text-2xl font-semibold flex justify-center'>
                                4:15
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 m-3'>
                    <div>Sticker</div>
                    <div>Location</div>
                </div>
                <div className='flex w-full'>
                    <div>
                        <Berth />
                    </div>
                    <div className='mx-4 flex-col items-start w-full hidden 2xl:flex'>
                        <div className='flex gap-6 items-center justify-between w-full mb-3'>
                            <div>Single Sleeper <br /> <span className='text-sm'>(For 1 passanger)</span></div>
                            <div className='h-10 w-7 border border-black rounded-lg '></div>
                        </div>
                        <div className='flex gap-6 items-center justify-between w-full mb-3'>
                            <div>Double Sleeper <br /> <span className='text-sm'>(For 2 passangers)</span></div>
                            <div className='h-10 w-10 border border-black rounded-lg '></div>
                        </div>
                        <div className='flex gap-6 items-center justify-between w-full mb-3'>
                            <div>Available</div>
                            <div className='h-10 w-7 border border-black rounded-lg '></div>
                        </div>
                        <div className='flex gap-6 items-center justify-between w-full mb-3'>
                            <div>Already Booked</div>
                            <div className='h-10 w-7 border border-black rounded-lg bg-slate-500'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' col-start-6 col-end-9 border-l-2'>
                <div className='flex justify-between w-full border-b-2 shadow-md'>
                    <div className='p-4'>
                        <div className='text-2xl font-bold text-yellow-500'>
                            VOLVO AC
                        </div>
                        <div>
                            Sleeper(2+1)
                        </div>
                    </div>
                    <div className='px-2' >
                        <Image src={LOGO} alt='LOGO' width={100} />
                    </div>
                </div>
                <div className='p-4 text-xl'>
                    <div className=' font-medium mt-4'>
                        <KeyboardDoubleArrowUpIcon /> Pick Up Point
                    </div>
                    <div className='p-2 border-2 rounded-xl text-gray-500 text-base mt-2'>
                        {getPickUp}
                    </div>
                    <div className=' font-medium mt-6'>
                        <KeyboardDoubleArrowDownIcon /> Drop Off Point
                    </div>
                    <div className='p-2 border-2 rounded-xl text-gray-500 text-base mt-2'>
                        {getDropOff}
                    </div>
                </div>
                <div className='p-4 border-b-2'>
                    <div className=' text-lg font-medium'>
                        Fair Break Up
                    </div>
                    <div className='mt-2 py-2 px-4 w-full border-2 rounded-xl max-h-28 h-28 overflow-y-auto' >
                        {sl.map((index, i) => (
                            <div className='flex justify-between'>
                                <div>
                                    {select[index] && index}
                                </div>
                                <div className=' font-semibold text-green-500'>
                                    <span>{select[index] && "₹"}</span>
                                    {select[index] && Price[index]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-lg font-semibold p-4'>
                    Fair Details
                </div>
                <div className='flex justify-between items-center w-full px-4 py-1'>
                    <div>
                        {(seatCount > 0) && <div> {seatCount} Sleeper Selected </div>}
                    </div>
                    <div className='font-bold text-lg'>
                        {(seatCount > 0) && <div> ₹ {totalPrice} </div>}
                    </div>
                </div>
                <div className='flex justify-center items-center w-full mt-5'>
                    {
                        user ?
                            (noOfPassangers > 0) ?
                                <Link className='w-full flex justify-center' href={{
                                    pathname: '/passangersdetails',
                                    query: {
                                        number: noOfPassangers
                                    }
                                }
                                }>
                                    <button className="w-3/4 bg-yellow-500 active:bg-yellow-600 text-white text-xl font-medium p-3 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105 focus:outline-none">
                                        Provide Passanger Details
                                    </button>
                                </Link>
                                :
                                <div className='w-full flex flex-col items-center'>
                                    <div>
                                        <i>
                                            (Please Select Atleast One Sleeper)
                                        </i>
                                    </div>
                                    <button className="w-3/4 bg-yellow-500 opacity-50 text-white text-xl font-medium p-3 rounded-md shadow-md ">
                                        Provide Passanger Details
                                    </button>
                                </div>
                            :
                            <SignInButton mode='modal'>
                                <div className=" cursor-pointer bg-yellow-500  active:bg-yellow-600 text-white text-xl font-medium p-3 w-3/4 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105 focus:outline-none text-center">
                                    Provide Passanger Details
                                </div>
                            </SignInButton>
                    }

                </div>
            </div>
        </div>
    )
}

export default LpBooking
