import React from 'react'

// import DashboardCards from './DashboardCards';
import Upcomming from '../User/dashComponent/upcomming';
import Calendar from '../User/calender';
import Cards from '../User/dashComponent/cards';



export default function PhysioDashboard() {
    return (
      <div className="max-w-full mx-auto px-4"> {/* Maximum full width */}
        
        <Cards />
        <div className="flex justify-center items-center flex-wrap gap-24 mt-6"> {/* Flex container for Upcomming and Calendar */}
          <div className="flex-1 min-w-[300px] max-w-[600px]"> {/* Ensures both components are responsive */}
            <Upcomming />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[600px]"> {/* Ensures both components are responsive */}
          <h1 className="text-xl font-bold text-[#172b59] p-6">Make Appoinment</h1>
  
            <Calendar />
          </div>
        </div>
        
        
      </div>
    )
  }
  