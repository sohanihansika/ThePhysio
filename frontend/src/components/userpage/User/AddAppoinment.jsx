import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAppointment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handlePayment = () => {
    navigate("/popup");
  };

  return (
    <div className="payment-container">
      <div className="spacer"></div> {/* Spacer element */}
      <h2>Payment Details</h2>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Enter your card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            placeholder="Enter your CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            placeholder="Enter cardholder name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        </div>
        <button type="button" className="confirm-button" onClick={handlePayment}>
          Confirm Payment
        </button>
      </form>
      <style jsx>{`
        .payment-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e5e5;
        }
        .spacer {
          height: 50px; /* Adjust this value to move the form lower */
        }
        .payment-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 24px;
        }
        .payment-form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: bold;
          color: #172b59;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s;
        }
        input:focus {
          border-color: #172b59;
          outline: none;
        }
        .confirm-button {
          padding: 15px;
          font-size: 18px;
          color: #fff;
          background-color: #172b59;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .confirm-button:hover {
          background-color: #0e1c3c;
        }
      `}</style>
    </div>
  );
};

export default AddAppointment;
