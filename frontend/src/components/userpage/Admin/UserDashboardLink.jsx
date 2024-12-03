import React, { useState, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAccessibleIcon,FaUser,FaReceipt , FaCog, FaSignOutAlt, FaHome, FaChartLine, FaUserTie, FaUsers, FaRegFrown, FaBullhorn, FaBusinessTime, FaCarAlt, FaCalendarCheck, FaMoneyCheckAlt, FaRegClipboard, FaWarehouse, FaUserPlus, FaClipboardList, FaClipboardCheck, FaCar, FaMoneyCheck, FaWrench, FaCalendarAlt,FaUserMd } from "react-icons/fa";
import UserService from '../../service/UserService';


export default () => {

    const [patientCount, setPatientCount] = useState(0);
    const [physioCount, setPhysioCount] = useState(0);
    const [recepCount, setRecepCount] = useState(0);
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    useEffect(() => {
        // Fetch Users Count
        const fetchPatientCount = async () => {
            try {
                const users = await UserService.getAllPatients(token);
                // Assuming `ourUsersList` contains the array of users
                setPatientCount(users?.ourUsersList?.length || 0);
            } catch (err) {
                console.error("Error fetching users", err);
                setPatientCount(0); // Handle gracefully by setting the count to 0
            }
        };
        

        // Fetch Reservations Count
        const fetchPhysioCount = async () => {
            try {
                const response = await UserService.getAllPhysios(token);
                console.log("Physio", response);
                // Extracting the length of the physio list
                setPhysioCount(response?.ourUsersList?.length || 0);
                console.log("pcount", response?.ourUsersList?.length || 0);
            } catch (err) {
                console.error("Error fetching physios", err);
                setPhysioCount(0); // Set default count in case of an error
            }
        };
        

        // Fetch Reports Count
        const fetchRecepCount = async () => {
            try {
                const reports = await UserService.getAllCoaches(token);
                // Correcting the variable name to match the API response
                setRecepCount(reports?.ourUsersList?.length || 0);
            } catch (err) {
                console.error("Error fetching reports", err);
                setRecepCount(0); // Set default count in case of an error
            }
        };
        

        fetchPatientCount();
        fetchPhysioCount();
        fetchRecepCount();
    }, [token]);

    const integrations = [
        {
            title: "Patients",
            desc: patientCount,
            path:"/useraccounts",
            icon: <FaUsers />
            
        }, {
            title: "Physiotherapists",
            desc: physioCount,
            path:"/useraccounts",
            icon: <FaUserMd />
  
      
        }, 
        {
          title: "Receiptionists",
          desc: recepCount,
          path:"/staffaccounts",
          icon: <FaUserTie />
  
          
      },
    //   {
    //     title: "Gym Managers",
    //     path:"/staffaccounts",
    //     icon: <FaUserTie/>

        
    // },
    // {
    //     title: "Gym Coaches",
    //     path:"/staffaccounts",
    //     icon: <FaUser />

        
    // },
        
      ]
    

return(
    <section className="py-2">
      <div className="max-w-screen-xl mx-auto px-12 md:px-12 ">

      {/* <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Patients</button>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Physiotherapists</button>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Receiptionists</button>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Gym Managers</button>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Gym Coaches</button> */}

<ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {
                integrations.map((item, idx) => (
                    <li key={idx} className="border rounded-3xl bg-blue-200">
                        <div className="flex items-start justify-center p-4">
                            <div className="space-y-2">
                                <a href={item.path}>
                                <div className="flex items-center justify-center ">
                                <span className="mr-2 text-6xl">{item.icon}</span>
                                   <h4 className="text-gray-800 font-semibold text-xl">{item.title}</h4>
                                   <h4 className="text-gray-800 font-semibold text-xl">{item.desc}</h4>

                                </div>


                                    {/* <h4 className="text-gray-800 font-semibold">{item.title}</h4> */}
                                    
                                    </a>



                                </div>
                        </div>
                        
                    </li>
                ))
            }
        </ul>





          

          
          
      </div>
    </section>
)    

}
