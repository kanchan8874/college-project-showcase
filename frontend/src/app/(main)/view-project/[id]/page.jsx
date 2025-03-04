'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const Viewproject = () => {
    const router = useRouter();
    const [projectData, setProjectData] = useState(null);
    const { id } = useParams();


    const getProjectDesign = async () => {
        const res = await axios.get('http://localhost:5000/project/getbyid/' + id);
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
                <div className="grid gap-8 md:grid-cols-2  hover:scale-105">
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
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                {projectData.name}
                            </h2>
                        </div>
                        {/* name - end */}

                        {/* branch - start */}
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl">
                                {projectData.branch}
                            </h2>
                        </div>
                        {/* branch - end */}
                        {/* batch - start */}
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl">
                                {projectData.batch}
                            </h2>
                        </div>
                        {/* branch - end */}

                        {/* description - start */}
                        <div className="mt-10 md:mt-10 lg:mt-5">
                            <div className="mb-3 text-lg font-semibold text-gray-900">
                                {projectData.category}
                            </div>
                            <p className="text-gray-800">
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
                            <h2 className=" mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                Participation-students details
                            </h2>
                        </div>
                        {/* text - end */}
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                            {/* article - start */}
                            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                                <div
                                    className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy"
                                        alt="Photo by Minh Pham"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-bold text-gray-800">Name:
                                    {projectData.student.name}
                                    </h2>
                                    <h3 className=" text-gray-800">Roll-no:
                                    {projectData.student.rollno}
                                    </h3>
                                    <h3 className=" text-gray-800">Batch:
                                    {projectData.student.batch}
                                    </h3>
                                    <h3 className=" text-gray-800">Branch:
                                    {projectData.student.branch}
                                    </h3>
                                    <h3 className="text text-gray-800">Course:
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