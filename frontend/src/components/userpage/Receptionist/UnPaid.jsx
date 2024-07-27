import React, { useState } from 'react';

const Appointments = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Not Paid" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Yasmine", doc: "Lewis", room: "3", status: "Pending" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  const handlePayClick = (item) => {
    setSelectedItem(item);
    setIsPaymentModalOpen(true);
  };

  const handleConfirmPayment = () => {
    alert(`Payment confirmed for ${selectedItem.name}`);
    setIsPaymentModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Payments</h3>
        </div>
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
            {tableItems.map((item, idx) => (
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
                  <a href= "/payments"
                    className="py-1.5 px-3 text-white duration-150 bg-[#051B40] border rounded-lg"
                  >
                    Pay
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-medium text-center mb-4">Confirm Payment</h3>
            <p className="text-center mb-4">
              <strong>Time:</strong> {selectedItem.time} <br />
              <strong>Name:</strong> {selectedItem.name} <br />
              <strong>Doctor:</strong> {selectedItem.doc} <br />
              <strong>Room No:</strong> {selectedItem.room}
            </p>
            <div className="flex justify-between">
              <button onClick={handleConfirmPayment} className="py-2 px-4 bg-green-500 text-white rounded-md">Confirm Payment</button>
              <button onClick={handleCloseModal} className="py-2 px-4 bg-gray-500 text-white rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Appointments;
