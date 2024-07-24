import React from 'react';

const timeSlots = () => {
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

  return (
    <div className="container">
      <h2>Time Slots for Today</h2>
      <div className="slots">
        {slots.map(slot => (
          <div className="slot" key={slot.key}>
            {slot.time}
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px; /* Increased width for the container */
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Adjust width as needed */
          gap: 10px;
        }
        .slot {
          background-color: #e0e0e0;
          padding: 15px; /* Increased padding for more width */
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        .slot:hover {
          background-color: #172b59;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default timeSlots;
