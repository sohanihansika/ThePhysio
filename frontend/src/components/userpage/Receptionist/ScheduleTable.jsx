import { useState } from "react";

export default () => {
  const [openReschedule, setOpenReschedule] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const tableItems = [
    { time: "9.00 - 9.30", name: "Bob", doc: "Steven", room: "1", status: "Paid" },
    { time: "9.00 - 9.30", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "9.00 - 9.30", name: "Yasmine", doc: "Lewis", room: "3", status: "Paid" },
    { time: "9.00 - 9.30", name: "Charlotte", doc: "John", room: "4", status: "Not " },
  ];

  const tableItemspast = [
    { time: "8.30 - 9.00", name: "Bob", doc: "Steven", room: "1", status: "Paid" },
    { time: "8.30 - 9.00", name: "Christine", doc: "Peter", room: "2", status: "Pending" },
    { time: "8.30 - 9.00", name: "Yasmine", doc: "Lewis", room: "3", status: "Paid" },
    { time: "8.30 - 9.00", name: "Charlotte", doc: "John", room: "4", status: "Not " },
  ];

  const handleReschedule = (item) => {
    setSelectedItem(item);
    setOpenReschedule(true);
  };

  const handleCancel = (item) => {
    setSelectedItem(item);
    setOpenCancel(true);
  };

  const confirmReschedule = () => {
    console.log("Rescheduled:", selectedItem);
    setOpenReschedule(false);
  };

  const confirmCancel = () => {
    console.log("Cancelled:", selectedItem);
    setOpenCancel(false);
  };

  const closeModal = () => {
    setOpenReschedule(false);
    setOpenCancel(false);
    setSelectedItem(null);
  };

  const filteredOngoingItems = tableItems.filter((item) =>
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPastItems = tableItemspast.filter((item) =>
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Ongoing Reservation
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="#"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Appointment
          </a>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by Payment Status"
          className="px-4 py-2 border rounded-lg w-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Time</th>
              <th className="py-3 pr-6">Patient Name</th>
              <th className="py-3 pr-6">Doctor</th>
              <th className="py-3 pr-6">Room No</th>
              <th className="py-3 pr-6">Payment Status</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {filteredOngoingItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.doc}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.status === "Paid" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="text-center whitespace-nowrap">
                  <button
                    onClick={() => handleReschedule(item)}
                    className="py-1.5 px-3 text-white duration-150 bg-[#051B40] border rounded-lg mr-2"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancel(item)}
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

      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-6">
        Past Reservation
      </h3>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Time</th>
              <th className="py-3 pr-6">Patient Name</th>
              <th className="py-3 pr-6">Doctor</th>
              <th className="py-3 pr-6">Room No</th>
              <th className="py-3 pr-6">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {filteredPastItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.doc}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.status === "Paid" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"
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

      {openReschedule && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="bg-white rounded-md shadow-lg p-6 z-10">
            <h2 className="text-xl font-bold mb-4">Confirm Reschedule</h2>
            <p>Are you sure you want to reschedule this appointment?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <a href="/calender1" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Confirm
              </a>
            </div>
          </div>
        </div>
      )}

      {openCancel && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="bg-white rounded-md shadow-lg p-6 z-10">
            <h2 className="text-xl font-bold mb-4">Confirm Cancellation</h2>
            <p>Are you sure you want to cancel this appointment?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button onClick={confirmCancel} className="px-4 py-2 bg-red-600 text-white rounded-md">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
