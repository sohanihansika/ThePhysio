import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import { FaArrowLeft } from "react-icons/fa";

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const userData = await UserService.login(email, password);
//             console.log(Response);
//             if (userData.token) {
//                 localStorage.setItem('token', userData.token);
//                 localStorage.setItem('role', userData.role);
//                 // navigate('/profile');
//                 window.location.href = '/profile';
//             } else {
//                 setError(userData.message);
//             }
//         } catch (error) {
//             console.log(error);
//             console.log(Response);
//             setError(error.message);
//             setTimeout(() => {
//                 setError('');
//             }, 5000);
//         }
//     }

//     return (
//         <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 sm:px-4">
//             <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
//                 <div className="bg-white shadow p-4 py-6  sm:p-6 sm:rounded-lg">
//                     <div className="flex justify-end">
//                         <button className="text-gray-500 hover:text-gray-800" onClick={() => navigate('/')}>
//                             <FaArrowLeft />
//                         </button>
//                     </div>
//                     <div className="text-center">
//                         <img src="./src/assets/driveazeheader.svg" width={150} className="mx-auto" />
//                         <div className="mt-5 space-y-2">
//                             <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
//                             <p className="">Don't have an account? <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
//                         </div>
//                     </div>
//                     <form
//                          onSubmit={handleSubmit} className="mt-8 space-y-5"
//                     >
//                         <div>
//                             <label className="font-medium">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                             />
//                         </div>
//                         <div>
//                             <label className="font-medium">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                             />
//                         </div>
//                         <button
//                             className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
//                         >
//                             Sign in
//                         </button>
//                         {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//                     </form>
//                 </div>
//                 <div className="text-center">
//                     <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
//                 </div>
//             </div>
//         </main>
//     );
// }



function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await UserService.login(email, password);
            console.log(Response);
            if (userData.token) {
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.role);
                // navigate('/profile');
                location.href = '/dashboard';
            } else {
                setError(userData.message);
            }
        } catch (error) {
            console.log(error);
            console.log(Response);
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                <img src="./src/assets/logowithoutback.png" width={150} className="mx-auto" />
                <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                    </div>
                </div>
                <form
                         onSubmit={handleSubmit} className="mt-8 space-y-5"
                >
                    
                    <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                    </div>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                </form>
            </div>
            
        </main>
        
    )
}

export default LoginPage;
