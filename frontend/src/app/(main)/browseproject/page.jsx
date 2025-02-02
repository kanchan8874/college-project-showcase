'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BrowseProject = () => {
  const [projectList, setProjectList] = useState([]);
  const fetchProduct = () => {
    axios.get('http://localhost:5000/project/getall')
      .then((result) => {
        console.table(result.data);
        setProjectList(result.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {
            projectList.map(project => (
              <div key={project._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                  <img src={project.images[0]} alt="" className='rounded-lg h-full w-full object-cover' />
                </div>
                <div className="p-4 md:p-6">

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    View sample
                  </a>
                  <Link
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href={"/view-project/" + project._id}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))
          }

          {/* End Card */}

        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  )
}
export default BrowseProject;