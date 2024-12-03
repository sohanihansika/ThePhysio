import React, { useState, useEffect } from "react";
import Managerservice from "../../../service/ManagerService";

function MembershipOptions() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await Managerservice.getAllPackages(token);
      console.log("hasini", response);

      // Assuming response itself is the array of packages
      if (Array.isArray(response)) {
        setPackages(response); // Set the array directly
      } else {
        console.error("Unexpected response format:", response);
        setPackages([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <section className="py-6">
        <h1 className="text-4xl font-bold text-start mb-6">Subscriptions</h1>

        <div className="container flex flex-wrap justify-center gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden border-2 rounded-md bg-[#051B40] w-60 md:w-72"
            >
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40] text-white">
                <p className="text-xl font-medium">{pkg.packageName}</p>
                <p className="text-4xl font-bold">
                  {pkg.packagePrice || "N/A"} Rs
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
                <p className="text-lg font-medium">
                  {pkg.daysPerWeek || "Frequency not specified"}
                </p>
                
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-4 bg-[#051B40]">
                <img
                  src={pkg.imageUrl || "./src/assets/default.jpg"}
                  alt={pkg.packageName}
                  className="w-full h-auto"
                />
                <p className="text-sm font-medium text-white mt-2">
                  {pkg.packageDescription || "No description available"}
                </p>
                <div className="flex justify-between space-x-2 mt-4">
                  <a
                    href={`/readmore/${pkg.packageId}`}
                    className="px-4 py-2 text-lg font-semibold rounded bg-white text-black"
                  >
                    Read more
                  </a>
                  <a
                    href={`/subscriptionForm/${pkg.packageId}`}
                    className="px-4 py-2 text-lg font-semibold rounded bg-white text-black"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MembershipOptions;
