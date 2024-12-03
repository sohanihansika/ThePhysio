import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import ManagerService from '../../service/ManagerService'; // Update with the correct path

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const data = await ManagerService.getAllPackages(token);
        setPackages(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load packages.');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // const handleDelete = (packageName) => {
  //   if (window.confirm(`Are you sure you want to delete the ${packageName} package?`)) {
  //     // Handle the delete logic here, e.g., make an API call to delete the package
  //     console.log(`${packageName} package deleted`);
  //   }
  // };

  if (loading) {
    return <p>Loading packages...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleDelete = async (packageId) => {
    const token = localStorage.getItem('token');
    try {
        const confirmDelete = window.confirm('Are you sure you want to delete this package?');
        if (confirmDelete) {
            await ManagerService.deletePackage(packageId, token);
            setPackages(packages.filter(pkg => pkg.packageId !== packageId)); // Update the state after deletion
            alert('Package deleted successfully.');
        }
    } catch (err) {
        setError(err.response?.data?.message || 'Error deleting package');
        setTimeout(() => setError(''), 5000);
    }
};


  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="py-6 dark:text-gray-800 w-full">
        <div className="flex justify-between items-center px-4 md:px-20">
          <h1 className="text-4xl font-bold leading-none text-start">Packages</h1>
          <a
            href="/createPackage"
            className="flex items-center hover:bg-blue-600 px-4 py-2 text-md font-semibold rounded bg-blue-700 text-white"
          >
            <FaPlus className="mr-2" /> Add new package
          </a>
        </div>
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.packageId} className="flex flex-col overflow-hidden border-2 rounded-md bg-gray-400 w-60 md:w-72 mt-4">
                <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-gray-400 text-black">
                  <p className="text-xl font-medium">{pkg.packageName}</p>
                  <p className="text-4xl font-bold">
                    {pkg.packagePrice}Rs
                    <span className="text-xl dark:text-black">/mo</span>
                  </p>
                  <p className="text-4xl font-bold">
                    {pkg.timeDue} Months
                  </p>
                  <p className="text-lg font-medium">{pkg.daysPerWeek} days per week</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-4 bg-gray-400">
                  {/* <img
                    src={pkg.imgSrc || 'default_image.png'} // Use default image if imgSrc is not provided
                    alt={`${pkg.packageName} Plan`}
                    className="w-full h-auto"
                  /> */}
                  <p className="text-sm font-medium text-black">
                    {pkg.packageDescription}
                  </p>
                  <div className="flex justify-between space-x-2 mt-4">
                    <a
                      href={`/editPackage/${pkg.packageId}`}
                      className="px-2 py-2 text-xl font-semibold rounded dark:text-black"
                    >
                      <MdModeEdit  />
                    </a>
                    {/* <Link 
                    to={`/editPackage/${packages.packageId}`}
                    className="py-2 px-3 font-medium text-blue-900 text-xl hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    <MdModeEdit  />
                  </Link> */}
                    <button
                      onClick={() => handleDelete(pkg.packageId)}
                      className="px-2 py-2 text-xl font-semibold rounded dark:text-black"
                    >
                      <MdDelete />
                    </button>
                    <a
                      href="/subscribers"
                      className="px-2 py-2 text-xl font-semibold rounded dark:text-black"
                    >
                      <BiSolidUserDetail />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
