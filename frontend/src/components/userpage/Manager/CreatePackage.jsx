import React, { useState } from "react";
import ManagerService from '../../service/ManagerService'; // Update the path accordingly
import { useNavigate } from 'react-router-dom';

function CreatePackage() {
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');
  const [error, setError] = useState('');
 

  const navigate = useNavigate(); // React Router hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    

    const token = localStorage.getItem('token'); // Assuming you are storing the token in localStorage

    const packageData = {
      packageName,
      packageDescription,
      packagePrice: parseInt(amount),
      daysPerWeek: parseInt(daysPerWeek)
    };

    try {
      await ManagerService.addPackage(packageData, token);
      alert('Package created successfully!'); // Show pop-up message
      navigate('/packages'); // Redirect to the /packages page
    } catch (error) {
      setError('Failed to create package. Please try again.');
      console.error(error);
    }
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
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Description</label>
                <textarea
                  value={packageDescription}
                  onChange={(e) => setPackageDescription(e.target.value)}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <div>
                <label className="font-medium">Amount (Rs.)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="w-full mt-2 px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Number of Days per Week</label>
                <input
                  type="number"
                  value={daysPerWeek}
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
                <button
                  type="submit"
                  className="w-full mt-2 px-3 py-2 text-center hover:bg-blue-600 font-semibold rounded bg-blue-700 text-white"
                >
                  Create
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {/* {success && <p className="text-green-500">{success}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreatePackage;
