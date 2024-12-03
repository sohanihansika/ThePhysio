import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import jspdf-autotable
import UserService from "../../../service/UserService";
import { useLocation } from "react-router-dom";
import logo from "../../../../assets/logowithoutback .png"; // Ensure the logo path is correct


const StaffReport = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await UserService.getAllUsers(token);
        const allStaffs = response.ourUsersList || [];

        if (!Array.isArray(allStaffs)) {
          setError("Data is not in the expected format.");
          return;
        }

        // Convert startDate and endDate to Date objects for filtering
        const start = new Date(startDate);
        const end = new Date(endDate);
        const filteredUsers = response.ourUsersList.filter(user => ['PHYSIO', 'COACH', 'MANAGER', 'RECEPTIONIST'].includes(user.role));

        const filteredStaffs = filteredUsers.filter((staff) => {
          if (!staff.added_date) {
            return false;
          }

          const added_date = new Date(staff.added_date).toISOString().split("T")[0];
          const startDateString = new Date(start).toISOString().split("T")[0];
          const endDateString = new Date(end).toISOString().split("T")[0];

          return added_date >= startDateString && added_date <= endDateString;
        });

        setStaffData(filteredStaffs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffData();
  }, [startDate, endDate]);

  // Function to generate and download the PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    const logoWidth = 25;
    const logoHeight = 20;
    const title = "The Physio";
    const reportTitle = "Staff Report";

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
    const headers = ["ID", "Name","Possition", "Added Date", "Address", "Contact No", "Email"];
    const data = staffData.map((staff) => [
      staff.id,
      staff.name,
      staff.role,
      new Date(staff.added_date).toLocaleDateString(),
      staff.address,
      staff.contact_no,
      staff.email,
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

    // Footer with contact details
    const footerText = "The Physio | Contact: thephysio@gmail.com | Phone: (+94) 71 23-4567";
    doc.setFontSize(8);
    doc.text(footerText, 10, doc.internal.pageSize.height - 10);

    // Save the PDF
    doc.save("staff-report.pdf");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Staff Report</h2>
      {staffData.length === 0 ? (
        <p>No staffs found within the selected date range.</p>
      ) : (
        <div style={{ width: "100%", overflowX: "auto" }}>
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
                <th>ID</th>
                <th>Name</th>
                <th>Possition</th>
                <th>Added Date</th>
                <th>Address</th>
                <th>Contact No</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff) => (
                <tr key={staff.id}>
                  <td>{staff.id}</td>
                  <td>{staff.name}</td>
                  <td>{staff.role}</td>
                  <td>{new Date(staff.added_date).toLocaleDateString()}</td>
                  <td>{staff.address}</td>
                  <td>{staff.contact_no}</td>
                  <td>{staff.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default StaffReport;