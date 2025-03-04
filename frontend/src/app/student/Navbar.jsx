import Link from 'next/link';
import React from 'react';

const StudentNavbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-gray-800 rounded-full border-4 border-white lg:pb-0 ">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <header className="flex items-center justify-between py-3 md:py-5">
                    {/* logo - start */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl"
                        aria-label="logo"
                    >
                        <svg
                            width={95}
                            height={94}
                            viewBox="0 0 95 94"
                            className="h-auto w-6 text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>
                        Flowrift
                    </a>
                    {/* logo - end */}
                    {/* nav - start */}
                    <nav className="hidden gap-12 lg:flex">
                        <Link
                            href="/student/addproject"
                            className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-200 active:text-indigo-300"
                        >
                            Addproject
                        </Link>

                        <Link
                            href="/student/profile"
                            className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-200 active:text-indigo-300"
                        >
                            profile
                        </Link>
                    </nav>
                    {/* nav - end */}
                    {/* buttons - start */}
                    <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                        <a
                            href="#"
                            className="inline-block rounded-lg px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:text-indigo-200 focus-visible:ring active:text-indigo-300 md:text-base"
                        >
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-lg bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-200 focus-visible:ring active:bg-gray-300 md:text-base"
                        >
                            Sign up
                        </a>
                    </div>
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
                    {/* buttons - end */}
                </header>
            </div>
        </div>
    );
}

export default StudentNavbar;