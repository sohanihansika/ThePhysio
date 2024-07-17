import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPhysio() {
  let navigate = useNavigate();

  const [physio, setPhysio] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  });

  const { 
    firstName, lastName, email, password, specialty, yearsOfExperience, 
    contactNumber, addressLine1, addressLine2, city, 
  } = physio;
  const onInputChange = (e) => {
    setPhysio({ ...physio, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/physios", physio);
      navigate("/physiohome");
    } catch (error) {
      console.error("Error creating employee:", error);
      // Handle error gracefully
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Physiotheraphists</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
Password              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="specialty" className="form-label">
                Specialty
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter specialty"
                name="specialty"
                value={specialty}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yearsOfExperience" className="form-label">
                Years of Experience
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter years of experience"
                name="yearsOfExperience"
                value={yearsOfExperience}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter contact number"
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLine1" className="form-label">
                Address Line 1
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address line 1"
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLine2" className="form-label">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address line 2"
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/physiohome">
              Cancel
            </Link>
          </form>
        </div>

      </div>
    </div>
  );
}
