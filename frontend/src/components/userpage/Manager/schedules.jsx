import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  // Sample data for appointments
  const tableItemsOngoing = [
    { time: "9.00 - 9.30", memberName: "Bob", coachName: "Steven", package: "Cardio" },
    { time: "9.00 - 9.30", memberName: "Christine", coachName: "Peter", package: "Strength" },
    { time: "9.00 - 9.30", memberName: "Charlotte", coachName: "John", package: "Body Weight" },
  ];

  const tableItemsUpcoming = [
    { time: "9.00 - 9.30", memberName: "Bob", coachName: "Steven", package: "Strength" },
    { time: "9.00 - 9.30", memberName: "Christine", coachName: "Peter", package: "Body Weight" },
    { time: "9.00 - 9.30", memberName: "Charlotte", coachName: "John", package: "Cardio" },
  ];

  const tableItemsPast = [
    { time: "9.00 - 9.30", memberName: "Bob", coachName: "Steven", package: "Body Weight" },
    { time: "9.00 - 9.30", memberName: "Christine", coachName: "Peter", package: "Strength" },
    { time: "9.00 - 9.30", memberName: "Charlotte", coachName: "John", package: "Cardio" },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = () => {
    if (selectedDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const selectedDateWithoutTime = new Date(selectedDate);
      selectedDateWithoutTime.setHours(0, 0, 0, 0);

      if (selectedDateWithoutTime < currentDate) {
        navigate('/pastSchedule');
      } else if (selectedDateWithoutTime > currentDate) {
        navigate('/futureSchedule');
      } else {
        window.location.reload();
      }
    } else {
      alert("Please select a date first.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Schedules</h3>
        </div>
        <div className="flex items-center">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border rounded-md"
            placeholderText="Select a date"
          />
          <button
            onClick={handleButtonClick}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            View Schedule
          </button>
        </div>
      </div>

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-xl">Ongoing Schedules</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Coach Name</th>
              <th className="py-3 px-6">Subscribed Package</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsOngoing.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.memberName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coachName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-xl mt-6">Upcoming Schedules</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Coach Name</th>
              <th className="py-3 px-6">Subscribed Package</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsUpcoming.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.memberName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coachName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-xl mt-6">Past Schedules</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Coach Name</th>
              <th className="py-3 px-6">Subscribed Package</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsPast.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.memberName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coachName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-7 flex justify-end">
        <a href="/allAppointments" className="text-indigo-600 hover:text-indigo-500 active:text-indigo-700 text-sm font-medium">View all</a>
      </div>
    </div>
  );
};

export default Appointments;
