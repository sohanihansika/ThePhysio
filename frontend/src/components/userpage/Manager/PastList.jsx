import React, { useState } from 'react';

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableItems, setTableItems] = useState([
    { time: "9.00 - 9.30", name: "Bob", coach: "Steven", session: "Zumba", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", coach: "Peter", session: "Cardio", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", coach: "John", session: "Zumba", room: "4", status: "Not Paid" },
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = tableItems.filter(item =>
    item.status.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Past Appointments
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by payment status..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
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
            {filteredItems.map((item, idx) => (
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
        <a href="/viewAppointment" className="py-2 px-4 bg-[#051B40] text-white rounded-md">
          Back
        </a>
      </div>
    </div>
  );
};

export default Appointments;
