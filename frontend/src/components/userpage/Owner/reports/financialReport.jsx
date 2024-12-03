import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import jspdf-autotable
import BookingService from "../../../service/BookingService";
import UserService from "../../../service/UserService"; // Import UserService
import { useLocation } from "react-router-dom";
import logo from "../../../../assets/logowithoutback.png"; // Ensure the logo path is correct

const BookingReport = () => {
  const [bookingData, setBookingData] = useState([]);
  const [physioMap, setPhysioMap] = useState({}); // Map of physioId to physioName
  const [userMap, setUserMap] = useState({}); // Map of userId to userName
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  const FEE = 2000; // Default fee for bookings

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch booking data
        const response = await BookingService.getAllBookings(token);
        const allBookings = response || [];
        // console.log(allBookings.physioId);

        if (!Array.isArray(allBookings)) {
          setError("Data is not in the expected format.");
          return;
        }

        const start = new Date(startDate).setHours(0, 0, 0, 0);
        const end = new Date(endDate).setHours(23, 59, 59, 999);

        const filteredBookings = allBookings.filter((booking) => {
          if (!booking.date) return false;
          const bookingDate = new Date(booking.date).getTime();
          console.log('hgggggggh',booking.physioId);
          return bookingDate >= start && bookingDate <= end;
        });

        setBookingData(filteredBookings);

        // Fetch all physio and user names
        const physioIds = [...new Set(filteredBookings.map((b) => b.physioId))];
        const userIds = [...new Set(filteredBookings.map((b) => b.userId))];
      console.log('physioIds',physioIds);
        
        // Map physioId to physioName
        const physioMap = {};
        for (const physioId of physioIds) {
          const physio = await UserService.getUserById(physioId, token);
          console.log("1111111111111", physio);

          // Safely access the name within physio.ourUsers
          physioMap[physioId] = physio.ourUsers?.name || "Unknown Physio";
        }
        setPhysioMap(physioMap);


        const userMap = {};
        for (const userId of userIds) {
          try {
            const user = await UserService.getUserById(userId, token);
            console.log("Fetched User:", user); // Log the user response
            userMap[userId] = user.ourUsers?.name || "Unknown User";
          } catch (error) {
            console.error(`Error fetching user with ID ${userId}:`, error); // Log errors
            userMap[userId] = "Unknown User";
          }
        }
        console.log("Final User Map:", userMap); // Log the final map
        setUserMap(userMap);
        

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingData();
  }, [startDate, endDate]);

  const generatePDF = () => {
    const doc = new jsPDF();
    const logoWidth = 25;
    const logoHeight = 20;
    const title = "The Physio";
    const reportTitle = "Booking Report";

    // Add the logo in the top right corner
    doc.addImage(logo, "jpg", 160, 10, logoWidth, logoHeight);

    // Title for the report and center-align
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(title, 20, 20);
    doc.setFontSize(16);
    doc.text(reportTitle, 20, 30);

    // Add date range
    doc.setFontSize(12);
    doc.text(`From Date: ${startDate}`, 20, 40);
    doc.text(`To Date: ${endDate}`, 20, 50);

    // Table headers
    const headers = ["Physio Name", "Patient Name", "Date", "Time Slot", "Fee"];
    const data = bookingData.map((booking) => [
      physioMap[booking.physioId] || "Unknown Physio",
      userMap[booking.userId] || "Unknown User",
      new Date(booking.date).toLocaleDateString(),
      booking.timeslot,
      `Rs. ${FEE}`,
    ]);

    // Add table with auto table plugin
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 60, // Starting Y position for the table
      theme: "striped",
      headStyles: {
        fillColor: [0, 0, 139], // Dark blue background for the header
        fontSize: 12,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      bodyStyles: { fontSize: 10 },
      tableWidth: "auto", // Make the table width adjust automatically to the content
      styles: { cellPadding: 3, fontSize: 10 },
      margin: { horizontal: 10 },
    });

    // Add total count and fee at the end
    const totalCount = bookingData.length;
    const totalFee = totalCount * FEE;
    const summaryY = doc.lastAutoTable.finalY + 10;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Total Bookings: ${totalCount}`, 20, summaryY);
    doc.text(`Total Fee: Rs. ${totalFee}`, 20, summaryY + 10);

    // Footer with contact details
    const footerText =
      "The Physio | Contact: thephysio@gmail.com | Phone: (+94) 71 23-4567";
    doc.setFontSize(8);
    doc.text(footerText, 10, doc.internal.pageSize.height - 10);

    // Save the PDF
    doc.save("booking-report.pdf");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Booking Report</h2>

      {bookingData.length === 0 ? (
        <p>No booking records found within the selected date range.</p>
      ) : (
        <div>
          {/* Table 1 - Booking details */}
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              marginBottom: "40px",
            }}
          >
            <table
              style={{
                width: "80%",
                margin: "0 auto",
                borderCollapse: "collapse",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <thead style={{ backgroundColor: "#000099", color: "white" }}>
                <tr>
                  <th>Physio Name</th>
                  <th>Patient Name</th>
                  <th>Date</th>
                  <th>Time Slot</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking) => (
                  <tr key={booking.id}>
                    <td>{physioMap[booking.physioId] || "Unknown Physio"}</td>
                    <td>{userMap[booking.userId] || "Unknown User"}</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>{booking.timeslot}</td>
                    <td>Rs. {FEE}</td>
                  </tr>
                ))}
                {/* Summary Row */}
                <tr style={{ backgroundColor: "#ffffff",fontWeight: "bold" }}>
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    Total Bookings:
                  </td>
                  <td>{bookingData.length}</td>
                  
                </tr>
                <tr style={{ backgroundColor: "#ffffff",fontWeight: "bold" }}>
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    Total Fee:
                  </td>
                  
                  <td>Rs. {bookingData.length * FEE}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              onClick={generatePDF}
              style={{
                backgroundColor: "#000099",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingReport;
