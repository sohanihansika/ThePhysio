// import React, { useState, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAccessibleIcon, FaCog, FaSignOutAlt, FaHome, FaChartLine, FaUserTie, FaUsers, FaRegFrown, FaBullhorn, FaBusinessTime, FaCarAlt, FaCalendarCheck, FaMoneyCheckAlt, FaRegClipboard, FaWarehouse, FaUserPlus, FaClipboardList, FaClipboardCheck, FaCar, FaMoneyCheck, FaWrench, FaCalendarAlt } from "react-icons/fa";


export default () => {
    const integrations = [
      {
          title: "Receiptionist",
          desc: "4",
          path:"/userd",
          icon: <faUsers/>
          
      }, {
          title: "Gym Manager",
          desc: "2",
          path:"/userd",
          icon: <faUsers/>

    
      }, 
      {
        title: "Gym Coach",
        desc: "6",
        path:"/userd",
        icon: <faUsers/>

        
    },
      
    ]
    
return(
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-md">
              <h1 className="text-gray-800 text-center text-xl font-extrabold sm:text-2xl">Staff of The Physio</h1>
              {/* <p className="text-gray-600 mt-2">This is the Admin Dashboard</p> */}
          </div>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                  integrations.map((item, idx) => (
                      <li key={idx} className="border rounded-lg bg-blue-100">
                          <div className="flex items-start justify-between p-4">
                              <div className="space-y-2">
                              <a href={item.path}>

                              <div className="items-center" >{item.icon}</div>


                                  <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                  <p className="text-gray-600 text-3xl mb-3 text-right">{item.desc}</p>
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
