"use client"
import LOGO from "@/public/logo.png"
import Image from 'next/image';
import { useUser } from "@clerk/clerk-react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {

  const { user } = useUser()

  return (
    <div className=" flex items-center justify-between sm:p-1 bg-white text-black sticky top-0 z-10 sm:border-b-2 border-b-4 shadow-sm">
      <div className='cursor-pointer sm:w-20 w-24 items-start justify-start'>
        <Image src={LOGO} alt='LOGO' />
      </div>
      {!user ? <SignInButton mode='modal' >
        <div className=' cursor-pointer px-2 py-1 bg-slate-700 rounded-lg text-lg text-white font-medium hover:bg-yellow-500 mr-4'>
          Sign In
        </div>
      </SignInButton> :
        <div className="mr-4" >
          <UserButton />
        </div>}
    </div>
  )
}

export default Navbar

