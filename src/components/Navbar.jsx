import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div className='bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 w-full max-h-[90px] flex items-center justify-between p-4 sticky top-0 z-50 shadow-lg'>
        <Link to="/" className='text-white font-extrabold text-4xl ml-24 tracking-tight'>BeBlogger</Link>
        <div className='flex space-x-8 items-center mr-24'>
            <Link to="/login" className='font-semibold text-white text-lg hover:underline hover:text-yellow-300'>Log in</Link>
            <Link to="/signup">
                <button className='bg-yellow-400 text-black text-lg rounded-lg px-5 py-3 hover:cursor-pointer hover:bg-yellow-500 hover:shadow-md'>Get Started</button>
            </Link>

        </div>
    </div>
)
}

export default Navbar
