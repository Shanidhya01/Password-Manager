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
            <a
              href='https://github.com/Shanidhya01'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white bg-green-700 hover:bg-green-600 transition my-5 rounded-full flex gap-1 items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              <LuGithub className='w-6 h-6' />
              <span className='font-semibold'>GitHub</span>
            </a>
      </div>
    </nav>
  )
}

export default Navbar
