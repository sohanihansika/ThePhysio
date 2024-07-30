import React, { useState } from 'react';

export default function AddAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    appointmentDate: '',
    appointmentTime: '',
    physiotherapist: '',
    code: ''
  });

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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <input
            type="text"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            readOnly
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="physiotherapist">Physiotherapist</label>
          <input
            type="text"
            id="physiotherapist"
            name="physiotherapist"
            value={formData.physiotherapist}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="code">Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
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
        .input-field input {
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
