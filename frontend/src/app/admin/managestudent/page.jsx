'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ManageStudent = () => {

    const [student, setStudent] = useState([]);

    const getStudentData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/getall`);
        // console.log(res.data);
        console.log(res.status);

        const data = await res.json();
        console.log(data);

        setStudent(data);

    }

    useEffect(() => {
        getStudentData();
    }, []);

    return (
        <div className=''>
            <div className='container mx-auto py-10'>
                <h1 className="mb-2 text-2xl capitalize  font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight lg:mb-2 text-center font-serif">
                    <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-800 to-green-600 lg:inline">Manage Student </span>
                </h1>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-600 text-white font-bold font-serif text-lg'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Roll No.</th>
                            <th className='p-3'>Batch</th>
                            <th className='p-3'>Course</th>
                            <th className='p-3'>Branch</th>
                            <th className='p-3'>Created At</th>
                            <th className='p-3'>Delete</th>
                            <th className='p-3'>Update</th>
                            <th className='p-3' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((student) => {
                                return (
                                    <tr className='border bg-gray-200' key={student._id}>
                                        <td className='p-3'>{student.name} </td>
                                        <td className='p-3'>{student.rollno} </td>
                                        <td className='p-3'>{student.batch} </td>
                                        <td className='p-3'>{student.course} </td>
                                        <td className='p-3'>{student.branch} </td>
                                        <td className='p-3'>{new Date(student.createdAt).toDateString()}</td>
                                        <td className='p-3'>
                                            <button onClick={() => { deleteUser(user._id) }}
                                                className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                                        </td>
                                        <td className='p-3'>
                                            <Link href={'/updatestudent/' + student._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>

                                        </td>

                                    </tr>
                                )
                            })

                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ManageStudent;
// ..s