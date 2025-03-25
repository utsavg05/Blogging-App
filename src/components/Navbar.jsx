import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className='bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 w-full shadow-lg sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-12'>
                {/* Logo */}
                <Link to='/' className='text-white font-extrabold text-3xl md:text-4xl tracking-tight'>BeBlogger</Link>

                {/* Menu Button for Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white text-3xl focus:outline-none'>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`absolute md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-blue-500 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:space-x-8 text-center transition-all duration-500 ease-in-out ${isOpen ? 'backdrop-blur-md bg-blue-500/70 translate-x-0' : '-translate-x-full md:translate-x-0 hidden md:flex'}`}>
                    <button onClick={toggleMenu} className='absolute top-12 right-5 text-white text-3xl md:hidden'>
                        <FaTimes />
                    </button>
                    <Link onClick={closeMenu} to='/signup' className='text-white font-semibold text-lg py-4 md:py-0 hover:underline hover:text-yellow-300 transition'>
                        Log in
                    </Link>

                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6'>
                        <Link to='/create'>
                            <button onClick={closeMenu} className='cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold rounded-lg px-6 py-3 transition-transform transform hover:scale-105 shadow-md'>
                                ✍️ Create Blog
                            </button>
                        </Link>

                        <Link to='/signup'>
                            <button onClick={closeMenu} className='cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-semibold rounded-lg px-6 py-3 transition-transform transform hover:scale-105 shadow-md'>
                                🚀 Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


