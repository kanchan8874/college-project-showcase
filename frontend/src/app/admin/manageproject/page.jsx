'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProject = () => {

  const [project, setStudent] = useState([]);

  const getStudentData = async () => {
    const res = await fetch('http://localhost:5000/project/getall');
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
    axios.delete('http://localhost:5000/project/delete/' + id)
      .then((result) => {
        toast.success('project Deleted Successfully');
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
        <h1 className='text-center text-2xl font-bold'>Manage project</h1>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-600 text-white font-bold'>
              <th className='p-3'>Name</th>
              <th className='p-3'>video</th>
              <th className='p-3'>images</th>
              <th className='p-3'>Created At</th>
              {/* <th className='p-3' colSpan={2}></th> */}
            </tr>
          </thead>
          <tbody>
            {
              project.map((project) => {
                return (
                  <tr className='border bg-gray-200' key={project._id}>
                    <td className='p-3'>{project.name} </td>
                    <td className='p-3'>{project.video} </td>
                    <td className='p-3'>{project.images} </td>
                    <td className='p-3'>{new Date(project.createdAt).toDateString()}</td>
                    <td className='p-3'>
                      <button onClick={() => { deleteProject(project._id) }}
                        className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
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