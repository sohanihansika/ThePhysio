// import React, { useState, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAccessibleIcon,FaUser,FaReceipt , FaCog, FaSignOutAlt, FaHome, FaChartLine, FaUserTie, FaUsers, FaRegFrown, FaBullhorn, FaBusinessTime, FaCarAlt, FaCalendarCheck, FaMoneyCheckAlt, FaRegClipboard, FaWarehouse, FaUserPlus, FaClipboardList, FaClipboardCheck, FaCar, FaMoneyCheck, FaWrench, FaCalendarAlt,FaUserMd } from "react-icons/fa";


export default () => {
    const integrations = [
        {
            title: "Patients",
            path:"/useraccounts",
            icon: <FaUsers />
            
        }, {
            title: "Physiotherapists",
            path:"/useraccounts",
            icon: <FaUserMd />
  
      
        }, 
        {
          title: "Receiptionists",
          path:"/staffaccounts",
          icon: <FaUserTie />
  
          
      },
      {
        title: "Gym Managers",
        path:"/staffaccounts",
        icon: <FaUserTie/>

        
    },
    {
        title: "Gym Coaches",
        path:"/staffaccounts",
        icon: <FaUser />

        
    },
        
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
