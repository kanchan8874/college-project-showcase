import React from 'react'
import MainNavbar from './(main)/Navbar';

const Home = () => {
    return (
        <>
            <MainNavbar />
            <div className='pt-0'>

                <section className="pt-24 bg-white">
                    <div className="px-12 mx-auto max-w-7xl">
                        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                                <span>Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">With Curiosity, </span> <span>Finish with Excellence </span>
                            </h1>
                            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                                "The purpose of this project is to provide a platform for students to showcase their innovative college projects. It aims to inspire creativity, collaboration, and learning by sharing ideas and achievements with a wider audience."
                            </p>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8 ">
                                <a href="/browseproject" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-900 rounded-2xl sm:w-auto sm:mb-0 hover:scale-105">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="/learnmore" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-semibold bg-green-400 rounded-2xl sm:w-auto sm:mb-0 hover:scale-105">
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <>
                    </>
                </section>
                {/* ABOUT Section */}
                <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
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
                                <h2 className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10 ">
                                    About Us
                                </h2>

                                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
                                    "Welcome to College Project Showcase! Our mission is to provide a platform where students can display their innovative projects, share knowledge, and inspire others. We aim to bridge the gap between creativity and opportunity by connecting bright minds with potential collaborators, educators, and recruiters. Explore, learn, and get inspired!"
                                </p>
                                {/* button */}
                                <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-blue-900 rounded-sm lg:text-xl text-lg text-white font-semibold hover:scale-105">
                                    Read More
                                </button>
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
                                <span>Why</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"> it is </span> <span> important ?</span>
                            </h1>
                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                This is a section of some simple filler text, also known as placeholder
                                text. It shares some characteristics of a real written text but is
                                random or otherwise generated.
                            </p>
                        </div>
                        {/* text - end */}
                        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3  ">
                            {/* feature - start */}
                            <div className="flex flex-col rounded-xl  p-6 md:p-6 hover:scale-110  shadow-lg hover:bg-orange-400  hover:text-white  ">
                                <h3 className="mb-2 text-lg font-bold md:text-xl text-center">Educational Resource
                                </h3>
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.

                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110  shadow-lg text-center hover:bg-orange-400 hover:text-white">
                                <h3 className="mb-2 text-lg font-bold md:text-xl">Security</h3>
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110  shadow-lg text-center hover:bg-orange-400 hover:text-white">
                                <h3 className="mb-2 text-lg font-bold md:text-xl">Cloud</h3>
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white shadow-lg">
                                <h3 className="mb-2 text-lg font-bold md:text-xl text-center">Speed</h3>
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.

                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white  shadow-lg">
                                <h3 className="mb-2 text-lg font-bold text-center md:text-xl">Support</h3>
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.
                            </div>
                            {/* feature - end */}
                            {/* feature - start */}
                            <div className="flex flex-col rounded-lg  p-4 md:p-6 hover:scale-110 hover:bg-orange-400 hover:text-white shadow-lg">
                                <h3 className="mb-2 text-lg text-center font-bold md:text-xl">Dark Mode</h3>
                                Filler text is dummy text which has no meaning however looks very

                            </div>
                            {/* feature - end */}
                        </div>
                    </div>
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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
                            <div className="relative rounded-lg bg-gray-100 p-5 pt-8 shadow-2xl">
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