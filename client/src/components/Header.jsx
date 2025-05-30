import React from 'react';
import {FaSearch} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>3080</span>
                <span className='text-slate-700'>Circle</span>
            </h1>
            </Link>
            <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-auto'/>
                <FaSearch className=" text-slate-500"/>
            </form>
            <ul className='flex gap-4 items-center'>
                <Link to="/">
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to="/about">
                <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                {currentUser? <Link to="/profile"><img className=' rounded-full w-9 h-9 object-cover' src={currentUser.avatar} alt="" /></Link>:<Link to="/sign-in">
                <li className=' text-slate-700 hover:underline'>Sign in</li>
                </Link>}
            </ul>
        </div>   
    </header>
  )
}

export default Header