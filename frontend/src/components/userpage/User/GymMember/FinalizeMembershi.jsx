import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import ManagerService from '../../../service/ManagerService';

const FinalizeMembership = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('Id');
  const type = searchParams.get('Type');
  const [daysPerWeek, setdaysPerWeek] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});
  const [error, setError] = useState('');

  const [availableTimeSlots] = useState([
    '8:00 AM - 9:00 AM', '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM'
  ]);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (type) {
      setdaysPerWeek(type);
    }
  }, [type]);

  const handleDaySelection = (day) => {
    if (selectedDays.length < daysPerWeek || selectedDays.includes(day)) {
      setSelectedDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    } else {
      alert(`You can only select ${daysPerWeek} days per week.`);
    }
  };

  const handleTimeSlotSelection = (day, timeSlot) => {
    setSelectedTimeSlots((prev) => ({
      ...prev,
      [day]: timeSlot
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const invalidDays = selectedDays.filter(day => !selectedTimeSlots[day]);
    if (invalidDays.length > 0) {
      setError(`Please select a time slot for the following days: ${invalidDays.join(', ')}`);
      return;
    }

    const token = localStorage.getItem('token');

    try {
      const memberships = await ManagerService.getAllMemberships(token);
      const existingTimeSlots = memberships.map(membership => membership.timeSlots);

      const slotCounts = {};
      existingTimeSlots.forEach(timeslotString => {
        const slots = timeslotString.split(', ').map(slot => slot.trim());
        slots.forEach(slot => {
          slotCounts[slot] = (slotCounts[slot] || 0) + 1;
        });
      });

      const selectedTimeSlotEntries = Object.entries(selectedTimeSlots).map(([day, slot]) => `${day}: ${slot}`);
      const conflicts = selectedTimeSlotEntries.filter(slot => (slotCounts[slot] || 0) >= 10);

      if (conflicts.length > 0) {
        setError(`The following time slots are fully booked: ${conflicts.join(', ')}`);
        return;
      }

      const formData = {
        userId,
        type: parseInt(type, 10),
        daysPerWeek: parseInt(daysPerWeek, 10),
        timeSlots: selectedTimeSlotEntries.join(', '),
        price: 100,
      };

      console.log('Membership data submitted:', formData);

      const response = await ManagerService.addMembership(formData, token);
      console.log('Membership added successfully:', response);
      alert('Membership added successfully!');

      navigate(`/membership?Id=${userId}`); 
            } catch (error) {
      setError('There was an error submitting the membership.');
      console.error('Error adding membership:', error.response || error.message);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Finalize Membership</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        {/* Membership Type */}
        <div>
          <label className="block mb-2 font-bold">Membership Type</label>
          <input
            type="text"
            value={type || 'N/A'}
            disabled
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Number of Days per Week */}
        <div>
          <label htmlFor="daysPerWeek" className="block mb-2 font-bold">
            Number of Days per Week
          </label>
          <input
            id="daysPerWeek"
            type="number"
            min="1"
            max="7"
            value={daysPerWeek}
            onChange={(e) => setdaysPerWeek(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Days of the Week */}
        <div>
          <h2 className="font-bold mb-2">Select Days</h2>
          {daysOfWeek.map((day) => (
            <div key={day} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                id={`day-${day}`}
                checked={selectedDays.includes(day)}
                onChange={() => handleDaySelection(day)}
                disabled={selectedDays.length >= daysPerWeek && !selectedDays.includes(day)}
              />
              <label htmlFor={`day-${day}`}>{day}</label>
            </div>
          ))}
        </div>

        {/* Time Slot Selection */}
        <div>
          <h2 className="font-bold mb-2">Select Time Slot per Day</h2>
          {selectedDays.map((day) => (
            <div key={day}>
              <h3 className="font-semibold">{day}</h3>
              <select
                onChange={(e) => handleTimeSlotSelection(day, e.target.value)}
                className="w-full px-4 py-2 border rounded mb-4"
                required
              >
                <option value="">Select Time Slot</option>
                {availableTimeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded"
        >
          Submit
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default FinalizeMembership;
