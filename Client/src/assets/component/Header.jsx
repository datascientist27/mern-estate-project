import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
     <header className=' bg-emerald-950 shadow-xl'>
        <div className='flex justify-between items-center mx-auto max-w-6xl p-6'>
        <h1 className='font-bold tex-sm sm:text-xl flex  flex-wrap'>
            <span className=' text-sky-50'>TOGO</span><span className='text-sky-100'>-Immo</span>
        </h1>
        <form className='bg-sky-50 rounded-lg p-2 flex items-center' >
            <input type="text" placeholder='Search... ' className='bg-transparent focus:outline-none  w-24 sm:w-64' />
            <FaSearch className='text-sky-700'/>
        </form>
        <ul className='flex text-sky-50 gap-6'>
           <Link to='/'>  <li className='hidden sm:inline hover:underline'>Home</li></Link>           
            <Link to='about'> <li className=' hidden sm:inline hover:underline '>About </li></Link>
            <Link to='sign-in'><li className='hover:underline'>Sign In</li></Link>
        </ul>
        </div>
       
     </header>
    </div>
  )
}
