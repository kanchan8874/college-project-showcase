import React from 'react'


const Contactus = () => {

  return (

    <>
      {/* <div className='min-h-screen' style={{ backgroundImage: `url('https://wallpapers.com/images/hd/yellow-and-blue-background-bqfg6r5bom6fxrvm.jpg')` }}> */}
        {/* Contact Us */}
        <div div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" >
          <div className="max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Contact us
              </h1>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We'd love to talk about how we can help you.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            {/* Card */}
            <div className="flex flex-col border border-black rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-800 bg-white ">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Fill in the form
              </h2>
              <form>
                <div className="grid gap-4 lg:gap-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className=" block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-email-contacts-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autoComplete="email"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-phone-number-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="hs-phone-number-1"
                        id="hs-phone-number-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label
                      htmlFor="hs-about-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      defaultValue={""}
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
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            {/* End Card */}
          </div>
        </div >
        {/* End Contact Us */}


      {/* </div> */}
    </>


  )
}
export default Contactus;