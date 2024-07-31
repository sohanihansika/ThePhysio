import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [memberId, setMemberId] = useState("");
  const [coachName, setCoachName] = useState("");
  const [day1, setDay1] = useState("");
  const [timeSlot1, setTimeSlot1] = useState("");
  const [day2, setDay2] = useState("");
  const [timeSlot2, setTimeSlot2] = useState("");
  const [day3, setDay3] = useState("");
  const [timeSlot3, setTimeSlot3] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ memberId, coachName, day1, timeSlot1, day2, timeSlot2, day3, timeSlot3 });

    // Navigate to the payment2 page
    navigate("/payment2");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-300 p-8 shadow-md rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-6">Appointment Information</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Member ID</label>
        <input
          type="text"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter Member ID"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Coach Name</label>
        <select
          value={coachName}
          onChange={(e) => setCoachName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="">Select Coach</option>
          <option value="Steve">Steve</option>
          <option value="Yasmine">Yasmine</option>
          <option value="Peter">Peter</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Day 1</label>
        <select
          value={day1}
          onChange={(e) => setDay1(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          
        >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      {day1 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Time Slot for {day1}</label>
          <select
            value={timeSlot1}
            onChange={(e) => setTimeSlot1(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Time Slot</option>
            <option value="08:00 - 09:00">08:00 - 09:00</option>
            <option value="09:00 - 10:00">09:00 - 10:00</option>
            <option value="10:00 - 11:00">10:00 - 11:00</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Day 2</label>
        <select
          value={day2}
          onChange={(e) => setDay2(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          
        >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      {day2 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Time Slot for {day2}</label>
          <select
            value={timeSlot2}
            onChange={(e) => setTimeSlot2(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Time Slot</option>
            <option value="08:00 - 09:00">08:00 - 09:00</option>
            <option value="09:00 - 10:00">09:00 - 10:00</option>
            <option value="10:00 - 11:00">10:00 - 11:00</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Day 3</label>
        <select
          value={day3}
          onChange={(e) => setDay3(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          
        >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      {day3 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Time Slot for {day3}</label>
          <select
            value={timeSlot3}
            onChange={(e) => setTimeSlot3(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Time Slot</option>
            <option value="08:00 - 09:00">08:00 - 09:00</option>
            <option value="09:00 - 10:00">09:00 - 10:00</option>
            <option value="10:00 - 11:00">10:00 - 11:00</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
          </select>
        </div>
      )}

      <button type="submit" className="w-full bg-[#051B40] text-white py-2 px-4 rounded-md">
        Pay
      </button>
    </form>
  );
};

export default FormComponent;
