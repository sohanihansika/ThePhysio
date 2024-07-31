import React, { useState } from "react";

function EditPackage() {
  const [packageName, setPackageName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      packageName,
      description,
      amount,
      daysPerWeek
    });
  };

return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-white sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div className="bg-gray-50 shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                <h1 className="text-3xl font-bold text-center text-[#000000]">Create Package</h1>
                <div className="mt-12 max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="font-medium">Package Name</label>
                            <input
                                type="text"
                                value="Cardio Workout"
                                onChange={(e) => setPackageName(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Description</label>
                            <textarea
                                value="The cardio workout keeps your heart healthier."
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            ></textarea>
                        </div>
                        <div>
                            <label className="font-medium">Amount (Rs.)</label>
                            <input
                                type="number"
                                value='2000'
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Number of Days per Week</label>
                            <input
                                type="number"
                                value='3'
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value >= 1 && value <= 7) {
                                        setDaysPerWeek(value);
                                    }
                                }}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mb-4 flex justify-end">
                        <a
                            href="/packages"
                            className="w-full mt-2 px-3 py-2 text-center hover:bg-blue-600 font-semibold rounded bg-blue-700 text-white"
                        >
                            Update
                        </a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
);
}

export default EditPackage;
