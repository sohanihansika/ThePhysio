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
    resume: null,
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
  const [admins, setAdmins] = useState([]);
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
      const updatedAdmins = admins.map((admin, index) =>
        index === editIndex ? formData : admin
      );
      setAdmins(updatedAdmins);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setAdmins([...admins, formData]);
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
      resume: null,
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

  const editAdmin = (index) => {
    setFormData(admins[index]);
    setIsEditing(true);
    setEditIndex(index);
    setFormStep(1);
  };

  const deleteAdmin = (index) => {
    const updatedAdmins = admins.filter((_, i) => i !== index);
    setAdmins(updatedAdmins);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <>
            {/* Personal Information */}
            <div className="mb-2">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">National ID Number</label>
              <input
                type="text"
                name="nationalID"
                value={formData.nationalID}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Working Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
              <label className="block text-gray-700">Photograph</label>
              <input
                type="file"
                name="photograph"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Resume (PDF)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Professional License (PDF)</label>
              <input
                type="file"
                name="professionalLicense"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Experience Letters (PDF)</label>
              <input
                type="file"
                name="experienceLetters"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Certifications (PDF)</label>
              <input
                type="file"
                name="certifications"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Emergency Contact */}
            <div className="mb-2">
              <label className="block text-gray-700">Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Relationship</label>
              <input
                type="text"
                name="emergencyContactRelationship"
                value={formData.emergencyContactRelationship}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            {/* References */}
            <div className="mb-2">
              <label className="block text-gray-700">Reference Name</label>
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Contact</label>
              <input
                type="tel"
                name="referenceContact"
                value={formData.referenceContact}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
    <div className="container mx-auto mt-5 px-4">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
          <div className="mt-4">
            {formStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 mr-2 bg-gray-200 rounded-md"
              >
                Previous
              </button>
            )}
            {formStep < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
              >
                Next
              </button>
            )}
            {formStep === 4 && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                {isEditing ? "Update" : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
      {/* Admin List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Admins List</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{admin.fullName}</td>
                <td className="px-4 py-2 border">{admin.email}</td>
                <td className="px-4 py-2 border">{admin.phoneNumber}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => editAdmin(index)}
                    className="mr-2 px-2 py-1 bg-yellow-300 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAdmin(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationForm;
