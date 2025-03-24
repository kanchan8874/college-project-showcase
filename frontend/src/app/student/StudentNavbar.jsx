'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const StudentNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Default state is false for the mobile menu

    return (
        <div className="bg-gradient-to-r from-blue-950 bg-blue-950 rounded-full h-20">
            <div className="mx-auto max-w-screen-lg px-4 md:px-6">
                <header className="flex justify-between py-3 md:py-4 items-center">
                    {/* Logo */}
                    <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
                        <div className='bg-white p-2 rounded-2xl'>
                            <img className='size-12' src="/images/logo2-removebg.png" alt="logo" />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden gap-8 lg:flex">
                        <Link href="/student/addproject" className="text-lg font-semibold p-2 xl:p-2 hover:bg-yellow-600 rounded-full text-white mx-4">
                            Add Project
                        </Link>
                        <Link href="/student/profile" className="text-lg font-semibold p-2 xl:p-2 hover:bg-yellow-600 rounded-full text-white mx-4">
                            Profile
                        </Link>
                    </nav>

                    {/* Logout Button (Desktop) */}
                    <div className="hidden sm:flex">
                        <Link href="#" className="inline-block rounded-lg bg-white px-8 py-2 text-sm font-bold text-black outline-none">
                            Logout
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-300 focus-visible:ring"
                        aria-expanded={isMenuOpen}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Menu
                    </button>
                </header>

                {/* Mobile Menu (Fix Applied) */}
                <div className={`lg:hidden flex flex-col bg-blue-950 text-white p-4 rounded-lg mt-2 transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 scale-100 block' : 'opacity-0 scale-95 hidden'}`}>
                    <Link href="/student/addproject" className="block py-2 px-4 rounded-lg hover:bg-yellow-600">Add Project</Link>
                    <Link href="/student/profile" className="block py-2 px-4 rounded-lg hover:bg-yellow-600">Profile</Link>
                    <Link href="#" className="block py-2 px-4 mt-2 bg-white text-black rounded-lg text-center font-bold">Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default StudentNavbar;
