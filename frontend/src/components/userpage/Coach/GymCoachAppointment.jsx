import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export const tableItemsOngoing = [
  { time: "9.00 - 10.00", name: "Bob", session: "Cardio", room: "1", date: "2024-07-31" },
  { time: "9.00 - 10.00", name: "Christine", session: "Strength", room: "1", date: "2024-07-31" },
  { time: "9.00 - 10.00", name: "Charlotte", session: "HIIT", room: "4", date: "2024-07-31" },
];

export const tableItemsUpcoming = [
  { time: "9.00 - 9.30", name: "Bob", session: "Functional", room: "1", date: "2024-08-01" },
  { time: "9.00 - 9.30", name: "Christine", session: "HIIT", room: "2", date: "2024-08-01" },
  { time: "9.00 - 9.30", name: "Charlotte", session: "Cardio", room: "4", date: "2024-08-01" },
];

export const tableItemsPast = [
  { time: "9.00 - 9.30", name: "Bob", session: "Suspension", room: "1", date: "2024-07-30" },
  { time: "9.00 - 9.30", name: "Christine", session: "Cardio", room: "2", date: "2024-07-30" },
  { time: "9.00 - 9.30", name: "Charlotte", session: "HIIT", room: "4", date: "2024-07-30" },
];

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

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
        navigate('/pastListC');
      } else if (selectedDateWithoutTime > currentDate) {
        navigate('/futureListC');
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
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Today Schedule</h3>
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
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Ongoing Appointments</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Session Type</th>
              {/* <th className="py-3 px-6">Room No</th> */}
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsOngoing.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">{item.room}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-6">Upcoming Appointments</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Session Type</th>
              {/* <th className="py-3 px-6">Room No</th> */}
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsUpcoming.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">{item.room}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-6">Past Appointments</h3>
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Member Name</th>
              <th className="py-3 px-6">Session Type</th>
              {/* <th className="py-3 px-6">Room No</th> */}
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {tableItemsPast.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">{item.room}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="mt-7 flex justify-end">
        <a href="/dashboard" className="py-2 px-4 bg-[#051B40] text-white rounded-md">
          Back
        </a>
      </div> */}
    </div>
  );
};

export default Appointments;
