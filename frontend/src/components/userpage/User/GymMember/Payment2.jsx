import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvn, setCvn] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(""); // New state for payment amount

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const maskCardNumber = (cardNumber) => {
    if (cardNumber.length <= 4) return cardNumber;
    return "************" + cardNumber.slice(-4);
  };

  const handleCardNumberChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, ""); // Remove any non-digit characters
    setCardNumber(maskCardNumber(inputNumber));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Navigate to /popup1 page
    navigate('/popup1');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-300 p-8 shadow-md rounded-md ">
      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Card Type</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="visa"
              checked={cardType === "visa"}
              onChange={handleCardTypeChange}
              className="form-radio"
            />
            <img src="./src/assets/visapng.png" alt="Visa" className="h-6" />
            <span>Visa</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="mastercard"
              checked={cardType === "mastercard"}
              onChange={handleCardTypeChange}
              className="form-radio"
            />
            <img src="./src/assets/master.png" alt="MasterCard" className="h-6" />
            <span>MasterCard</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Card Number"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Expiry Month</label>
        <select
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="">Month</option>
          <option value="01">01 - January</option>
          <option value="02">02 - February</option>
          <option value="03">03 - March</option>
          <option value="04">04 - April</option>
          <option value="05">05 - May</option>
          <option value="06">06 - June</option>
          <option value="07">07 - July</option>
          <option value="08">08 - August</option>
          <option value="09">09 - September</option>
          <option value="10">10 - October</option>
          <option value="11">11 - November</option>
          <option value="12">12 - December</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Expiry Year</label>
        <select
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="">Year</option>
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">CVN</label>
        <input
          type="password"
          value={cvn}
          onChange={(e) => setCvn(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="3 digits behind the card"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Payment Amount</label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter amount"
          required
        />
      </div>

      <button type="submit" className="w-full bg-[#051B40] text-white py-2 px-4 rounded-md">
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;
