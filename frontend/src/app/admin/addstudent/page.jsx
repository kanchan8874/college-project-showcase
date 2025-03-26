'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';

const categories = [
    'Web Development',
    'App Development',
    'Software Development',
    'Game Development',
    'Machine Learning',
    'Deep Learning',
    'image processing',
    'Cloud computing',
    'Automobile',
    'Robotics @ Automation',

]
const branch = [
    'C.S.E.',
    'M.E.',
    'E.E.',
    'E.C.E.',
    'C.E.',
    'I.T.',
    'A.I.',
    'R.E.',
]
const batch = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
]
const Addstudent = () => {
    const addstudentForm = useFormik({
        initialValues: {
            name: '',
            rollno: '',
            batch: '',
            course: '',
            branch: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/student/add`, values)
            console.log(res.data);
            console.log(res.status);
            if (res.status === 200) {
                toast.success('Logged in successfully');
                !ISSERVER && localStorage.setItem('token', res.data.token);
            }
        }
    })
    return (
        <div className='bg-gradient-to-r from-indigo-100 to-green-100'>
            <div className="max-w-xl mx-auto mt-0 mb-0 bg-white border border-gray-200 rounded-xl shadow-2xl dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white font-serif ">
                            Addstudent From
                        </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        </p>
                    </div>
                    <div className="mt-5">
                        {/* Form */}
                        <form onSubmit={addstudentForm.handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div className='font-serif'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm mb-2 dark:text-white"
                                    >
                                        Student Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.name}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required=""
                                            aria-describedby="email-error"
                                        />
                                    </div>

                                </div>
                                {/* End Form Group */}
                                {/* Form Group */}
                                <div>
                                    <div className="flex justify-between items-center font-serif">
                                        <label
                                            htmlFor="rollno"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Rollno
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="rollno"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.rollno}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm "
                                            required=""
                                            aria-describedby="password-error"
                                        />
                                    </div>
                                </div>
                                {/* end Form Group */}
                                {/* Form Group */}
                                <div>
                                    <div className="flex justify-between items-center ">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.password}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required=""
                                            aria-describedby="password-error"
                                        />
                                    </div>
                                </div>
                                {/* end Form Group */}
                                {/* Form Group */}
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Batch
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <select
                                            type="number"
                                            id="batch"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.batch}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required=""
                                            aria-describedby="password-error"
                                        >
                                            <option value="">Select Batch</option>
                                            {
                                                batch.map(category => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                {/* End Form Group */}
                                {/* Form Group */}
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Course
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <select
                                            type="text"
                                            id="course"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.course}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required=""
                                            aria-describedby="password-error"
                                        >
                                            {
                                                categories.map(category => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))
                                            }
                                        </select>


                                    </div>
                                </div>
                                {/* end Form Group */}
                                {/* Form Group */}
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Branch
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <select
                                            type="text"
                                            id="branch"
                                            onChange={addstudentForm.handleChange}
                                            value={addstudentForm.values.branch}
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required=""
                                            aria-describedby="password-error"
                                        >
                                            {
                                                branch.map(category => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))
                                            }
                                        </select>

                                    </div>
                                </div>
                                {/* end Form Group */}
                                {/* Checkbox */}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                {/* End Checkbox */}
                                <button
                                    disabled={!addstudentForm.values.rollno || !addstudentForm.values.password}
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Add Student
                                </button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Addstudent;