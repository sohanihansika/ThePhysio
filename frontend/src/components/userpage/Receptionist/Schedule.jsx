import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [statusSearchQuery, setStatusSearchQuery] = useState('');
  const [nameSearchQuery, setNameSearchQuery] = useState('');
  const navigate = useNavigate();

  // Sample data for appointments
  const tableItemsOngoing = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  const tableItemsUpcoming = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  const tableItemsPast = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
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

  const handleStatusSearchChange = (e) => {
    setStatusSearchQuery(e.target.value);
  };

  const handleNameSearchChange = (e) => {
    setNameSearchQuery(e.target.value);
  };

  const filteredTableItemsOngoing = tableItemsOngoing.filter(item =>
    item.name.toLowerCase().includes(nameSearchQuery.toLowerCase()) &&
    item.status.toLowerCase().includes(statusSearchQuery.toLowerCase())
  );

  const filteredTableItemsUpcoming = tableItemsUpcoming.filter(item =>
    item.name.toLowerCase().includes(nameSearchQuery.toLowerCase()) &&
    item.status.toLowerCase().includes(statusSearchQuery.toLowerCase())
  );

  const filteredTableItemsPast = tableItemsPast.filter(item =>
    item.name.toLowerCase().includes(nameSearchQuery.toLowerCase()) &&
    item.status.toLowerCase().includes(statusSearchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-2xl mr-4">Today Schedule</h3>
        <div className="flex items-center ml-auto">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border rounded-md"
            placeholderText="Select a date for schedule"
          />
          <button
            onClick={handleButtonClick}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            View Schedule
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-6">
      <div className="mt-5 flex items-center space-x-4">
        <label htmlFor="name-search" className="text-sm font-medium text-black"> Name:</label>
          <input
            id="name-search"
            type="text"
            placeholder="Enter name..."
            value={nameSearchQuery}
            onChange={handleNameSearchChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-5 flex items-center space-x-4">
        <label htmlFor="status-search" className="text-sm font-medium text-black">Payment Status:</label>
          <input
            id="status-search"
            type="text"
            placeholder="Enter status..."
            value={statusSearchQuery}
            onChange={handleStatusSearchChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsOngoing.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.doc}</td>
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
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
              <th className="py-3 px-6">Rescedule</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsUpcoming.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.doc}</td>
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
                <td className="px-6 py-4 whitespace-nowrap">
                              <a href="/reschedulePopup" className="flex items-center gap-x-2 p-2 rounded-lg text-blue-950 hover:bg-white/80 hover:text-[#172b59] duration-150">
                                        <p>Rescedule</p>
                                    </a>
                  
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
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsPast.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.doc}</td>
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
    </div>
  );
};

export default Appointments;
