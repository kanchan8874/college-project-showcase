'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const ISSERVER = typeof window === 'undefined';

const Contact = () => {
  const contectForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneno: '',
      details: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post('http://localhost:5000/contact/add', values)
      console.log(res.data);
      console.log(res.status);
      if (res.status === 200) {
        toast.success('Register in successfully');
        !ISSERVER && localStorage.setItem('token', res.data.token);  // then catch
      }
    }
  });

  return (
    <>
      {/* Contact Us */}
      <div div className="max-w-[95rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-2 mx-auto bg-gradient-to-r from-indigo-100 to-green-100 " >
        <div className="max-w-xl mx-auto ">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400 font-serif">
              We'd love to talk about how we can help you.
            </p>
          </div>
        </div>
        <div className="mt-5 max-w-lg mx-auto">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-800 bg-white shadow-2xl ">
            <h2 className="mb-8 text-xl font-semibold font-serif text-gray-800 dark:text-neutral-200">
              Fill in the form
            </h2>
            <form onSubmit={contectForm.handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block  mb-2 text-sm  text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      onChange={contectForm.handleChange}
                      value={contectForm.values.firstName}

                      className=" border border-gray-300 py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className=" block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      onChange={contectForm.handleChange}
                      value={contectForm.values.lastName}
                      className="border border-gray-300  py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
                {/* End Grid */}
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={contectForm.handleChange}
                      value={contectForm.values.email}
                      autoComplete="email"
                      className="border border-gray-300 py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneno"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="phoneno"
                      id="phoneno"
                      onChange={contectForm.handleChange}
                      value={contectForm.values.phoneno}
                      className="border border-gray-300 py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="details"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white "
                  >
                    Details
                  </label>
                  <textarea
                    id="details"
                    onChange={contectForm.handleChange}
                    value={contectForm.values.details}
                    rows={4}
                    className="border py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"

                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Send inquiry
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600 dark:text-neutral-500 font-serif">
                  We'll get back to you in 1-2  days.
                </p>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div >
    </>
  )
}
export default Contact;