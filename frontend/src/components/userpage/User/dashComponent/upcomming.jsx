import React from 'react';

// Dummy data to simulate the appointments
const filteredTableItemsOngoing = [
  { time: '9:00 AM', name: 'John Doe', doc: 'Dr. Smith', room: '101', status: 'Pending' },
  { time: '10:00 AM', name: 'Jane Roe', doc: 'Dr. Jones', room: '102', status: 'Done' },
  { time: '11:00 AM', name: 'Sam Brown', doc: 'Dr. Adams', room: '103', status: 'Pending' },
];

export default function Upcoming() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-[#172b59] p-6">Upcomming Reservations</h1>

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
    </div>
  );
}
