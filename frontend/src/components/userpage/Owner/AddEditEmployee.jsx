import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
//import { NULL } from 'sass';

function AddEditEmployee() {
    const navigate = useNavigate();
    const { userId } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        //password: '',
        contactNumber: '',
        address:'',
        role:''
    });

    useEffect(() => {
        fetchUserDataById(userId); // Pass the userId to fetchUserDataById
      }, [userId]); //wheen ever there is a chane in userId, run this
    
      const fetchUserDataById = async (userId) => {
        try {
          const token = localStorage.getItem('token');
          const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
          const { name, email, role, city } = response.ourUsers;
          setUserData({ name, email, role, city });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    // const [showPassword, setShowPassword] = useState(false);
    // const [error, setError] = useState('');
    // const [contactError, setContactError] = useState('');
    // const roles = ['PHYSIO','RESIPTIONIST','COUCH','MANAGER'];

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });

    //     if (name === 'contactNumber') {
    //         const phonePattern = /^\d{10}$/;
    //         setContactError(!phonePattern.test(value) ? 'Invalid contact number' : '');
    //     }
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value
        }));
      };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const userData = await UserService.empRegister(formData,token); // Replace 'your-token-here' with the actual token
//             console.log(userData);

//             if (userData.token) {
//                 alert('User registered successfully');
//                 window.location.href = '/login';
//             } else {
//                 setError(userData.message);
//             }
//         } catch (error) {
//             setError(error.message);
//             setTimeout(() => {
//                 setError('');
//             }, 5000);
//         }
//     }

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res)
        // Redirect to profile page or display a success message
        navigate("/admin/user-management")
      }

    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error)
    }
  };

    

    return (
    //     <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 sm:px-4">
    //         <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
    //             <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg min-w-full">
    //                 <div className="flex justify-end">
    //                     <button className="text-gray-500 hover:text-gray-800" onClick={() => navigate('/')}>
    //                         <FaArrowLeft />
    //                     </button>
    //                 </div>
    //                 <div className="text-center">
    //                     <img src="./src/assets/logowithoutback.png" width={150} className="mx-auto" />
    //                     <div className="mt-5 space-y-2">
    //                         <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
    //                         <p className="">Already have an account?<a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500"> Login</a></p>
    //                     </div>
    //                 </div>
    //                 <form onSubmit={handleSubmit} className="mt-8 space-y-5">
    //                     <div>
    //                         <label className="font-medium">Name</label>
    //                         <input
    //                             type="text"
    //                             name="name"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         />
    //                     </div>
    //                     <div>
    //                         <label className="font-medium">Email</label>
    //                         <input
    //                             type="email"
    //                             name="email"
    //                             value={formData.email}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         />
    //                     </div>
    //                     <div>
    //                         <label className="font-medium">Contact Number</label>
    //                         <input
    //                             type="text"
    //                             name="contactNumber"
    //                             value={formData.contactNumber}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         />
    //                         {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
    //                     </div>
    //                     <div>
    //                         <label className="font-medium">Address</label>
    //                         <input
    //                             type="text"
    //                             name="address"
    //                             value={formData.address}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         />
    //                         {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
    //                     </div>
    //                     <div>
    //                         <label className="font-medium">Role</label>
    //                         <select
    //                             name="role"
    //                             value={formData.role}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         >
    //                             <option value="">Select Role</option>
    //                             {roles.map(role => (
    //                                 <option key={role} value={role}>{role}</option>
    //                             ))}
    //                         </select>
    //                     </div>
    //                     <div>
    //                         <label className="font-medium">Password</label>
    //                         <input
    //                             type={showPassword ? "text" : "password"}
    //                             name="password"
    //                             value={formData.password}
    //                             onChange={handleChange}
    //                             required
    //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
    //                         />
    //                         <button type="button" onClick={() => setShowPassword(!showPassword)}>
    //                             {showPassword ? 'Hide' : 'Show'} Password
    //                         </button>
    //                     </div>

    //                     <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" type='submit'>
    //                         Sign Up
    //                     </button>
    //                     {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    //                 </form>
    //             </div>
    //         </div>
    //     </main>
    // );

    <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">
                Update User Details
            </h3>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="form-group">
                        <label className="font-medium">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={userData.name} 
                            onChange={handleInputChange} 
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="form-group">
                        <label className="font-medium">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={userData.email} 
                            onChange={handleInputChange} 
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="form-group">
                        <label className="font-medium">Role:</label>
                        <select 
                            name="role"
                            value={userData.role}
                            onChange={handleInputChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            required
                            defaultValue={""}
                        >
                            <option value="" disabled hidden>Select a role</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="RECEPTIONIST">RECEPTIONIST</option>
                        </select>
                    </div>
                    <button 
                        type="submit"
                        className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150">
                            Update
                    </button>
                </form>
            </div>
        </div>
    </main>
      
    );
}

export default AddEditEmployee;
