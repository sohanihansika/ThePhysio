import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationSchedule = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const tableItemsOngoing = [
    { date: new Date('2024-08-01'), time: '10:00 - 10:30', name: 'Bob', room: '1', status: 'Done' },
    { date: new Date('2024-08-01'), time: '10:00 - 10:30', name: 'Christine', room: '2', status: 'Pending' },
    { date: new Date('2024-08-01'), time: '10:00 - 10:30', name: 'Charlotte', room: '4', status: 'Not Paid' },
  ];

  const tableItemsUpcoming = [
    { date: new Date('2024-08-01'), time: '09:00 - 09:30', name: 'Bob', room: '1', status: 'Done' },
    { date: new Date('2024-08-02'), time: '10:00 - 10:30', name: 'Christine', room: '2', status: 'Not Paid' },
    { date: new Date('2024-08-02'), time: '11:30 - 12:00', name: 'Charlotte', room: '4', status: 'Not Paid' },
  ];

  const tableItemsPast = [
    { date: new Date('2024-07-15'), time: '09:00 - 09:30', name: 'Bob', room: '1', status: 'Done' },
    { date: new Date('2024-07-03'), time: '10:00 - 10:30', name: 'Christine', room: '2', status: 'Pending' },
    { date: new Date('2024-06-02'), time: '09:00 - 09:30', name: 'Charlotte', room: '4', status: 'Not Paid' },
  ];

  const handleResetFilters = () => {
    setSelectedYear('');
    setSelectedMonth('');
    setSelectedDate('');
    setSelectedTime('');
    setSearchQuery('');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterItems = (items) => {
    return items.filter((item) => {
      const dateMatch = 
        (!selectedYear || item.date.getFullYear() === parseInt(selectedYear)) &&
        (!selectedMonth || item.date.getMonth() + 1 === parseInt(selectedMonth)) &&
        (!selectedDate || item.date.getDate() === parseInt(selectedDate));
      const timeMatch = !selectedTime || item.time === selectedTime;
      const searchMatch = item.status.toLowerCase().includes(searchQuery.toLowerCase());
      return dateMatch && timeMatch && searchMatch;
    });
  };

  const filteredTableItemsOngoing = filterItems(tableItemsOngoing);
  const filteredTableItemsUpcoming = filterItems(tableItemsUpcoming);
  const filteredTableItemsPast = filterItems(tableItemsPast);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-400"
          >
            <option value="">Select Year</option>
            {[2022, 2023, 2024, 2025].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-400"
          >
            <option value="">Select Month</option>
            {monthNames.map((month, index) => (
              <option key={month} value={index + 1}>{month}</option>
            ))}
          </select>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-400"
          >
            <option value="">Select Date</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-400"
          >
            <option value="">Select Time</option>
            {['08:00 - 08:30','08:30 - 09:00','09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30','10:30 - 11:00','11:00 - 11:30','11:30 - 12:00','12:00 - 12:30','12:30 - 13:00','13:00 - 13:30','13:30 - 14:00'].map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Reset
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
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsOngoing.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.date.toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
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
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsUpcoming.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.date.toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
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
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItemsPast.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.date.toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
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

export default ReservationSchedule;
