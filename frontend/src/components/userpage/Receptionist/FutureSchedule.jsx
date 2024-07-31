import React, { useState } from 'react';

const Appointments = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [actionType, setActionType] = useState(""); // "reschedule" or "cancel"
  const [searchQuery, setSearchQuery] = useState(""); // For the payment status search bar
  const [nameSearchQuery, setNameSearchQuery] = useState(""); // For the name search bar

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Done" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.30 - 10.00", name: "Yasmine", doc: "Lewis", room: "3", status: "Done" },
    { time: "10.30 - 11.00", name: "Charlotte", doc: "John", room: "4", status: "Not Paid" },
  ];

  const handleRescheduleClick = (item) => {
    setSelectedItem(item);
    setActionType("reschedule");
    setIsRescheduleModalOpen(true);
  };

  const handleCancelClick = (item) => {
    setSelectedItem(item);
    setActionType("cancel");
    setIsCancelModalOpen(true);
  };

  const handleConfirm = () => {
    if (actionType === "reschedule") {
      alert(`Rescheduling confirmed for ${selectedItem.name}`);
    } else if (actionType === "cancel") {
      alert(`Cancellation confirmed for ${selectedItem.name}`);
    }
    setIsRescheduleModalOpen(false);
    setIsCancelModalOpen(false);
    setSelectedItem(null);
    setActionType("");
  };

  const handleCloseModal = () => {
    setIsRescheduleModalOpen(false);
    setIsCancelModalOpen(false);
    setSelectedItem(null);
    setActionType("");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNameSearchChange = (e) => {
    setNameSearchQuery(e.target.value);
  };

  const filteredTableItems = tableItems.filter(item =>
    item.status.toLowerCase().includes(searchQuery.toLowerCase()) &&
    item.name.toLowerCase().includes(nameSearchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Upcoming Appointments</h3>
        </div>
      </div>

      {/* Search Bars */}
      <div className="mt-8 flex space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="nameSearch" className="text-gray-700">Name:</label>
          <input
            id="nameSearch"
            type="text"
            placeholder="Search by name..."
            value={nameSearchQuery}
            onChange={handleNameSearchChange}
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="statusSearch" className="text-gray-700">Payment Status:</label>
          <input
            id="statusSearch"
            type="text"
            placeholder="Search by payment status..."
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
              <th className="py-3 px-6">Patient Name</th>
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6">Room No</th>
              <th className="py-3 px-6">Payment Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-black divide-y">
            {filteredTableItems.map((item, idx) => (
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
                  <button
                    onClick={() => handleRescheduleClick(item)}
                    className="py-1.5 px-3 text-white duration-150 bg-[#051B40] border rounded-lg mr-2"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancelClick(item)}
                    className="py-1.5 px-3 text-white duration-150 bg-red-500 border rounded-lg"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reschedule Modal */}
      {isRescheduleModalOpen && selectedItem && actionType === "reschedule" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-medium text-center mb-4">Are You Sure to Reschedule?</h3>
            <p className="text-center mb-4">
              <strong>Time:</strong> {selectedItem.time} <br />
              <strong>Name:</strong> {selectedItem.name} <br />
              <strong>Doctor:</strong> {selectedItem.doc} <br />
              <strong>Room No:</strong> {selectedItem.room}
            </p>
            <div className="flex justify-between">
              <a href="/calender1" className="py-2 px-4 bg-green-500 text-white rounded-md">Confirm</a>
              <button onClick={handleCloseModal} className="py-2 px-4 bg-gray-500 text-white rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {isCancelModalOpen && selectedItem && actionType === "cancel" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-medium text-center mb-4">Are You Sure to Cancel?</h3>
            <p className="text-center mb-4">
              <strong>Time:</strong> {selectedItem.time} <br />
              <strong>Name:</strong> {selectedItem.name} <br />
              <strong>Doctor:</strong> {selectedItem.doc} <br />
              <strong>Room No:</strong> {selectedItem.room}
            </p>
            <div className="flex justify-between">
              <button onClick={handleConfirm} className="py-2 px-4 bg-red-500 text-white rounded-md">Confirm</button>
              <button onClick={handleCloseModal} className="py-2 px-4 bg-gray-500 text-white rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-7 flex justify-end">
        <a href="/schedule" className="py-2 px-4 bg-[#051B40] text-white rounded-md">Back</a>
      </div>
    </div>
  );
};

export default Appointments;
