import React, { useState } from 'react';

const SchedulePage = () => {
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showReschedulePopup, setShowReschedulePopup] = useState(false);
  const [showReservationPopup, setShowReservationPopup] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [newTime, setNewTime] = useState('');
  const [newRoom, setNewRoom] = useState('');

  const tableItems = [
    {
      time: "8.00 a.m -10.00 a.m",
      room: "1",
      availablity: "reserved"
    },
    {
      time: "10.00 a.m -12.00 p.m",
      room: "unavailable",
      availablity: "unavailable"
    },
    {
      time: "1.00 p.m -3.00 p.m",
      room: "1",
      availablity: "reserved"
    },
    {
      time: "3.00 a.m - 5.00 a.m",
      room: "available",
      availablity: "available"
    },
  ];

  const availableRooms = [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5"
  ];

  const handleCancelClick = (session) => {
    setSelectedSession(session);
    setShowCancelPopup(true);
  };

  const handleRescheduleClick = (session) => {
    setSelectedSession(session);
    setShowReschedulePopup(true);
  };

  const handleMakeReservationClick = (session) => {
    setSelectedSession(session);
    setShowReservationPopup(true);
  };

  const handleCancelConfirm = () => {
    // Add logic to handle the cancellation
    console.log(`Session canceled: ${selectedSession.time} - ${selectedSession.room}`);
    setShowCancelPopup(false);
  };

  const handleRescheduleConfirm = () => {
    // Add logic to handle the rescheduling
    console.log(`Session rescheduled: ${selectedSession.time} - ${selectedSession.room} to ${newTime} - ${newRoom}`);
    setShowReschedulePopup(false);
  };

  const handleReservationConfirm = () => {
    // Add logic to handle the reservation
    console.log(`Reservation made for ${newRoom} at ${selectedSession.time}`);
    setShowReservationPopup(false);
  };

  const handleClosePopup = () => {
    setShowCancelPopup(false);
    setShowReschedulePopup(false);
    setShowReservationPopup(false);
    setSelectedSession(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Schedule
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-center">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">Slot No</th>
              <th className="py-3 px-6">Time </th>
              <th className="py-3 px-12">Room No</th>
              <th className="py-3 px-6">Availability</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx} className="divide-x">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                  <span>{idx + 1}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.availablity}</td>
                
                <td className="text-center px-6 whitespace-nowrap">
                  {item.availablity === 'available' && (
                    <button
                      onClick={() => handleMakeReservationClick(item)}
                      className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-[#051B40] rounded-lg"
                    >
                      Make
                    </button>
                  )}
                  {item.availablity === 'reserved' && (
                    <button
                      onClick={() => handleRescheduleClick(item)}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-[#051B40] rounded-lg"
                    >
                      Reschedule
                    </button>
                  )}
                  {item.availablity === 'reserved' && (
                    <button
                      onClick={() => handleCancelClick(item)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-[#051B40] rounded-lg"
                    >
                      Cancel
                    </button>
                  )}
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cancel Popup Modal */}
      {showCancelPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-4">Confirm Cancellation</h4>
            <p>Are you sure you want to cancel this session?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleCancelConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Popup Modal */}
      {showReschedulePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-4">Reschedule Session</h4>
            <div className="mt-4">
              <label className="block mb-2 text-gray-700">New Time:</label>
              <select
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="" disabled>Select a new time</option>
                {tableItems.filter(item => item.availablity === 'available').map((item, idx) => (
                  <option key={idx} value={item.time}>{item.time}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-gray-700">New Room:</label>
              <select
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="" disabled>Select a new room</option>
                {availableRooms.map((room, idx) => (
                  <option key={idx} value={room}>{room}</option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleRescheduleConfirm}
                className="bg-indigo-500 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Popup Modal */}
      {showReservationPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-4">Make Reservation</h4>
            <div className="mt-4">
              <label className="block mb-2 text-gray-700">Select Room:</label>
              <select
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="" disabled>Select a room</option>
                {availableRooms.map((room, idx) => (
                  <option key={idx} value={room}>{room}</option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleReservationConfirm}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
