'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ManageStudent = () => {

    const [student, setStudent] = useState([]);

    const getStudentData = async () => {
        const res = await fetch('http://localhost:5000/student/getall');
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
                <h1 className='text-center text-2xl font-bold'>Manage student</h1>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-600 text-white font-bold'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Roll No.</th>
                            <th className='p-3'>Batch</th>
                            <th className='p-3'>Course</th>
                            <th className='p-3'>Branch</th>
                            <th className='p-3'>Created At</th>
                            {/* <th className='p-3' colSpan={2}></th> */}
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
                                        {/* <td className='p-3'>
                                            <button onClick={() => { deleteUser(user._id) }}
                                                className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                                        </td>
                                        <td className='p-3'>
                                            <Link href={'/updateuser/' + user._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>

                                        </td> */}

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