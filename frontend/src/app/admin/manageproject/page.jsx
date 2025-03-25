'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProject = () => {
  const [project, setProject] = useState([]);

  const getProjectData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/getallProject`);
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to fetch projects');
    }
  }

  // Add delete project function
  const deleteProject = async (id) => {
    try {
      // Add confirmation before delete
      if (window.confirm('Are you sure you want to delete this project?')) {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/project/delete/${id}`);
        
        if (res.status === 200) {
          toast.success('Project deleted successfully');
          // Refresh the project list after deletion
          getProjectData();
        }
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error(error.response?.data?.message || 'Failed to delete project');
    }
  };

  const approveProject = (id, status) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/project/update` + id, { approved: status })
      .then((result) => {
        toast.success('project updated Successfully');
        getProjectData();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete project');
      })
  }

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center font-serif">
          <span className="block w-full py-2 text-transparent bg-clip-text leading-tight bg-gradient-to-r from-purple-800 to-green-600">
            Manage Project
          </span>
        </h1>

        {/* Responsive table container */}
        <div className='overflow-x-auto rounded-lg shadow'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-600'>
              <tr>
                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                  Name
                </th>
                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                  Video
                </th>
                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                  Images
                </th>
                <th className='px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                  Created At
                </th>
                <th className='px-4 py-3 text-center text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {project.map((project) => (
                <tr key={project._id} className='hover:bg-gray-50'>
                  <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>
                    {project.name}
                  </td>
                  <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>
                    <div className='w-20 md:w-32 overflow-hidden text-ellipsis'>
                      {project.video}
                    </div>
                  </td>
                  <td className='px-4 py-3 whitespace-nowrap'>
                    <img 
                      src={project.images} 
                      alt={project.name}
                      className='h-12 w-12 md:h-16 md:w-16 object-cover rounded'
                    />
                  </td>
                  <td className='px-4 py-3 whitespace-nowrap text-sm md:text-base'>
                    {new Date(project.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-4 py-3 whitespace-nowrap text-sm text-center'>
                    <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
                      <button
                        onClick={() => deleteProject(project._id)}
                        className='w-full md:w-auto bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm px-2 md:px-4 py-1 rounded-full transition-colors'
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => approveProject(project._id, !project.approved)}
                        className='w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm px-2 md:px-4 py-1 rounded-full transition-colors'
                      >
                        {project.approved ? 'Unapprove' : 'Approve'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No projects message */}
        {project.length === 0 && (
          <div className='text-center py-8 text-gray-500'>
            No projects found
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageProject;