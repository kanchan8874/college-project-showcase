'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const MainNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-blue-950 to-blue-950 shadow-2xl relative">
                {/* Desktop Navbar */}
                <div className="h-18 hidden md:flex items-center justify-between px-5">
                    <Link href="/" className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                        <div className='bg-white p-2 rounded-2xl'>
                            <img className='size-12' src="/images/logo2-removebg.png" alt="logo" />
                        </div>
                    </Link>
                    <nav className="header-links contents font-semibold text-center">
                        <ul className="flex items-center ml-4 xl:ml-8 mr-auto gap-6 text-xl">
                            <li className="p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                                <Link href="/browseproject">BrowseProject</Link>
                            </li>
                            <li className="p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="p-2 xl:p-2 hover:bg-yellow-600 text-white mx-4">
                                <Link href="/aboutus">AboutUs</Link>
                            </li>
                        </ul>
                    </nav>

                    <div
                        className="relative p-2 xl:p-2 text-white mx-4 text-xl font-semibold"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className='bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-1 xl:py-2 '>
                            <span>Login</span>
                        </button>
                        {isDropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10 text-black border border-gray-600"
                                onMouseEnter={() => setIsDropdownOpen(true)}  // ✅ Dropdown open rahega jab tak mouse dropdown me hai
                                onMouseLeave={() => setIsDropdownOpen(false)} // ✅ Mouse bahar jaane pr band hoga
                            >
                                <Link href="/login" className="block px-4 py-2 hover:bg-blue-900 hover:text-white">
                                    Admin Login
                                </Link>
                                <Link href="/studentlogin" className="block px-4 py-2 hover:bg-blue-900 hover:text-white">
                                    Student Login
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center px-4 lg:px-6 xl:px-8">
                        {isLoggedIn ? (
                            <button className="bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full"
                                onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link href="/signup" className="mr-4 lg:mr-6 xl:mr-8">
                                <button className="bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-1 xl:py-2 ">
                                    Sign up
                                </button>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-4">
                        <Link href="/" className="flex items-center">
                            <div className='bg-white p-2 rounded-2xl'>
                                <img className='size-8' src="/images/logo2-removebg.png" alt="logo" />
                            </div>
                        </Link>
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
                                <Link href="/" className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600">
                                    Home
                                </Link>
                                <Link href="/browseproject" className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600">
                                    Browse Project
                                </Link>
                                <Link href="/contact" className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600">
                                    Contact
                                </Link>
                                <Link href="/aboutus" className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600">
                                    About Us
                                </Link>
                                
                                {/* Mobile Login Options */}
                                <div className="py-3 border-b border-gray-700">
                                    <button 
                                        className="w-full text-left text-white py-2"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        Login ▼
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="pl-4 mt-2 space-y-2">
                                            <Link href="/login" className="block text-white hover:text-yellow-600">
                                                Admin Login
                                            </Link>
                                            <Link href="/studentlogin" className="block text-white hover:text-yellow-600">
                                                Student Login
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Sign Up Button */}
                                {!isLoggedIn && (
                                    <Link href="/signup" className="py-3">
                                        <button className="w-full bg-white text-blue-950 py-2 rounded-md hover:bg-gray-200">
                                            Sign up
                                        </button>
                                    </Link>
                                )}

                                {/* Mobile Logout Button */}
                                {isLoggedIn && (
                                    <button 
                                        className="w-full bg-white text-blue-950 py-2 mt-3 rounded-md hover:bg-gray-200"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                )}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default MainNavbar;


