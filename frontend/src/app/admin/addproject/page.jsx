'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';

const categories = [
  'Web Development',
  'App Development',
  'Software Development',
  'Game Development',
  'Machine Learning',
  'Data Science',
  'Artificial Intelligence',
  'Cyber Security',
  'machine development',
]
const branch = [
  'C.S.E.',
  'M.E.',
  'E.E.',
  'E.C.',
  'C.E.',
  'I.T.',
  'N.E.',
  'B.E.',
]
const batch = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
]

const Addproject = () => {

  const [image, setImage] = useState('');
  const [studentList, setStudentList] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/getall`);
    console.log(res.data);
    setStudentList(res.data);
  }

  useEffect(() => {
    fetchStudents();
  }, [])

  const addprojectForm = useFormik({
    initialValues: {
      name: '',
      video: '',
      branch: '',
      batch: 0,
      images: [],
      student: '',
      approved: true
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/project/add`, { ...values, approved: true })
      console.log(res.data);
      console.log(res.status);
      if (res.status === 200) {
        toast.success('Logged in successfully');
        !ISSERVER && localStorage.setItem('token', res.data.token);
      }
    }
  })
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const forData = new FormData();
    forData.append('file', file);
    forData.append('upload_preset', 'mypreset8874');
    forData.append('cloud_name ', 'dqumvzhys');

    axios.post('https://api.cloudinary.com/v1_1/dqumvzhys/image/upload', forData)
      .then((result) => {
        console.log(result.data);
        toast.success('flie uploaded successfully');
        addprojectForm.setFieldValue('images', [result.data.url]);
        setImage(result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('failed to upload file');

      });

  }

  const uploadVideo = (e) => {
    const file = e.target.files[0];
    const forData = new FormData();
    forData.append('file', file);
    forData.append('upload_preset', 'mypreset8874');
    forData.append('cloud_name ', 'dqumvzhys');

    axios.post('https://api.cloudinary.com/v1_1/dqumvzhys/video/upload', forData)
      .then((result) => {
        console.log(result.data);
        toast.success('flie uploaded successfully');
        addprojectForm.setFieldValue('video', result.data.url);
        setImage(result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('failed to upload file');

      });

  }
  return (
    <div className=' mt-0 mb-0 bg-gradient-to-r from-indigo-100 to-green-100 '>
      <div className=" max-w-xl mx-auto mt-0 bg-white border rounded-xl shadow-2xl dark:bg-neutral-900 dark:border-neutral-700 ">
        <div className="p-4 sm:p-7 ">
          <div className="text-center">
            <h1 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
              Add Project From
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={addprojectForm.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Project Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.name}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>

                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white font-serif"
                    >
                      Video
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="file"

                      onChange={uploadVideo}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* end Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white font-serif"
                    >
                      Image
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="file"

                      onChange={uploadImage}


                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Batch
                  </label>
                  <div className="relative">
                    <select
                      type="number"
                      id="batch"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.batch}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    >
                      <option value="">Select Batch</option>
                      {
                        batch.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))
                      }
                    </select>
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>

                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Branch
                  </label>
                  <div className="relative">
                    <select
                      type="text"
                      id="branch"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.branch}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    >
                      <option value="">Select Branch</option>
                      {
                        branch.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))
                      }
                    </select>


                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>

                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.category}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    >
                      <option value="">Select Category</option>
                      {
                        categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Description
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="description"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.description}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>

                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="student"
                    className="block text-sm mb-2 dark:text-white font-serif"
                  >
                    Select Student
                  </label>
                  <div className="relative">
                    <select
                      id="student"
                      onChange={addprojectForm.handleChange}
                      value={addprojectForm.values.student}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    >
                      <option value="">Select Student</option>
                      {
                        studentList.map(student => (
                          <option key={student._id} value={student._id}>{student.rollno} {student.name}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>
                {/* End Form Group */}
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
                  disabled={!addprojectForm.values.images[0] || !addprojectForm.values.video}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Add Project
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

export default Addproject;