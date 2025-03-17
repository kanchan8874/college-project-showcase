'use client';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';

const Profile = () => {
    const token = !ISSERVER && localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const [profileImage, setProfileImage] = useState('');
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('');

    const fetchUserData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/getuser`, {
            headers: {
                'x-auth-token': token,
            }
        });
        console.log(res.data);

        setUserData(res.data);
        setProfileImage(res.data.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80');
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const submitForm = (values) => {
        console.log(values);
        values.avatar = image;
        axios.put('http://localhost:5000/student/update/' + userData._id, values)
            .then((result) => {
                toast.success('User updated successfully');
                fetchUserData();
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to update user');
            });
    }

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'mypreset8874');
        formData.append('cloud_name', 'dqumvzhys');

        axios.post('https://api.cloudinary.com/v1_1/dqumvzhys/image/upload', formData)
            .then((result) => {
                console.log(result.data);
                toast.success('File uploaded successfully');
                setImage(result.data.url);
            }).catch((err) => {
                console.log(err);
                toast.error('Failed to upload file');
            });
    }

    return (
        <div className="flex flex-wrap items-center justify-center mt-5 mb-5">
            <div className="container lg:w-1/3 sm:w-full md:w-1/2 bg-white shadow-2xl rounded-xl overflow-hidden transform duration-200 ease-in-out">
                <div className="h-24 overflow-hidden">
                    <img
                        className="w-full"
                        src="https://media.licdn.com/dms/image/v2/D5616AQERU0GTzKJ9YQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1701762762288?e=2147483647&v=beta&t=zh7AVyPJEEqkFplI4kt_6btePxgtC5extq1zVRhZcKo"
                        alt=""
                    />
                </div>
                <div className="flex justify-center px-5 -mt-12">
                    <img
                        className="h-24 w-24 bg-white p-1 rounded-full object-cover"
                        src={userData?.avatar}
                        alt="Profile"
                    />
                </div>
                <div className="px-8 py-6 -mt-3">
                    <div className="text-center">
                        <h2 className="text-gray-800 text-2xl font-bold font-serif">{userData?.name || 'Kanchan'}</h2>
                        <a
                            className="text-gray-400 mt-2 hover:text-blue-500"
                            href={userData?.instagram || 'https://www.instagram.com/immohitdhiman/'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {userData?.instagramHandle || '@kanchankushwaha'}
                        </a>
                    </div>
                    {userData !== null ? (
                        <Formik initialValues={userData} onSubmit={submitForm}>
                            {(updateForm) => (
                                <form onSubmit={updateForm.handleSubmit} className="mt-6">
                                    <div className="grid gap-y-4">
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm mb-2 dark:text-white font-serif">
                                                Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.name}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    required=""
                                                    aria-describedby="name-error"
                                                />
                                            </div>
                                            {updateForm.errors.name && updateForm.touched.name && (
                                                <p className="text-xs text-red-600 mt-2" id="name-error">
                                                    {updateForm.errors.name}
                                                </p>
                                            )}
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="rollno" className="block text-sm mb-2 dark:text-white font-serif">
                                                Roll No
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="rollno"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.rollno}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    required=""
                                                    aria-describedby="rollno-error"
                                                />
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="image" className="block text-sm mb-2 dark:text-white font-serif">
                                                Upload Image
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    id="image"
                                                    onChange={uploadImage}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    aria-describedby="image-error"
                                                />
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="batch" className="block text-sm  font-serif  mb-2 dark:text-white">
                                                Batch
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="batch"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.batch}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    required=""
                                                    aria-describedby="batch-error"
                                                />
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="course" className="block text-sm font-serif mb-2 dark:text-white">
                                                Course
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="course"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.course}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    required=""
                                                    aria-describedby="course-error"
                                                />
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label htmlFor="branch" className="block text-sm font-serif mb-2 dark:text-white">
                                                Branch
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="branch"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.branch}
                                                    className="border py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    required=""
                                                    aria-describedby="branch-error"
                                                />
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
                                                    I accept the{" "}
                                                    <a
                                                        className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                                        href="#"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        {/* End Checkbox */}
                                        <button
                                            type="submit"
                                            className="w-full py-2 px-3 inline-flex justify-center font-serif items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    ) : (
                        <p className="text-center my-10 font-bold text-2xl">Loading..</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;