import Link from 'next/link';
import React from 'react';

const AdminNavbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-950 bg-blue-950 rounded-full  h-20 justify-between">
            <div className="mx-auto max-w-screen-xl px-1 md:px-8">
                <header className="flex items-center justify-between py-2 md:py-4">
                    {/* logo - start */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 text-2xl font-bold text-white "
                        aria-label="logo"
                    >
                        <div className='bg-white p-2 rounded-2xl '>
                            <img className='size-12' src="/images/logo2-removebg.png" alt="logo" />
                        </div>
                        
                    </Link>
                    {/* logo - end */}
                    {/* nav - start */}
                    <nav className="hidden gap-12 lg:flex">
                        <Link
                            href="/admin/addproject"
                            className="text-lg font-semibold  p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4"
                        >
                            Addproject
                        </Link>
                        <Link
                            href="/admin/addstudent"
                            className="text-lg font-semibold  p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4"
                        >
                            Addstudent
                        </Link>
                        <Link
                            href="/admin/manageproject"
                            className="text-lg font-semibold  p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4"
                        >
                            Manageproject
                        </Link>
                        <Link
                            href="/admin/managestudent"
                            className="text-lg font-semibold  p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4"
                        >
                            Managestudent
                        </Link>
                        <Link
                            href="/admin/profile"
                            className="text-lg font-semibold  p-2 xl:p-2  hover:bg-yellow-600 rounded-full text-white  mx-4"
                        >
                            Adminprofile
                        </Link>
                    </nav>
                    {/* nav - end */}
                    {/* buttons - start */}
                    <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                        <Link
                            href="/signup"
                            className="inline-block rounded-lg bg-white px-8 py-2 text-center text-sm font-bold text-black outline-none   hover:bg-gray-300 focus-visible:ring active:bg-gray-300 md:text-base"
                        >
                            Logout
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-sm font-semibold text-black hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
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
                    {/* buttons - end */}
                </header>
            </div>
        </div>
    );
}

export default AdminNavbar;