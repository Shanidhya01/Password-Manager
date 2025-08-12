import React from 'react'
import {LuGithub } from "react-icons/lu"
function Navbar() {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold px-4 text-white text-2xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-4 '>
            <a className='hover:font-bold' href='#'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
          </li>
        </ul>  */}
        <button className='text-white bg-green-700 my-5 rounded-full flex gap-0.5 justify-between items-center px-2 py-1'>
          <LuGithub className='w-6 h-6' />
          <span className='font-bold px-1'></span>
          <a
            href='https://github.com/Shanidhya01'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary group'>
            <span className='font-semibold tracking-wide'>GitHub</span>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
