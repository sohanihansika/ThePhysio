
import React from 'react';
import Landingpage from './components/userpage/Landingpage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
// import RegistrationPage from './components/auth/RegistrationPage';
// import FooterComponent from './components/common/Footer';
import UserService from './components/service/UserService';
// import UpdateUser from './components/userspage/UpdateUser';
// import UserManagementPage from './components/userspage/UserManagementPage';
// import ProfilePage from './components/userspage/ProfilePage';
// import LandingPage from './components/userspage/LandingPage';
import Home from './components/userpage/Home';
import ProtectedRoute from './components/ProtectedRoute';
import UserDetails from './components/userpage/UserDetails';
import Sidebar from './components/common/Sidebar';
import tableart from './components/userpage/tableart';
import Tableart from './components/userpage/tableart';
import ManagerDashboard from './components/userpage/ManagerDashboard';

// function App() {
  
//   return (
//     <BrowserRouter>
//       <div className="App">
//         {UserService.isAuthenticated() && <Sidebar />}
//         {/* <Sidebar/> */}
//         {/* <Sidebar isAuthenticated={UserService.isAuthenticated()} userType={UserService.userType()} /> */}
//         <div className="content">
//           <Routes>
//             {/* Unauthorized Routes */}
//             {!UserService.isAuthenticated() && (
//               <>
//                 <Route path="/" element={<Landingpage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/register" element={<RegistrationPage/>} />
//               </>
//             )}

            

//             {/* Protected Routes */}
//             <Route element={<ProtectedRoute/>}>
//               <Route path="/login" element={<Navigate to="/"/>} />
//               <Route path="/register" element={<Navigate to="/" />} />
              
//               {!UserService.isAdmin() ? (
//                   <>
//                     <Route path="/profile" element={<Home />}/>
//                     <Route path="/update-user/:userId" element={<Navigate to="/profile"/>} />
//                   </>
//                 ) : (
//                   <>
//                     <Route path="/profile" element={<Home />}/>
//                     <Route path="/admin/user-management" element={<Navigate to="/profile"/>} />
//                     <Route path="/update-user/:userId" element={<Navigate to="/profile"/>} />
//                   </>
//                 )
//               }
//               {/* <Route path="/" element={<Navigate to="/profile"/>} />
//               <Route path="/profile" element={<Home />} />
//               <Route path="/user" element={<UserDetails />} /> */}
              
//             </Route>
            
            

        
//             {/* <Route path="/profile" element={<ProfilePage />} /> */}

//             {/* Check if user is authenticated and admin before rendering admin-only routes */}
//             {/* {UserService.adminOnly() && (
//               <>
//                 <Route path="/register" element={<RegistrationPage />} />
//                 <Route path="/admin/user-management" element={<UserManagementPage />} />
//                 <Route path="/update-user/:userId" element={<UpdateUser />} />
//               </>
//             )} */}
//             {/* {UserService.isAuthenticated() && (
//               <>
//                 <Route path="/profile" element={<Home />} />
//               </>
//             )} */}
//             <Route path="*" element={<Navigate to="/" />} />‰
//           </Routes>
//         </div>
//         {/* <FooterComponent /> */}
//       </div>
//     </BrowserRouter>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <div className="App flex">
        {UserService.isAuthenticated() && (
          <div className="w-1/4">
            <Sidebar />
          </div>
        )}
        <div className={`content ${UserService.isAuthenticated() ? 'w-3/4' : 'w-full'}`}>
          <Routes>
            {!UserService.isAuthenticated() && (
              <>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path='/tableart' element={<Tableart/>}/>
              </>
            )}

            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />

              {!UserService.isAdmin() ? (
                <>
                  <Route path="/profile" element={<Home />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                </>
              ) : (
                <>
                  <Route path="/profile" element={<Home />} />
                  <Route path="/admin/user-management" element={<Navigate to="/profile" />} />
                  <Route path="/update-user/:userId" element={<Navigate to="/profile" />} />
                </>
              )}

              {UserService.isGymManager() && (
                <>
                  <Route path="/ManagerDashboard" element={<Home/>}/>
                </>
              )}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;