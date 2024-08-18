import React, { useState } from 'react';

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For the search bar

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", session: "Functional", room: "1" },
    { time: "9.00 - 9.30", name: "Christine", session: "HIIT", room: "2" },
    { time: "9.00 - 9.30", name: "Charlotte", session: "Cardio", room: "4" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTableItems = tableItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="flex items-center justify-between">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Upcoming Appointments</h3>
        </div>
        {/* Search Bar */}
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
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
            {filteredTableItems.map((item, idx) => (
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

      <div className="mt-7 flex justify-end">
        <a href="/coachAppointment" className="py-2 px-4 bg-[#051B40] text-white rounded-md">Back</a>
      </div>
    </div>
  );
};

export default Appointments;
