'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const MainNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-blue-950 to-blue-950 shadow-2xl h-20 hidden md:flex items-center justify-between px-5">
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

                {/* ✅ Login Button with Hover Dropdown */}
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
            </header>
        </>
    );
};

export default MainNavbar;


