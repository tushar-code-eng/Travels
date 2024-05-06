"use client"
import LpBooking from "@/components/laptopComponents/LpBooking"
import MbBooking from "@/components/mobileComponents/MbBooking"
import { useState } from "react";
import { RecoilRoot } from "recoil";

interface selection {
    [key: string]: boolean
}

const page = () => {

    return (
        <div h-full>
            <RecoilRoot>
                <MbBooking />
                <LpBooking />
            </RecoilRoot>
        </div>
    )
}

export default page
