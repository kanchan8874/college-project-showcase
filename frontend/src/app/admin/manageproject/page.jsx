'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProject = () => {

  const [project, setStudent] = useState([]);

  const getStudentData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/getallProject`);
    // console.log(res.data);
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setStudent(data);

  }

  useEffect(() => {
    getStudentData();
  }, []);

  const deleteProject = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/project/delete` + id)
      .then((result) => {
        toast.success('project Deleted Successfully');
        getStudentData();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete project');
      })

  }

  const approveProject = (id, status) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/project/update` + id, { approved: status })
      .then((result) => {
        toast.success('project updated Successfully');
        getStudentData();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete project');
      })
  }

  return (
    <div className=''>
      <div className='container mx-auto py-10'>
        <h1 className="mb-2 text-2xl capitalize  font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight lg:mb-2 text-center font-serif">
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-800 to-green-600 lg:inline">Manage project </span>
        </h1>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-600 text-white font-bold text-lg font-serif'>
              <th className='p-3'>Name</th>
              <th className='p-3'>video</th>
              <th className='p-3'>images</th>
              <th className='p-3  '>Created At</th>
              <th className='p-3  '>Delete</th>
              <th className='p-3  '>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              project.map((project) => {
                return (
                  <tr className='border bg-gray-200' key={project._id}>
                    <td className='p-3'>{project.name} </td>
                    <td className='p-3'>{project.video} </td>
                    <td className='p-3'>
                      <img src={project.images} alt="" /> </td>
                    <td className='p-3'>{new Date(project.createdAt).toDateString()}</td>
                    <td className='p-3'>
                      <button onClick={() => { deleteProject(project._id) }}
                        className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                    </td>
                    <td className='p-3'>
                      <button onClick={() => { approveProject(project._id, !project.approved) }}
                        className='bg-blue-500 py-1 px-3 text-white rounded-full'>{project.approved ? 'Unapprove' : 'Approve'}</button>
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

export default ManageProject;