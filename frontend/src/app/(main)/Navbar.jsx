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
                <nav className="header-links contents font-semibold text-center  ">
                    <ul className="flex items-center ml-4 xl:ml-8 mr-auto gap-6 text-xl ">
                        <li className="p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4  ">
                            <Link href="/">
                                <span>Home</span>
                            </Link>
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
                        <li className="p-2 xl:p-2 hover:bg-yellow-600 rounded-full text-white mx-4 ">
                            <Link href="/aboutus">
                                <span>AboutUs</span>
                            </Link>
                        </li>


                    </ul>
                </nav>
                <div className=" flex items-center px-4 lg:px-6 xl:px-8">
                    <Link href="/studentlogin" className="mr-4 lg:mr-6 xl:mr-8">
                        <button className="bg-white hover:bg-gray-300 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full">
                            StudentLogin
                        </button>
                    </Link>
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
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Menu
                    </button>
                </div>
            </header>
        </>
    )
}

export default MainNavbar;
