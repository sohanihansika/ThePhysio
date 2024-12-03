import React, { useEffect, useState } from 'react';
import MembershipService from '../../service/ManagerService';

const MembershipAttendance = () => {
  const [memberships, setMemberships] = useState([]);
  const [attendance, setAttendance] = useState({});
  

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const tokenValue = localStorage.getItem('token');
        const allMemberships = await MembershipService.getAllMemberships(tokenValue);

        if (Array.isArray(allMemberships)) {
          setMemberships(allMemberships);

          // Initialize attendance state from fetched memberships
          const initialAttendance = {};
          allMemberships.forEach((membership) => {
            initialAttendance[membership.id] = membership.timeSlots
              ? membership.timeSlots.split(', ') // Convert to array
              : [];
          });
          setAttendance(initialAttendance);
        } else {
          console.error('Expected an array of memberships, but received:', allMemberships);
        }
      } catch (error) {
        console.error('Error fetching memberships:', error);
      }
    };
    fetchMemberships();
  }, []);

  const handleAttendanceChange = async (membershipId, timeSlotIndex) => {
    try {
      const tokenValue = localStorage.getItem('token');

      // Toggle attendance state locally
      setAttendance((prevState) => {
        const updatedMembershipAttendance = [...prevState[membershipId]];
        updatedMembershipAttendance[timeSlotIndex] =
          updatedMembershipAttendance[timeSlotIndex] === 'T' ? 'F' : 'T';
        return { ...prevState, [membershipId]: updatedMembershipAttendance };
      });

      // Prepare updated attendance string for the backend
      const updatedAttendance = attendance[membershipId]
        .map((slot, index) =>
          index === timeSlotIndex ? (slot === 'T' ? 'F' : 'T') : slot
        )
        .join(', ');

      // Call the backend API to persist the update
      await MembershipService.updateAttendance(membershipId, updatedAttendance, tokenValue);
      console.log('Attendance updated successfully');
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  if (!Array.isArray(memberships)) {
    return <div>Loading memberships...</div>;
  }

  return (
    <div className="membership-container" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      {memberships.length === 0 ? (
        <div>No memberships available</div>
      ) : (
        memberships.map((membership) => {
          const timeSlots = attendance[membership.id] || [];

          return (
            <div
              key={membership.id}
              className="membership-card"
              style={{
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#ffffff',
              }}
            >
              <div className="membership-info" style={{ marginBottom: '10px' }}>
                <h3 style={{ color: '#6c757d' }}>{membership.userId}</h3>
                <p style={{ fontWeight: 'bold', color: '#007bff' }}>{membership.type}</p>
              </div>

              <div className="time-slots" style={{ marginTop: '15px' }}>
                {timeSlots.length > 0 ? (
                  timeSlots.map((timeSlot, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                      <label style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        <input
                          type="checkbox"
                          checked={timeSlot === 'T'}
                          onChange={() => handleAttendanceChange(membership.id, index)}
                          style={{ marginRight: '10px' }}
                        />
                        {`Week ${Math.floor(index / 7) + 1}, Slot ${index % 7 + 1}`} {/* Example format */}
                      </label>
                    </div>
                  ))
                ) : (
                  <div>No time slots available</div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MembershipAttendance;
