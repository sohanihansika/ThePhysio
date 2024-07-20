import React, { useState } from "react";

const GymCoachRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationalID: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
    photograph: null,
    degreeCertificate: null,
    professionalLicense: null,
    experienceLetters: null,
    certifications: null,
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    referenceName: "",
    referenceContact: ""
  });

  const [formStep, setFormStep] = useState(1); // Tracks the current form step
  const [gymCoaches, setGymCoaches] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedGymCoaches = gymCoaches.map((coach, index) =>
        index === editIndex ? formData : coach
      );
      setGymCoaches(updatedGymCoaches);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setGymCoaches([...gymCoaches, formData]);
    }
    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      nationalID: "",
      nationality: "",
      email: "",
      phoneNumber: "",
      homeAddress: "",
      photograph: null,
      degreeCertificate: null,
      professionalLicense: null,
      experienceLetters: null,
      certifications: null,
      emergencyContactName: "",
      emergencyContactRelationship: "",
      emergencyContactPhone: "",
      referenceName: "",
      referenceContact: ""
    });
    setFormStep(1);
  };

  const nextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const editGymCoach = (index) => {
    setFormData(gymCoaches[index]);
    setIsEditing(true);
    setEditIndex(index);
    setFormStep(1);
  };

  const deleteGymCoach = (index) => {
    const updatedGymCoaches = gymCoaches.filter((_, i) => i !== index);
    setGymCoaches(updatedGymCoaches);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <>
            {/* Personal Information */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">National ID Number</label>
              <input
                type="text"
                name="nationalID"
                value={formData.nationalID}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Working Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* File Uploads */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Photograph</label>
              <input
                type="file"
                name="photograph"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">National Identity Card (PDF)</label>
              <input
                type="file"
                name="nationalIDCard"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Degree Certificate (PDF)</label>
              <input
                type="file"
                name="degreeCertificate"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Professional License (PDF)</label>
              <input
                type="file"
                name="professionalLicense"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Experience Letters (PDF)</label>
              <input
                type="file"
                name="experienceLetters"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Certifications (PDF)</label>
              <input
                type="file"
                name="certifications"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Emergency Contact Information */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Emergency Contact Relationship</label>
              <input
                type="text"
                name="emergencyContactRelationship"
                value={formData.emergencyContactRelationship}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Emergency Contact Phone Number</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            {/* Reference Information */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Reference Name</label>
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm">Reference Contact Number</label>
              <input
                type="tel"
                name="referenceContact"
                value={formData.referenceContact}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Gym Coach Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {renderFormStep()}
        <div className="flex justify-between mt-4">
          {formStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-2 py-1 bg-gray-300 text-sm text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            >
              Previous
            </button>
          )}
          {formStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-2 py-1 bg-blue-500 text-sm text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-2 py-1 bg-green-500 text-sm text-white rounded hover:bg-green-600 focus:outline-none"
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          )}
        </div>
      </form>
      {/* Registered Gym Coaches */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Registered Gym Coaches</h3>
        {gymCoaches.length === 0 ? (
          <p className="text-gray-700">No gym coaches registered yet.</p>
        ) : (
          <ul>
            {gymCoaches.map((coach, index) => (
              <li key={index} className="mb-4 p-2 border rounded">
                <p>
                  <strong>Name:</strong> {coach.fullName}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {coach.dateOfBirth}
                </p>
                <p>
                  <strong>Gender:</strong> {coach.gender}
                </p>
                <p>
                  <strong>Email:</strong> {coach.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {coach.phoneNumber}
                </p>
                <div className="flex mt-2">
                  <button
                    onClick={() => editGymCoach(index)}
                    className="px-2 py-1 bg-yellow-500 text-sm text-white rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteGymCoach(index)}
                    className="px-2 py-1 bg-red-500 text-sm text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GymCoachRegistrationForm;
