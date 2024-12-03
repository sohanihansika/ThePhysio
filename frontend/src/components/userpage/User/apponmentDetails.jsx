import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService'; // Replace with the correct path
import BookingService from '../../service/BookingService';

export default function AppointmentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('physioId');
  const date = queryParams.get('date');
  const time_slot = queryParams.get('slot');

  const [physioDetails, setPhysioDetails] = useState(null);
  const [formData, setFormData] = useState({
    physioId:physioId,        // Now explicitly matches the database column name
    userId: '10', // Set user_id directly to 10
    date,
    timeslot:time_slot,
    paymentStatus: 'Not Paid',   // New field for payment status
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch physio details if physioId is present
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
        console.log(error);

        navigate('/appoinments'); // Redirect to login or another appropriate page
      } else {
        console.error(error.response?.data?.message || error.message);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   navigate(`/selectpayment?physioId=${physioId}&date=${date}&slot=${time_slot}`);
  // };

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
        <button type="submit" style={styles.button}>Pay</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#172b59',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#172b59',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #172b59',
    outline: 'none',
    backgroundColor: '#e9ecef',
    color: '#495057',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#172b59',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
