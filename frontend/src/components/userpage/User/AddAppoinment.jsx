import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import masterCardIcon from '../../../assets/master.png';
import visaCardIcon from '../../../assets/visapng.png';

const AddAppointment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardType, setCardType] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardholderName || !cardType) {
      alert('Please fill in all the fields before proceeding.');
      return;
    }
    navigate("/popup");
  };

  const detectCardType = (number) => {
    const firstDigit = number.charAt(0);
    if (firstDigit === '4') {
      setCardType('visa');
    } else if (firstDigit === '5') {
      setCardType('master');
    } else {
      setCardType('');
    }
  };

  const handleCardNumberChange = (e) => {
    const number = e.target.value;
    setCardNumber(number);
    detectCardType(number);
  };

  const handleCardTypeSelect = (type) => {
    setCardType(type);
  };

  return (
    <div className="payment-container">
      <div className="spacer"></div>
      <h2>Payment Details</h2>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <div className="card-input-wrapper">
            <input
              type="text"
              id="cardNumber"
              placeholder="Enter your card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
            {cardType && (
              <img
                src={cardType === 'visa' ? visaCardIcon : masterCardIcon}
                alt={`${cardType} card`}
                className="card-icon"
              />
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Card Type</label>
          <div className="card-type-selector">
            <img
              src={visaCardIcon}
              alt="Visa"
              className={`card-type-icon ${cardType === 'visa' ? 'selected' : ''}`}
              onClick={() => handleCardTypeSelect('visa')}
            />
            <img
              src={masterCardIcon}
              alt="MasterCard"
              className={`card-type-icon ${cardType === 'master' ? 'selected' : ''}`}
              onClick={() => handleCardTypeSelect('master')}
            />
          </div>
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
          height: 50px;
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
        .card-input-wrapper {
          display: flex;
          align-items: center;
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
        .card-icon {
          width: 40px;
          margin-left: 10px;
        }
        .card-type-selector {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .card-type-icon {
          width: 50px;
          cursor: pointer;
          border: 2px solid transparent;
          border-radius: 5px;
          transition: border-color 0.3s;
        }
        .card-type-icon.selected {
          border-color: #172b59;
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
