import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import BookingService from '../../service/BookingService';

export default function AppointmentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  const date = queryParams.get('date');
  const time_slot = queryParams.get('slot');
  const [currentUserId, setCurrentUserId] = useState(null); // To store current user ID


  const [physioDetails, setPhysioDetails] = useState(null);
  const [formData, setFormData] = useState({
    physioId: physioId,
    userId: null, // Initially null
    date,
    timeslot: time_slot,
    paymentStatus: 'Not Paid',
  });
  
  // Update formData whenever currentUserId changes
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: currentUserId,
    }));
  }, [currentUserId]);
  
  // Fetch current user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const tokenValue = localStorage.getItem('token');
        const userProfileResponse = await UserService.getMyProfile(tokenValue);
        console.log('User profile response:', userProfileResponse);
        const userId = userProfileResponse?.ourUsers?.id || 'N/A';
        setCurrentUserId(userId);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setCurrentUserId('N/A');
      }
    };
    fetchUserProfile();
  }, []); // Empty dependency array to fetch profile only once on component mount
  
 

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPhysioDetails = async () => {
      try {
        const response = await UserService.getUserById(physioId, token);
        const user = response.ourUsers;
        setPhysioDetails({
          email: user.email,
          name: user.name,
        });
        setFormData((prevData) => ({
          ...prevData,
          physioName: user.name,
          physioEmail: user.email,
        }));
      } catch (err) {
        console.error('Failed to fetch physio details:', err);
      }
    };

    if (physioId) {
      fetchPhysioDetails();
    }
  }, [physioId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await BookingService.saveBooking(formData, token);
      if (res.statusCode === 200) {
        navigate(`/selectpayment?physioId=${physioId}&date=${date}&slot=${time_slot}`);
      } else {
        navigate(`/selectpayment?physioId=${physioId}&date=${date}&slot=${time_slot}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        navigate('/appoinments');
      } else {
        console.error(error.response?.data?.message || error.message);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Appointment Details</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {physioDetails && (
          <>
            <div style={styles.formGroup}>
              <label style={styles.label}>Physio Name:</label>
              <input
                type="text"
                value={physioDetails.name}
                readOnly
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Physio Email:</label>
              <input
                type="email"
                value={physioDetails.email}
                readOnly
                style={styles.input}
              />
            </div>
          </>
        )}
        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={date}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Time Slot:</label>
          <input
            type="text"
            value={time_slot}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Amount:</label>
          <input
            type="text"
            value="Rs 2000.00"
            readOnly
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Proceed to Payment</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '30px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
  },
  title: {
    textAlign: 'center',
    color: '#34495e',
    marginBottom: '20px',
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#2c3e50',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #dcdde1',
    outline: 'none',
    backgroundColor: '#f9f9f9',
    color: '#34495e',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 15px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#172b59',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: '600',
  },
  buttonHover: {
    backgroundColor: '#1d6a96',
  },
};