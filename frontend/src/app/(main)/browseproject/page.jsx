'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const BrowseProject = () => {
  const [projectList, setProjectList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const inputRef = useRef(null);

  const fetchProduct = () => {
    axios.get('http://localhost:5000/project/getall')
      .then((result) => {
        console.table(result.data);
        setProjectList(result.data);
        setMasterList(result.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  const searchProject = () => {
    const searchValue = inputRef.current.value.toLowerCase();
    if (!searchValue) {
      return projectList(masterList);
    }
    setProjectList(
      masterList.filter(project => {
        return project.name.toLowerCase().includes(searchValue) ||
          project.description.toLowerCase().includes(searchValue) ||
          project.category.toLowerCase().includes(searchValue) ||
          project.branch.toLowerCase().includes(searchValue)
        // project.batch.toLowerCase().includes(searchValue)
      })
    );

  }

  const filterBranch = (e) => {
    const value = e.target.value;
    if (!value) { return setProjectList(masterList); }
    console.log(value);
    setProjectList(
      masterList.filter(project => {
        return project.branch.toLowerCase() === value.toLowerCase();
      })
    )
  }
  const filterBatch = (e) => {
    const value = e.target.value;
    console.log(value);
    if (!value) { return setProjectList(masterList); }
    setProjectList(
      masterList.filter(project => {
        return project.batch == value;
      })
    );
  }
  const filterCategory = (e) => {
    const value = e.target.value;
    if (!value) { return setProjectList(masterList); }
    setProjectList(
      masterList.filter(project => {
        return project.category.toLowerCase() === value.toLowerCase();
      })
    );
  }

  return (
    <>
      <div>
        <>
          {/* Hero */}
          <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
              <div className="text-center">
                <h1 className="mb-2 text-4xl capitalize  font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight lg:mb-7">
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-900 to-purple-500 lg:inline">Browse project </span>
                </h1>
                <p className="mt-2 text-gray-700 dark:text-neutral-400 font-bold  text-lg md:text-2xl">
                  "Choose and Select the Project according to Branch, Batch,Type & Category."
                </p>
                <div className="mt-7 sm:mt-10 mx-auto max-w-xl relative">
                  <div className="relative z-10 flex gap-x-3 p-3 bg-blue-950 border rounded-2xl shadow-2xl shadow-gray-200 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                    <div className="w-full">
                      <label
                        id='search'
                        htmlFor='search'
                        className="block text-sm  font-normal  dark:text-white "
                      >
                        <span className="sr-only ">Search Project</span>
                      </label>
                      <input
                        ref={inputRef}
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Search Projects"
                      />
                    </div>
                    <div>
                      <button onClick={searchProject}
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={11} cy={11} r={8} />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='mt-6 flex gap-5 justify-between  border-gray-200 rounded-full p-3 '>
                    <select onChange={filterBranch} className='w-full border border-black shadow-2xl px-5 py-2 rounded-full h hover:scale-105  hover:bg-yellow-300 font-bold font-serif bg-slate-200' >
                      <option className='bg-white' value="">Select Branch</option>
                      <option className='bg-white' value="IT">I.T.</option>
                      <option className='bg-white' value="C.S.E">C.S.E</option>
                      <option className='bg-white' value="M.E.">M.E.</option>
                      <option className='bg-white' value="E.C.">E.C.</option>
                      <option className='bg-white' value="E.E.">E.E.</option>
                    </select>

                    <select onChange={filterBatch} className='w-full border border-black shadow-2xl px-5 py-2 rounded-full hover:scale-105 font-bold font-serif hover:bg-yellow-300 bg-slate-200 ' >
                      <option className='bg-white' value="">Select Batch</option>
                      <option className='bg-white' value="2015">2015</option>
                      <option className='bg-white' value="2015">2016</option>
                      <option className='bg-white' value="2015">2017</option>
                      <option className='bg-white' value="2015">2018</option>
                      <option className='bg-white' value="2015">2019</option>
                      <option className='bg-white' value="2015">2020</option>
                      <option className='bg-white' value="2023">2023</option>
                      <option className='bg-white' value="2024">2024</option>
                      <option className='bg-white' value="2025">2025</option>
                    </select>

                    <select onChange={filterCategory} className='w-full border border-black px-5 py-2 rounded-full hover:scale-105 shadow-2xl font-serif font-bold hover:bg-yellow-300 bg-slate-200 ' >
                      <option className='bg-white' value="">Select Category</option>
                      <option className='bg-white' value="app development">APP DEVELOPMENT</option>
                      <option className='bg-white' value="web development">WEB DEVELOPMENT</option>
                      <option className='bg-white' value="data science">DATA SCIENCE</option>
                      <option className='bg-white' value="machine development">MACHINE DEVELOPMENT</option>
                    </select>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
            </div>
          </div>
          {/* End Hero */}
        </>
      </div>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-2 ">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {
            projectList.map(project => (
              <div key={project._id} className="group flex flex-col h-full bg-white border border-gray-300 shadow-lg rounded-2xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                  <img src={project.images[0]} alt="" className='rounded-lg h-full w-full object-cover' />
                </div>
                <div className="p-4 md:p-6">

                  <h3 className="text-xl font-bold  text-gray-800 dark:text-neutral-300 dark:hover:text-white uppercase">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">

                  <Link
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-center font-semibold font-serif rounded-ee-xl bg-white text-gray-800 shadow-xl hover:bg-blue-900 hover:text-white "
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