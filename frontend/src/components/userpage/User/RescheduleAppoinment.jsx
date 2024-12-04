import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserService from '../../service/UserService'; // Replace with the correct path
import BookingService from '../../service/BookingService';

export default function AppointmentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const CurrentTimeSlot = queryParams.get('Current');
  const NewTimeSlot = queryParams.get('New');
  const bookingId = queryParams.get('Id');
  const NewDate = queryParams.get('NewDate');

  const [formData, setFormData] = useState(null);
  const token = localStorage.getItem('token');

  // Fetch appointment details on component mount
  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const bookingData = await BookingService.getBookingById(bookingId, token);
        setFormData({
          ...bookingData,
          timeslot: NewTimeSlot, 
            date: NewDate,
          paymentStatus: bookingData.paymentStatus || 'Not Paid', // Ensure payment status is set
        });
      } catch (err) {
        console.error('Error fetching booking details:', err.message);
        alert('Failed to load booking details.');
      }
    };

    if (bookingId) {
      fetchBookingDetails();
    }
  }, [bookingId, NewTimeSlot, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData) {
      alert('Booking details are not loaded yet.');
      return;
    }

    // Show confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to reschedule this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reschedule',
      cancelButtonText: 'No, cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await BookingService.BookingUpdate(formData, token);

          if (res.statusCode === 200) {
            Swal.fire('Rescheduled!', 'Your appointment has been rescheduled.', 'success');
            navigate('/appointments');
          } else {
            //alert(`Error: ${res.message}`);
            navigate('/schedulelist');
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            console.error('Authorization error:', error);
            navigate('/schedule');
          } else {
            console.error('Unexpected error:', error.message);
            alert('An unexpected error occurred. Please try again later.');
          }
        }
      } else {
        navigate('/schedule'); // Redirect to schedule if they cancel
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Appointment Details</h1>
      {formData ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Current Slot:</label>
            <input
              type="text"
              value={CurrentTimeSlot}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>New Slot:</label>
            <input
              type="text"
              value={NewTimeSlot}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Date:</label>
            <input
              type="date"
              value={formData.date}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Time Slot:</label>
            <input
              type="text"
              value={formData.timeslot}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Payment Status:</label>
            <input
              type="text"
              value={formData.paymentStatus}
              readOnly
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      ) : (
        <p>Loading booking details...</p>
      )}
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
