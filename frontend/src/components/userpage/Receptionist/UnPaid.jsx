import React, { useState } from 'react';

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Not Paid" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Yasmine", doc: "Lewis", room: "3", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = tableItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Payments</h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-5 flex items-center space-x-4">
        <label htmlFor="search" className="text-sm font-medium text-black">Search Patient</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter patient name"
          className="w-1/4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.doc}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-4 py-3 rounded-full font-semibold text-xs ${item.status === "Done" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="text-center whitespace-nowrap">
                    <a
                      href="/payments1"
                      className="py-1.5 px-3 text-white duration-150 bg-[#051B40] border rounded-lg"
                    >
                      Pay
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
