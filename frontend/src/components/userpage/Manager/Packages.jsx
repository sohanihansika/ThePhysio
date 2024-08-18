import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";

function Packages() {
  const handleDelete = (packageName) => {
    if (window.confirm(`Are you sure you want to delete the ${packageName} package?`)) {
      // Handle the delete logic here, e.g., make an API call to delete the package
      console.log(`${packageName} package deleted`);
    }
  };

  const packages = [
    {
      name: "Cardio Workout",
      price: "2000Rs",
      frequency: "3 days per week",
      description: "The cardio workout keeps your heart healthier.",
      imgSrc: "./src/assets/GymPlans/cardio.png"
    },
    {
      name: "Strength Training",
      price: "3000Rs",
      frequency: "3 days per week",
      description: "The Strength Training always keeps you actively.",
      imgSrc: "./src/assets/GymPlans/strength.png"
    },
    {
      name: "HIIT Training",
      price: "3000Rs",
      frequency: "2 days per week",
      description: "HIIT Training makes your muscles more fit and healthy.",
      imgSrc: "./src/assets/GymPlans/hiit.png"
    },
    {
      name: "Suspension Training",
      price: "3000Rs",
      frequency: "2 days per week",
      description: "The Suspension training keeps your body healthier.",
      imgSrc: "./src/assets/GymPlans/suspension.png"
    },
    {
      name: "Body Weight Training",
      price: "3000Rs",
      frequency: "3 days per week",
      description: "To maintain your body weight, this training is the best one.",
      imgSrc: "./src/assets/GymPlans/bodywei.png"
    },
    {
      name: "Functional Training",
      price: "2000Rs",
      frequency: "2 days per week",
      description: "The functional Training gives you much more energy.",
      imgSrc: "./src/assets/GymPlans/functional.png"
    }
  ];

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
              <div key={pkg.name} className="flex flex-col overflow-hidden border-2 rounded-md bg-gray-400 w-60 md:w-72 mt-4">
                <div className="flex flex-col items-center justify-center px-2 py-4 space-y-2 bg-gray-400 text-black">
                  <p className="text-xl font-medium">{pkg.name}</p>
                  <p className="text-4xl font-bold">
                    {pkg.price}
                    <span className="text-xl dark:text-black">/mo</span>
                  </p>
                  <p className="text-lg font-medium">{pkg.frequency}</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-4 bg-gray-400">
                  <img
                    src={pkg.imgSrc}
                    alt={`${pkg.name} Plan`}
                    className="w-full h-auto"
                  />
                  <p className="text-sm font-medium text-black">
                    {pkg.description}
                  </p>
                  <div className="flex justify-between space-x-2 mt-4">
                    <a
                      href="/editPackage"
                      className="px-2 py-2 text-xl font-semibold rounded dark:text-black"
                    >
                      <MdModeEdit  />
                    </a>
                    <button
                      onClick={() => handleDelete(pkg.name)}
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
