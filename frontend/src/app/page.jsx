import React from 'react'
import MainNavbar from './(main)/Navbar';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <MainNavbar />
            {/* hero Section */}
            <div className="pt-0">
                <section className="relative py-10 bg-gradient-to-r from-gray-100 to-white  sm:h-[100vh] lg:h-[100vh] h-full">
                    <div className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1701509665932-e38d5eaad17d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D')" }}></div>
                    <div className="relative px-12 mx-auto max-w-7xl">
                        <div className="w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
                            <h1 className="mb-5 text-4xl capitalize font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight lg:mb-12 animate-fadeIn">
                                <span>Welcome</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-purple-600 lg:inline">to Our College </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-purple-600 lg:inline">Project Showcase </span> <span>website!</span>
                            </h1>
                            <h2 className="mb-8 capitalize font-semibold font-serif leading-none tracking-normal md:text-4xl md:tracking-tight lg:mb-12 animate-fadeIn delay-1s">
                                <span>"Start With</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-purple-600 lg:inline"> Curiosity, Finish </span> <span> with Excellence"</span>
                            </h2>
                            <p className="px-0 mb-8 text-lg text-gray-800 md:text-xl lg:px-24 font-semibold capitalize animate-fadeIn delay-2s">
                                "The purpose of this project is to provide a platform for students to showcase their innovative college projects. It aims to inspire creativity, collaboration, and learning by sharing ideas and achievements with a wider audience."
                            </p>
                            {/* Image section with hover effects */}
                            <div className="lg:mt-14 sm:mt-10 mt-12  transition-transform duration-500 ">

                            </div>
                            <div className="mb-4 space-x-0 md:space-x-7 md:mb-2 font-semibold  delay-3s">
                                <Link href="/browseproject" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-900 rounded-2xl sm:w-auto sm:mb-0 hover:scale-105 transition-transform duration-300">
                                    Get Started
                                </Link>
                                <Link href="/learnmore" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-semibold bg-green-400 rounded-2xl sm:w-auto sm:mb-0 hover:scale-105 transition-transform duration-300">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>


                </section>
                {/* ABOUT Section */}
                <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900 ">
                    <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
                        {/*  */}
                        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                            <div className="relative">
                                {/* Main Img */}
                                <img
                                    className="hover:scale-105 rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
                                    src="https://media.licdn.com/dms/image/v2/D4E12AQFAEZ3FVLHLrw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736872486769?e=2147483647&v=beta&t=rR0yak6c2K4skR9C77nr21_YSL9Zf5z6pb302-72EMo"
                                    alt="About us"
                                />
                            </div>
                            {/*  */}
                            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                                <h2 className="text-4xl text-center text-black font-serif dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10 ">
                                    About Us
                                </h2>

                                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
                                    "Welcome to College Project Showcase! Our mission is to provide a platform where students can display their innovative projects, share knowledge, and inspire others. We aim to bridge the gap between creativity and opportunity by connecting bright minds with potential collaborators, educators, and recruiters. Explore, learn, and get inspired!"
                                </p>
                                {/* button */}
                                <Link href="/aboutus" className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-blue-900 rounded-sm lg:text-xl text-lg text-white font-semibold hover:scale-105">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SERVICES Section */}
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        {/* text - start */}
                        <div className="mb-10 md:mb-16">
                            <h1 className="mb-8 font-serif text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight text-center">
                                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-900 to-purple-950 lg:inline">Why it is important? </span>
                            </h1>
                            <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg font-semibold font-serif">
                                "There are some  important points  to explaining why a College Project Showcase Website is important"
                            </p>
                        </div>
                        {/* text - end */}
                        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3  ">
                            {/* feature - start */}
                            <div className="flex flex-col rounded-xl  p-6 md:p-6 hover:scale-110  shadow-lg hover:bg-orange-400  hover:text-white  ">
                                <h3 className="mb-2 text-lg font-bold  md:text-xl text-center font-serif">Highlights Student Talent
                                </h3>
                                Showcases students' skills, creativity, and technical knowledge to potential employers and faculty..

                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110  shadow-lg text-center hover:bg-orange-400 hover:text-white">
                                <h3 className="mb-2 text-lg font-bold md:text-xl font-serif">Easy Access to Projects</h3>
                                Provides a centralized platform where faculty, students, and recruiters can explore past and ongoing projects
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110  shadow-lg text-center hover:bg-orange-400 hover:text-white">
                                <h3 className="mb-2 text-lg font-bold md:text-xl font-serif">Boosts College Reputation</h3>
                                Enhances the institution’s image by displaying the quality of student work to industries and prospective students.
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white shadow-lg">
                                <h3 className="mb-2 text-lg font-bold md:text-xl text-center font-serif">Networking & Collaboration</h3>
                                Connects students with alumni, mentors, and industry experts, encouraging collaboration and knowledge sharing.

                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white  shadow-lg">
                                <h3 className="mb-2 text-lg font-bold text-center md:text-xl font-serif">Improves Career Opportunities</h3>
                                Helps students showcase their projects to recruiters, increasing job and internship opportunities.
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white shadow-lg">
                                <h3 className="mb-2 text-lg text-center font-bold md:text-xl font-serif">Showcases Teamwork & Leadership</h3>
                                Highlights collaboration skills when working on team projects, making students more appealing to employers.

                            </div>
                            {/* feature - end */}
                        </div>
                    </div>
                </div>
                <div className="lg:mt-14 sm:mt-10 mt-12  transition-transform duration-500 ">
                    <img
                        className="lg:block hidden w-full rounded-xl shadow-2xl transform transition-all duration-300"
                        src="https://i.ibb.co/GvwJnvn/Group-736.png"
                        alt="Group of people Chilling"
                    />
                    <img
                        className="lg:hidden sm:block hidden w-full"
                        src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
                        alt="Group of people Chilling"
                    />
                    <img
                        className="sm:hidden block w-full"
                        src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
                        alt="Group of people Chilling"
                    />
                </div>


                {/* frequent ask question */}
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        {/* text - start */}
                        <div className="mb-10 md:mb-16">
                            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-3xl font-serif">
                                Frequently Asked Questions
                            </h2>
                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-serif">
                                This is a section of some simple filler text, also known as placeholder
                                text. It shares some characteristics of a real written text but is
                                random or otherwise generated.
                            </p>
                        </div>
                        {/* text - end */}
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105 ">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl ">
                                    What is the purpose of this website?
                                </h3>
                                <p className="text-gray-500">
                                    This website is designed to showcase college students' projects, allowing them to upload their work and explore others' projects.
                                </p>
                            </div>
                            {/* question - end */}
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white font-serif">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl font-serif">
                                    How can I upload my project?
                                </h3>
                                <p className="text-gray-500">
                                    First, log in to your account, go to the ‘Upload Project’ section, fill in the required details, and submit your project
                                </p>
                            </div>
                            {/* question - end */}
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white font-serif">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl font-serif">
                                    What details are required to submit a project?
                                </h3>
                                <p className="text-gray-500">
                                    You need to provide the project name, description, technology stack, GitHub link (if available), project images/videos, and team member details.
                                </p>
                            </div>
                            {/* question - end */}
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white font-serif">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl font-serif">
                                    Can projects be reviewed or upvoted?
                                </h3>
                                <p className="text-gray-500">
                                    Yes, students and faculty members can upvote and review projects. The best projects may also be highlighted.
                                </p>
                            </div>
                            {/* question - end */}
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white font-serif">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl font-serif">
                                    How can recruiters view projects and contact students?
                                </h3>
                                <p className="text-gray-500">
                                    Recruiters can explore projects and directly contact students through the provided contact details or LinkedIn profile on each project page
                                </p>
                            </div>
                            {/* question - end */}
                            {/* question - start */}
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl hover:scale-105">
                                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white font-serif">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-3 text-lg font-semibold text-blue-900 md:text-xl font-serif">
                                    How can I upload my project to the website?
                                </h3>
                                <p className="text-gray-500">
                                    To upload your project, log in to your account, go to the ‘Upload Project’ section, enter the required details (project name, description, technology stack, GitHub link, images/videos, and team members), and submit it.
                                </p>
                            </div>
                            {/* question - end */}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;