import React, { useState } from 'react';

export default function AddAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    appointmentTime: '',
    age: ''
  });

  const availableTimeSlots = [
    "09:00 AM - 09:30 AM",
    "09:30 AM - 10:00 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "01:00 PM - 01:30 PM",
    "01:30 PM - 02:00 PM",
    "02:30 PM - 03:00 PM",
    "03:30 PM - 04:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add logic for form submission and payment
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleFormSubmit}>
        <div className="input-field">
          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            readOnly
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <select
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a time slot</option>
            {availableTimeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <a
          href="/payments1"
          className="submitBtn"
        >
          Proceed to Payment
        </a>
      </form>

      <style jsx>{`
        .appointment-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .appointment-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 500px;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          font-size: 2em;
          color: #172b59;
          margin-bottom: 20px;
        }
        .input-field {
          margin-bottom: 15px;
          width: 100%;
        }
        .input-field label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .input-field input,
        .input-field select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submitBtn {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #172b59;
          color: white;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          text-decoration: none;
          text-align: center;
        }
        .submitBtn:hover {
          background-color: #0d1a3a;
        }
      `}</style>
    </div>
  );
}
