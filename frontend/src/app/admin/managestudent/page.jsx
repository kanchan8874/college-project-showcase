'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageStudent = () => {
    const [student, setStudent] = useState([]);

    // Fetch students data
    const getStudentData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/getall`);
            const data = await res.json();
            setStudent(data);
        } catch (error) {
            console.error('Error fetching students:', error);
            toast.error('Failed to fetch students');
        }
    }

    // Delete student function
    const deleteUser = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete this student?')) {
                const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/student/delete/${id}`);
                
                if (response.status === 200) {
                    toast.success('Student deleted successfully');
                    // Refresh the student list
                    getStudentData();
                }
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            toast.error('Failed to delete student');
        }
    };

    useEffect(() => {
        getStudentData();
    }, []);

    return (
        <div className='min-h-screen bg-gray-50 p-4'>
            <div className='container mx-auto py-6'>
                {/* Responsive heading */}
                <h1 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center font-serif">
                    <span className="block w-full py-2 text-transparent bg-clip-text leading-tight bg-gradient-to-r from-purple-800 to-green-600">
                        Manage Student
                    </span>
                </h1>

                {/* Responsive table wrapper */}
                <div className='overflow-x-auto rounded-lg shadow'>
                    <table className='w-full min-w-full divide-y divide-gray-200'>
                        <thead>
                            <tr className='bg-gray-600'>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Name</th>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Roll No.</th>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Batch</th>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Course</th>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Branch</th>
                                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>Created At</th>
                                <th className='px-4 py-3 text-center text-xs md:text-sm font-medium text-white uppercase tracking-wider' colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {student.map((student) => (
                                <tr key={student._id} className='hover:bg-gray-50'>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>{student.name}</td>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>{student.rollno}</td>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>{student.batch}</td>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>{student.course}</td>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>{student.branch}</td>
                                    <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>
                                        {new Date(student.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className='px-4 py-3 whitespace-nowrap text-center'>
                                        <div className='flex flex-col md:flex-row gap-2 justify-center'>
                                            <button
                                                onClick={() => deleteUser(student._id)}
                                                className='bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-full transition-colors'
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                href={`/admin/updatestudent/${student._id}`}
                                                className='bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full transition-colors text-center'
                                            >
                                                Update
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* No students message */}
                    {student.length === 0 && (
                        <div className='text-center py-8 text-gray-500'>
                            No students found
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ManageStudent;