import React from 'react';

const MyForm = () => (
  <section className="p-5 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 mt-12 max-w-4xl mx-auto">
    <form noValidate action="" className="flex flex-col space-y-12">
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#051B40] dark:bg-gray-50">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-4xl">Payments</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm ">Name</label>
            <input
              id="firstname"
              type="text"
              placeholder="Name"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="userid" className="text-sm ">User Id</label>
            <input
              id="userid"
              type="text"
              placeholder="User Id"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="contactno" className="text-sm block">Contact No</label>
            <input
              id="contactno"
              type="text"
              placeholder="Contact No"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="docname" className="text-sm block">Doctor Name</label>
            <input
              id="docname"
              type="text"
              placeholder="Doctor Name"
              className="w-48 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full ">
            <label htmlFor="age" className="text-sm block">Age</label>
            <input
              id="age"
              type="text"
              placeholder="Age"
              className="w-48 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full ">
            <label htmlFor="charges" className="text-sm block">Charges</label>
            <input
              id="charges"
              type="text"
              placeholder="Charges"
              className="w-48 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
            />
          </div>
         

          <div className="flex items-center space-x-2">
          <a href="/submitpayments" className="text-white text-sm border rounded-lg px-3 py-2 duration-150 bg-[#051B40] ">Submit</a>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
);

export default MyForm;
