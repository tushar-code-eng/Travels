"use client"
import React from 'react'
import Lpdesc from './Lpdesc'
import LpStart from './LpStart'
import { useRef } from 'react'

const LpBody = () => {

  const doClick = (elmRef: object) => {
    console.log(elmRef)
  }

  return (
    <div className='hidden sm:block'>
      <Lpdesc doClick={doClick} />
      <LpStart />
    </div>
  )
}

export default LpBody