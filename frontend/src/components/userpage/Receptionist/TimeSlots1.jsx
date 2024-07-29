import React from 'react';
import { useNavigate } from 'react-router-dom';

const TimeSlots = () => {
  const navigate = useNavigate();

  // Generate time slots
  const slots = [];
  const timeRanges = [
    { start: 8, end: 12 },
    { start: 12, end: 17 }
  ];

  timeRanges.forEach(({ start, end }) => {
    let isBreak = false;
    for (let hour = start; hour <= end; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 12 && minute === 0 && start === 8) {
          isBreak = true;
          break; // Skip the break period
        }
        if (!isBreak) {
          slots.push({
            time: `${hour}:${minute === 0 ? '00' : minute}`,
            key: `${hour}:${minute}`
          });
        } else if (hour === 13 && minute === 0) {
          isBreak = false;
        }
      }
    }
  });

  const handleSlotClick = () => {
    navigate('/appointment1');
  };

  return (
    <div className="container">
      <h2>Time Slots for Today</h2>
      <div className="slots">
        {slots.map(slot => (
          <div
            className="slot"
            key={slot.key}
            onClick={handleSlotClick}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') handleSlotClick(); }}
          >
            {slot.time}
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
          padding: 20px;
        }
        .slot {
          background-color: #f0f4f8;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          transition: transform 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .slot:hover {
          background-color: #172b59;
          color: #ffffff;
          transform: translateY(-5px);
        }
        h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #172b59;
        }
      `}</style>
    </div>
  );
};

export default TimeSlots;
