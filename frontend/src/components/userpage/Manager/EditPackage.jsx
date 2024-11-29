import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ManagerService from '../../service/ManagerService'; // Update with the correct path

function EditPackage() {
  const { packageId } = useParams(); // Get packageId from the route
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await ManagerService.getPackageById(packageId, token);
        setPackageName(data.packageName);
        setPackageDescription(data.packageDescription);
        setAmount(data.packagePrice);
        setDaysPerWeek(data.daysPerWeek);
        setLoading(false);
      } catch (err) {
        setError('Failed to load package details.');
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [packageId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const packageData = {
        packageName,
        packageDescription: packageDescription,
        packagePrice: amount,
        daysPerWeek
      };
      await ManagerService.updatePackage(packageId, packageData, token);
      alert('Package updated successfully');
      navigate('/packages'); // Redirect to packages page after update
    } catch (err) {
      setError('Failed to update package.');
    }
  };

  if (loading) {
    return <p>Loading package details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-white sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="bg-gray-50 shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <h1 className="text-3xl font-bold text-center text-[#000000]">Edit Package</h1>
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditPackage;
