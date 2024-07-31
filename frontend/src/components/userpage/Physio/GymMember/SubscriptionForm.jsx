import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    memberId: "",
    coachName: "",
    selectedDays: [],
    timeSlots: {},
  });

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const coaches = ["Steve", "Yasmine", "Peter"];

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDayChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData({ ...formData, selectedDays: selectedOptions });
  };

  const handleTimeChange = (day, time) => {
    setFormData({
      ...formData,
      timeSlots: {
        ...formData.timeSlots,
        [day]: time,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data if needed

    // Navigate to the payment2 page
    navigate('/payment2');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Subscription Form</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">Member ID</label>
          <input 
            type="text" 
            name="memberId" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.memberId} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">Coach Name</label>
          <select 
            name="coachName" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.coachName} 
            onChange={handleChange}
            required
          >
            <option value="">Select a Coach</option>
            {coaches.map((coach, index) => (
              <option key={index} value={coach}>{coach}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">Select Days</label>
          <select 
            multiple 
            name="selectedDays" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.selectedDays} 
            onChange={handleDayChange}
            required
          >
            {daysOfWeek.map((day, index) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>
        </div>

        {formData.selectedDays.map((day, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 mb-2 font-semibold">Select Time for {day}</label>
            <input 
              type="time" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={formData.timeSlots[day] || ""} 
              onChange={(e) => handleTimeChange(day, e.target.value)} 
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#051B40] text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
