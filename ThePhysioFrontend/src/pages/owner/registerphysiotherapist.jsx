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
    referenceContact: ""
  });

  const [formStep, setFormStep] = useState(1); // Tracks the current form step
  const [physiotherapists, setPhysiotherapists] = useState([]);
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
      const updatedPhysiotherapists = physiotherapists.map((physio, index) =>
        index === editIndex ? formData : physio
      );
      setPhysiotherapists(updatedPhysiotherapists);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setPhysiotherapists([...physiotherapists, formData]);
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

  const editPhysiotherapist = (index) => {
    setFormData(physiotherapists[index]);
    setIsEditing(true);
    setEditIndex(index);
    setFormStep(1);
  };

  const deletePhysiotherapist = (index) => {
    const updatedPhysiotherapists = physiotherapists.filter((_, i) => i !== index);
    setPhysiotherapists(updatedPhysiotherapists);
  };
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <>
            {/* Personal Information */}
            <div>&nbsp;</div>
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
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">National ID Number</label>
              <input
                type="text"
                name="nationalID"
                value={formData.nationalID}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Working Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
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
            <div className="mb-4">
              <label className="block text-gray-700">National Identity Card (PDF)</label>
              <input
                type="file"
                name="nationalIDCard"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Degree Certificate (PDF)</label>
              <input
                type="file"
                name="degreeCertificate"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Professional License (PDF)</label>
              <input
                type="file"
                name="professionalLicense"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Experience Letters (PDF)</label>
              <input
                type="file"
                name="experienceLetters"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Certifications (PDF)</label>
              <input
                type="file"
                name="certifications"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact Relationship</label>
              <input
                type="text"
                name="emergencyContactRelationship"
                value={formData.emergencyContactRelationship}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact Phone Number</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700">Reference Contact Information</label>
              <input
                type="text"
                name="referenceContact"
                value={formData.referenceContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
        <div>&nbsp;</div>
      <h2 className="text-2xl font-semibold mb-6">{isEditing ? "Update Physiotherapist" : "Physiotherapist Registration"}</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Registered Physiotherapists</h2>
        <ul className="list-disc pl-6">
          {physiotherapists.map((physio, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <span>{physio.fullName} - {physio.email}</span>
                <div>
  <button
    onClick={() => editPhysiotherapist(index)}
    className="bg-[#28108A] text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold mr-4"
  >
    Edit
  </button>
  <button
    onClick={() => deletePhysiotherapist(index)}
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
