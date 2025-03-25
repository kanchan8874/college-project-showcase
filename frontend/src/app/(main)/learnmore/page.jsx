'use client';
import React from 'react'

const LearnMore = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="lg:w-10/12 w-full animate-fadeIn">
                    <h1 className="mb-2 capitalize font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight lg:mb-7 animate-slideDown">
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-800 to-purple-800 lg:inline animate-gradient">
                            Why a College Project Showcase Website is Important?
                        </span>
                    </h1>
                    <p className="font-serif text-xl text-center leading-7 text-gray-600 dark:text-white mt-6 animate-slideUp">
                        A College Project Showcase Website is not just a collection of projects—it is a powerful tool for learning, recognition, and career growth. It bridges the gap between students, academia, and industry, making innovation more accessible to everyone. 🚀
                        the main Purpose of the Website
                        To display students' projects in an organized way.
                        Help students showcase their work for recruiters or professors.
                        Provide an easy way to explore projects by category, technology, or department.
                    </p>
                </div>

                {/* Image section with hover effects */}
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

                {/* Benefits section with horizontal cards */}
                <div className="lg:mt-16 sm:mt-12 mt-16 text-center ">
                    <h2 className="mb-2 capitalize font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl md:tracking-tight lg:mb-7 animate-slideDown">
                        <span className="block w-full py-2 text-transparent text-center bg-clip-text leading-12 bg-gradient-to-r from-blue-800 to-purple-800 lg:inline animate-gradient">
                            Benifits of a College Project Showcase Website
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
                        {[
                            {
                                title: "1. Provides a Digital Portfolio for Students",
                                delay: "100",
                                description: "Students can display their projects online, making it easier to share their work with professors, peers, and recruiters. It acts as a mini-resume showcasing their technical skills and creativity."
                            },
                            {
                                title: "2. Helps in Placements & Internships",
                                delay: "200",
                                description: "Recruiters can view students' projects and evaluate their skills before hiring. A strong project portfolio can help students stand out in job applications and interviews."
                            },
                            {
                                title: "3. Encourages Innovation & Collaboration",
                                delay: "300",
                                description: "Students can explore each other's projects and get inspired. It encourages teamwork and collaboration, leading to better learning opportunities."
                            },
                            {
                                title: "4. Easy Access to Past Projects",
                                delay: "400",
                                description: "Faculty and juniors can refer to previous projects for research and improvements. Helps in knowledge sharing across different batches."
                            },
                            {
                                title: "5. Simplifies Project Submission & Evaluation",
                                delay: "500",
                                description: "Faculty can review and evaluate projects online, reducing paperwork. Saves time and improves efficiency in grading and feedback."
                            }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="benefit-card p-6 rounded-xl hover:bg-yellow-300 hover:shadow-2xl border  transition-all duration-300 transform hover:-translate-y-2 bg-gray-50 "
                                style={{ animationDelay: `${benefit.delay}ms` }}
                            >
                                <h3 className="font-bold text-black text-lg mb-4 transition-colors capitalize font-serif">
                                    {benefit.title}
                                </h3>
                                <p className="font-normal text-base leading-6 text-gray-600 dark:text-white font-serif transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add CSS animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideDown {
                    from { transform: translateY(-50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes slideInLeft {
                    from { transform: translateX(-100px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes slideInRight {
                    from { transform: translateX(100px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }

                .animate-slideDown {
                    animation: slideDown 1s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 1s ease-out;
                }
             
            `}</style>
        </div>
    )
}

export default LearnMore;