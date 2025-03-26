'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const StudentNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-950 to-blue-950 shadow-xl">
            {/* Desktop Navbar */}
            <div className="h-18 hidden md:flex items-center justify-between px-5">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <div className='bg-white p-2 rounded-2xl'>
                        <img className='size-12' src="/images/logo2-removebg.png" alt="logo" />
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link href="/student/addproject" className="text-lg font-semibold p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                        Add Project
                    </Link>
                    <Link href="/student/profile" className="text-lg font-semibold p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                        Profile
                    </Link>
                    <Link href="#" className="bg-white hover:bg-gray-200 text-black font-bold px-6 py-2 rounded">
                        Logout
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                <div className="flex items-center justify-between p-4">
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center">
                        <div className='bg-white p-2 rounded-2xl'>
                            <img className='size-8' src="/images/logo2-removebg.png" alt="logo" />
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute w-full bg-blue-950 z-50">
                        <nav className="flex flex-col px-4 py-2">
                            <Link 
                                href="/student/addproject" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Add Project
                            </Link>
                            <Link 
                                href="/student/profile" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link 
                                href="#" 
                                className="text-white py-3 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Logout
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default StudentNavbar;
