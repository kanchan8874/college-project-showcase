'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';



const Viewproject = () => {
    const router = useRouter();
    const [projectData, setProjectData] = useState(null);
    const { id } = useParams();


    const getProjectDesign = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/getbyid` + id);
        console.log(res.data);
        setProjectData(res.data);
    }

    useEffect(() => {
        getProjectDesign();
    }, [])

    if (projectData === null) {
        return <h1>Loading ... </h1>
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 ">
                    {/* images - start */}
                    <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100">
                            <h2 className='font-bold'>Project image</h2>
                            <img
                                src={projectData.images[0]}
                                loading="lazy"
                                alt="Photo by project"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* images - end */}

                    {/* content - start */}
                    <div className="md:py-8">
                        {/* name - start */}
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold font-serif text-gray-800 lg:text-3xl uppercase">
                                {projectData.name}
                            </h2>
                        </div>
                        {/* name - end */}

                        {/* branch - start */}
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl mb-3">Branch:
                                {projectData.branch}
                            </h2>
                        </div>
                        {/* branch - end */}
                        {/* batch - start */}
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl ">Batch:
                                {projectData.batch}
                            </h2>
                        </div>
                        {/* branch - end */}

                        {/* description - start */}
                        <div className="mt-5 md:mt-10 lg:mt-5">
                            <div className="mb-2 text-lg font-semibold text-gray-900 font-serif">Category:
                                {projectData.category}
                            </div>
                            <p className="text-gray-800">Description:
                                {projectData.description}
                            </p>
                        </div>
                        {/* description - end */}
                    </div>
                    {/* content - end */}
                </div>
                {/* video - start */}
                <div className="mt-10">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100  hover:scale-105">
                        <h2 className='font-bold'>Project Video</h2>
                        <video
                            controls
                            src={projectData.video}
                            loading="lazy"
                            alt="Photo by Himanshu Dewangan"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                {/* video - end */}
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                        {/* text - start */}
                        <div className="mb-10 md:mb-16 ">
                            <h1 className="mb-5 text-lg capitalize text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight lg:mb-10">
                                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-800 to-purple-500 lg:inline">participants student</span>
                            </h1>
                        </div>
                        {/* text - end */}
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                            {/* article - start */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <div
                                    className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                                >
                                    <img
                                        src={projectData.student.avatar}
                                        loading="lazy"
                                        alt="Photo by Minh Pham"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-bold font-serif uppercase text-gray-800">Name:
                                        {projectData.student.name}
                                    </h2>
                                    <h3 className=" text-gray-800 font-serif">Roll-no:
                                        {projectData.student.rollno}
                                    </h3>
                                    <h3 className=" text-gray-800 font-serif">Batch:
                                        {projectData.student.batch}
                                    </h3>
                                    <h3 className=" text-gray-800 font-serif">Branch:
                                        {projectData.student.branch}
                                    </h3>
                                    <h3 className="text text-gray-800 font-serif">Course:
                                        {projectData.student.course}
                                    </h3>
                                </div>
                            </div>
                            {/* article - end */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Viewproject;