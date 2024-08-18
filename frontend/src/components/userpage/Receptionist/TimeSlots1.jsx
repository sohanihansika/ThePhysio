import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimeSlots = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Generate half-hour time slots from 8 AM to 6 PM
  const slots = [];
  const startHour = 8; // 8 AM
  const endHour = 18;  // 6 PM

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const start = `${hour.toString().padStart(2, '0')}:${minute === 0 ? '00' : minute}`;
      const end = minute === 0 ? `${hour.toString().padStart(2, '0')}:30` : `${(hour + 1).toString().padStart(2, '0')}:00`;
      slots.push(`${start} - ${end}`);
    }
  }

  // Define which time slots should be red and non-clickable
  const redSlots = ["08:00 - 08:30", "10:00 - 10:30", "12:00 - 12:30", "13:00 - 13:30"];

  const handleSlotClick = (slot) => {
    if (!redSlots.includes(slot)) {
      setSelectedSlot(slot);
    }
  };

  const handleRescheduleClick = () => {
    if (selectedSlot) {
      setShowModal(true);
    } else {
      alert('Please select a time slot before rescheduling.');
    }
  };

  const confirmReschedule = () => {
    setShowModal(false);
    navigate('/appointment1');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCancelClick = () => {
    navigate('/calender1');
  };

  return (
    <div className="container">
      <h2>Select Suitable Time Slots</h2>
      <div className="slots">
        {slots.map(slot => (
          <div
            className={`slot ${redSlots.includes(slot) ? 'red-slot' : selectedSlot === slot ? 'selected-slot' : ''}`}
            key={slot}
            onClick={() => handleSlotClick(slot)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') handleSlotClick(slot); }}
          >
            {slot}
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="color-box red"></div>
          <span>Reserved</span>
        </div>
        <div className="legend-item">
          <div className="color-box blue"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="color-box selected"></div>
          <span>Selected</span>
        </div>
      </div>
      <div className="button-container">
        <button
          className="reschedule-button"
          onClick={handleRescheduleClick}
        >
          Reschedule
        </button>
        <button
          className="cancel-button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Reschedule</h3>
            <p>Are you sure you want to reschedule to {selectedSlot}?</p>
            <button onClick={confirmReschedule}>Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #eef3f7;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative; /* Add this line to make positioning relative */
        }
        .slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .slot {
          background-color: #b0c4de; /* Default color for available slots */
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          transition: transform 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .slot:hover {
          background-color: #fff394;
          color: #000000;
          transform: translateY(-5px);
        }
        .red-slot {
          background-color: #D32F2F; /* Matte red color */
          cursor: not-allowed;
        }
        .red-slot:hover {
          background-color: #D32F2F;
          transform: none;
        }
        .selected-slot {
          background-color: #fff394; /* Color for selected slot */
        }
        h2 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #2a3b73;
        }
        .legend {
          margin-top: 40px;
          text-align: left;
        }
        .legend-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .color-box {
          width: 20px;
          height: 20px;
          border-radius: 3px;
          margin-right: 10px;
        }
        .color-box.red {
          background-color: #D32F2F; /* Same matte red color for legend */
        }
        .color-box.blue {
          background-color: #b0c4de;
        }
        .color-box.selected {
          background-color: #fff394; /* Same color for selected slot legend */
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }
        .reschedule-button,
        .cancel-button {
          padding: 10px 20px;
          background-color: #051B40;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .reschedule-button:hover,
        .cancel-button:hover {
          background-color: #3b5998;
        }
        .cancel-button {
          background-color: #D32F2F;
        }
        .cancel-button:hover {
          background-color: #B71C1C;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .modal-content h3 {
          margin-bottom: 20px;
        }
        .modal-content button {
          margin: 5px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .modal-content button:first-of-type {
          background-color: #051B40;
          color: #fff;
        }
        .modal-content button:first-of-type:hover {
          background-color: #3b5998;
        }
        .modal-content button:last-of-type {
          background-color: #D32F2F;
          color: #fff;
        }
        .modal-content button:last-of-type:hover {
          background-color: #B71C1C;
        }
      `}</style>
    </div>
  );
};

export default TimeSlots;
