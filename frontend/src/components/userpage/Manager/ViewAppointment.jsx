import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Sample data for appointments
  const tableItemsOngoing = [
    { time: "9.00 - 10.00", name: "Bob", coach: "Steven", session: "Zumba", room: "1", status: "Done" },
    { time: "9.00 - 10.00", name: "Christine", coach: "Steven", session: "Zumba", room: "1", status: "Pending" },
    { time: "9.00 - 10.00", name: "Charlotte", coach: "John", session: "HIIT", room: "4", status: "Not Paid" },
  ];

  const tableItemsUpcoming = [
    { time: "9.00 - 9.30", name: "Bob", coach: "Steven", session: "Functional", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", coach: "Peter", session: "Zumba", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", coach: "John", session: "Zumba", room: "4", status: "Not Paid" },
  ];

  const tableItemsPast = [
    { time: "9.00 - 9.30", name: "Bob", coach: "Steven", session: "Zumba", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", coach: "Peter", session: "Cardio", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", coach: "John", session: "Zumba", room: "4", status: "Not Paid" },
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
        navigate('/pastList');
      } else if (selectedDateWithoutTime > currentDate) {
        navigate('/futureList');
      } else {
        window.location.reload();
      }
    } else {
      alert("Please select a date first.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTableItemsOngoing = tableItemsOngoing.filter(item =>
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTableItemsUpcoming = tableItemsUpcoming.filter(item =>
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTableItemsPast = tableItemsPast.filter(item =>
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mr-4">Select Date</h3>
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
        <div>
          <input
            type="text"
            placeholder="Search by payment status..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-md"
          />
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
              <th className="py-3 px-6">Coach</th>
              <th className="py-3 px-6">Session</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsOngoing.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coach}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-4 py-3 rounded-full font-semibold text-xs ${
                      item.status === 'Done'
                        ? 'text-green-600 bg-green-50'
                        : 'text-blue-600 bg-blue-50'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
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
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Coach</th>
              <th className="py-3 px-6">Session</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsUpcoming.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coach}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-4 py-3 rounded-full font-semibold text-xs ${
                      item.status === 'Done'
                        ? 'text-green-600 bg-green-50'
                        : 'text-blue-600 bg-blue-50'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
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
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Coach</th>
              <th className="py-3 px-6">Session</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsPast.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.coach}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.session}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-4 py-3 rounded-full font-semibold text-xs ${
                      item.status === 'Done'
                        ? 'text-green-600 bg-green-50'
                        : 'text-blue-600 bg-blue-50'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-7 flex justify-end">
        <a href="/dashboard" className="py-2 px-4 bg-[#051B40] text-white rounded-md">
          Back
        </a>
      </div>
    </div>
  );
};

export default Appointments;
