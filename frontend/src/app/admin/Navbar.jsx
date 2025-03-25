'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const AdminNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-gradient-to-r from-blue-950 bg-blue-950 shadow-xl relative">
            <div className="mx-auto max-w-screen-xl px-1 md:px-8">
                <header className="flex items-center justify-between py-2 md:py-4">
                    {/* logo - start */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 text-2xl font-bold text-white"
                        aria-label="logo"
                    >
                        <div className='bg-white p-2 rounded-2xl'>
                            <img className='size-8 md:size-12' src="/images/logo2-removebg.png" alt="logo" />
                        </div>
                    </Link>

                    {/* Desktop nav - start */}
                    <nav className="hidden lg:flex gap-8">
                        <Link href="/admin/addproject" className="text-lg font-semibold p-2 hover:bg-yellow-600 rounded-full text-white">
                            Addproject
                        </Link>
                        <Link href="/admin/addstudent" className="text-lg font-semibold p-2 hover:bg-yellow-600 rounded-full text-white">
                            Addstudent
                        </Link>
                        <Link href="/admin/manageproject" className="text-lg font-semibold p-2 hover:bg-yellow-600 rounded-full text-white">
                            Manageproject
                        </Link>
                        <Link href="/admin/managestudent" className="text-lg font-semibold p-2 hover:bg-yellow-600 rounded-full text-white">
                            Managestudent
                        </Link>
                        <Link href="/admin/profile" className="text-lg font-semibold p-2 hover:bg-yellow-600 rounded-full text-white">
                            Adminprofile
                        </Link>
                    </nav>

                    {/* Desktop Logout button */}
                    <div className="hidden lg:flex">
                        <Link href="/signup" className="inline-block rounded-lg bg-white px-8 py-2 text-center text-sm font-bold text-black hover:bg-gray-300">
                            Logout
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="lg:hidden inline-flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-sm font-semibold text-black hover:bg-gray-300"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                        <span>Menu</span>
                    </button>
                </header>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute left-0 right-0 bg-blue-950 z-50 px-4 py-2 shadow-lg">
                        <nav className="flex flex-col space-y-2">
                            <Link 
                                href="/admin/addproject" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Addproject
                            </Link>
                            <Link 
                                href="/admin/addstudent" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Addstudent
                            </Link>
                            <Link 
                                href="/admin/manageproject" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Manageproject
                            </Link>
                            <Link 
                                href="/admin/managestudent" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Managestudent
                            </Link>
                            <Link 
                                href="/admin/profile" 
                                className="text-white py-3 border-b border-gray-700 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Adminprofile
                            </Link>
                            <Link 
                                href="/signup" 
                                className="text-white py-3 hover:bg-yellow-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Logout
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminNavbar;