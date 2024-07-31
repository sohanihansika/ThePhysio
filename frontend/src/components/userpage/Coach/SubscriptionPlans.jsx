import React, { useState } from 'react';
import { FaDumbbell, FaHeart, FaRunning, FaBicycle, FaWeight, FaCube, FaUser } from 'react-icons/fa';
import subscribersData from './subscribersData';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { title: "Cardio Workout", desc: subscribersData['Cardio Workout'].length.toString(), icon: <FaRunning className="text-6xl mb-2" /> },
    { title: "Strength Training", desc: subscribersData['Strength Training'].length.toString(), icon: <FaDumbbell className="text-6xl mb-2" /> },
    { title: "HIIT Training", desc: subscribersData['HIIT Training'].length.toString(), icon: <FaHeart className="text-6xl mb-2" /> },
    { title: "Suspension Training", desc: subscribersData['Suspension Training'].length.toString(), icon: <FaBicycle className="text-6xl mb-2" /> },
    { title: "Body Weight Training", desc: subscribersData['Body Weight Training'].length.toString(), icon: <FaWeight className="text-6xl mb-2" /> },
    { title: "Functional Training", desc: subscribersData['Functional Training'].length.toString(), icon: <FaCube className="text-6xl mb-2" /> },
  ];

  const handlePlanClick = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  const getSubscribers = (planTitle) => {
    return subscribersData[planTitle] || [];
  };

  return (
    <section className='py-2'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <ul className='mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {plans.map((plan, idx) => (
            <li key={idx} className="border rounded-2xl bg-blue-100 p-4 shadow-md hover:bg-blue-200 transition-colors" onClick={() => handlePlanClick(plan.title)}>
              <div className="flex items-start justify-center">
                <div className="space-y-2">
                  <div className="flex-shrink-0 items-center text-center">
                    <span className="text-6xl mb-2">{plan.icon}</span>
                    <h4 className="text-gray-800 font-semibold text-xl mb-1">{plan.title}</h4>
                    <p className="text-gray-600 text-lg">{plan.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {selectedPlan && (
          <div className='mt-16'>
            <h3 className="text-2xl font-bold text-gray-800">Subscribers for {selectedPlan}</h3>
            {getSubscribers(selectedPlan).length > 0 ? (
              <table className="table-auto w-full mt-4 border-collapse border border-gray-300 shadow-md">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2 text-center text-gray-700">Member ID</th>
                    <th className="border px-4 py-2 text-center text-gray-700">Member Name</th>
                    <th className="border px-4 py-2 text-center text-gray-700">Date Subscribed</th>
                  </tr>
                </thead>
                <tbody>
                  {getSubscribers(selectedPlan).map((subscriber, index) => (
                    <tr key={index} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-all">
                      <td className="border px-4 py-2 text-center">{subscriber.memberId}</td> {/* Centered Icon */}
                      <td className="border px-4 py-2 text-center">{subscriber.name}</td>
                      <td className="border px-4 py-2 text-center">{subscriber.dateSubscribed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="mt-4 text-center text-gray-600">No Subscribers</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
