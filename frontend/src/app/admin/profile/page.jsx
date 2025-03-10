'use client';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';

const Profile = () => {
    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const [profileImage, setProfileImage] = useState('');
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('');

    const fetchUserData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
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
        axios.put('http://localhost:5000/user/update/' + userData._id, values)
            .then((result) => {
                toast.success('user Updated successfully');
                // router.back();
                fetchUserData();
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to update product');

            })
    }
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
                setImage(result.data.url);
            }).catch((err) => {
                console.log(err);
                toast.error('failed to upload file');

            });

    }
    return (
        <div>
            <div className="  dark:bg-gray-800 flex flex-wrap items-center  justify-center mt-5 mb-5">
                <div className="container lg:w-1/3 sm:w-full md:w-1/2 bg-white shadow-2xl rounded-xl transform duration-200 easy-in-out">
                    <div className="h-32 overflow-hidden">
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center px-5 -mt-12">
                        <img
                            className="h-32 w-32 bg-white p-2 rounded-full object-cover"
                            src={userData?.avatar}
                            alt="Profile"
                        />
                    </div>
                    <div className=" px-14">
                        <div className='text-center'>

                            <h2 className="text-gray-800 text-3xl font-bold">{userData?.name || 'Mohit Dhiman'}</h2>
                            <a
                                className="text-gray-400 mt-2 hover:text-blue-500"
                                href={userData?.instagram || 'https://www.instagram.com/immohitdhiman/'}
                                target="BLANK()"
                            >
                                {userData?.instagramHandle || '@immohitdhiman'}
                            </a>
                            {/* <p className="mt-2 text-gray-500 text-sm">
                                {userData?.bio || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                            </p> */}
                        </div>
                        {
                            userData !== null ? (
                                <Formik initialValues={userData} onSubmit={submitForm}>
                                    {
                                        (updateForm) => {
                                            return (
                                                <form onSubmit={updateForm.handleSubmit}>
                                                    <div className="grid gap-y-4">
                                                        {/* Form Group */}
                                                        <div>
                                                            <label
                                                                htmlFor="name"
                                                                className="block text-sm mb-2 dark:text-white"
                                                            >
                                                                Name
                                                            </label>
                                                            <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="name"
                                                                    onChange={updateForm.handleChange}
                                                                    value={updateForm.values.name}
                                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                                    required=""
                                                                    aria-describedby="name-error"
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
                                                            {
                                                                (updateForm.errors.name && updateForm.touched.name) && (
                                                                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                                                                        {updateForm.errors.name}
                                                                    </p>
                                                                )
                                                            }
                                                        </div>
                                                        {/* End Form Group */}
                                                        {/* Form Group */}
                                                        <div>
                                                            <label
                                                                htmlFor="email"
                                                                className="block text-sm mb-2 dark:text-white"
                                                            >
                                                                Email
                                                            </label>
                                                            <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="email"
                                                                    onChange={updateForm.handleChange}
                                                                    value={updateForm.values.email}
                                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                                                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                                                Please include a valid email address so we can get back to you
                                                            </p>
                                                        </div>
                                                        {/* End Form Group */}
                                                        {/* Form Group */}
                                                        <div>
                                                            <label
                                                                htmlFor="password"
                                                                className="block text-sm mb-2 dark:text-white"
                                                            >
                                                                upload Image
                                                            </label>
                                                            <div className="relative">
                                                                <input
                                                                    type="file"
                                                                    id="image"
                                                                    onChange={uploadImage}
                                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                                                                htmlFor="confirm-password"
                                                                className="block text-sm mb-2 dark:text-white"
                                                            >
                                                                Password
                                                            </label>
                                                            <div className="relative">
                                                                <input
                                                                    type="password"
                                                                    id="password"
                                                                    onChange={updateForm.handleChange}
                                                                    value={updateForm.values.password}
                                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                                    required=""
                                                                    aria-describedby="confirm-password-error"
                                                                />

                                                            </div>
                                                        </div>
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
                                                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            update
                                                        </button>
                                                    </div>
                                                </form>
                                            )
                                        }
                                    }
                                </Formik>
                            ) : (
                                <p className='text-center my-10 font-bold text-2xl'>Loading..</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;