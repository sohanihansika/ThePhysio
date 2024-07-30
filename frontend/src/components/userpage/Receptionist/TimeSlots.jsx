import React from 'react';
import { useNavigate } from 'react-router-dom';

const TimeSlots = () => {
  const navigate = useNavigate();

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
  const redSlots = ["08:00 - 08:30", "10:00 - 10:30", "12:00 - 12:30","13:00 - 13:00"];

  const handleSlotClick = (slot) => {
    if (!redSlots.includes(slot)) {
      navigate('/payments');
    }
  };

  return (
    <div className="container">
<h2>Select Suitable Time Slots</h2>
<div className="slots">
        {slots.map(slot => (
          <div
            className={`slot ${redSlots.includes(slot) ? 'red-slot' : ''}`}
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
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #eef3f7;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
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
          background-color: #2a3b73;
          color: #ffffff;
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
      `}</style>
    </div>
  );
};

export default TimeSlots;
