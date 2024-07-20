import React, { useState } from "react";

const RegistrationForm = () => {
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
    referenceContact: "",
    shiftTimings: "", // Example: shift timings specific to receptionists
    responsibilities: "", // Example: responsibilities specific to receptionists
  });

  const [formStep, setFormStep] = useState(1); // Tracks the current form step
  const [receptionists, setReceptionists] = useState([]);
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
      const updatedReceptionists = receptionists.map((receptionist, index) =>
        index === editIndex ? formData : receptionist
      );
      setReceptionists(updatedReceptionists);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setReceptionists([...receptionists, formData]);
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
      referenceContact: "",
      shiftTimings: "",
      responsibilities: "",
    });
    setFormStep(1);
  };

  const nextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const editReceptionist = (index) => {
    setFormData(receptionists[index]);
    setIsEditing(true);
    setEditIndex(index);
    setFormStep(1);
  };

  const deleteReceptionist = (index) => {
    const updatedReceptionists = receptionists.filter((_, i) => i !== index);
    setReceptionists(updatedReceptionists);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <>
            {/* Personal Information */}
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            {/* Add more fields specific to receptionists */}
            <div className="mb-4">
              <label className="block text-gray-700">Shift Timings</label>
              <input
                type="text"
                name="shiftTimings"
                value={formData.shiftTimings}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* File Uploads */}
            <div className="mb-4">
              <label className="block text-gray-700">Photograph</label>
              <input
                type="file"
                name="photograph"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            {/* Add more file upload fields if needed */}
          </>
        );
      case 3:
        return (
          <>
            {/* Emergency Contact */}
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            {/* Add more emergency contact fields if needed */}
          </>
        );
      case 4:
        return (
          <>
            {/* Reference */}
            <div className="mb-4">
              <label className="block text-gray-700">Reference Name</label>
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            {/* Add more reference fields if needed */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">{isEditing ? "Update Receptionist" : "Receptionist Registration"}</h2>
      <form onSubmit={handleSubmit}>
        {renderFormStep()}
        <div className="flex justify-between mt-6">
          {formStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Previous
            </button>
          )}
          {formStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-[#28108A] text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#28108A] text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Registered Receptionists</h2>
        <ul className="list-disc pl-6">
          {receptionists.map((receptionist, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <span>{receptionist.fullName} - {receptionist.email}</span>
                <div>
                  <button
                    onClick={() => editReceptionist(index)}
                    className="bg-[#28108A] text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteReceptionist(index)}
                    className="bg-[#28108A] text-white px-4 py-2 rounded-md hover:bg-red-600 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;
