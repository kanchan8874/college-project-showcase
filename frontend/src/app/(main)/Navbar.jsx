import Link from 'next/link';
import React from 'react'

const MainNavbar = () => {
    return (
        <>
            <header className="bg-gradient-to-r from-blue-950 to-blue-950 shadow-2xl h-20 hidden md:flex items-center justify-between px-5   ">
                <Link
                    href="/"
                    className=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
                >

                    <div className='bg-white p-2 rounded-2xl'>
                        <img className='size-12' src="/images/logo2-removebg.png" alt="logo" />
                    </div>

                </Link>
                <nav className="header-links contents font-semibold text-center   lg:text-lg">
                    <ul className="flex items-center ml-4 xl:ml-8 mr-auto  ">
                        <li className="p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4 ">
                            <a href="/">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="p-2 xl:p-2 hover:bg-yellow-600 rounded-full text-white mx-4 ">
                            <Link href="/browseproject">
                                <span>Browse Project</span>
                            </Link>
                        </li>
                        <li className="p-2 xl:p-2 hover:bg-yellow-600 rounded-full text-white mx-4 ">
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                        
                        
                    </ul>
                </nav>
                <div className=" flex items-center px-4 lg:px-6 xl:px-8">
                    <Link href="/login" className="mr-4 lg:mr-6 xl:mr-8">
                        <button className="bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full">
                            Sign in
                        </button>
                    </Link>
                    <Link href="/signup" className="mr-4 lg:mr-6 xl:mr-8">
                        <button className="bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full">
                            Sign up
                        </button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default MainNavbar;
