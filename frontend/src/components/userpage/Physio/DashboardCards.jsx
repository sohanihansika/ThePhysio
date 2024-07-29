import React from 'react'
import { FaUsers,FaReceipt,FaDumbbell  } from "react-icons/fa6";


export default  () => {

  const cards = [
    {
        title: "Make Reservations",
        path:"/users",
        icon: <FaUsers />
        
    }, {
        title: "Gym",
        path:"/userd",
        icon: <FaDumbbell />

  
    }, 
    {
      title: "Advertisement",
      path:"/userd",
      icon: <FaReceipt  />

      
  },
    
  ]
  return (
    
    <section className="max-w-screen-xl mx-auto py-24 px-4 md:px-8">

        <div className="max-w-screen-xl mx-auto px-2 md:px-8">
          
  
             <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {
                  cards.map((item, idx) => (
                      <li key={idx} className="border rounded-2xl bg-blue-100">
                          <div className="flex items-start justify-center p-4">
                              <div className="space-y-2">
                                  <a href={item.path}>
                                      
  
                                      <div className="flex-shrink-0 items-center">
                                          <div className="flex items-center justify-center ">
                                          <span className="mr-2 text-6xl">{item.icon}</span>
                                             <h4 className="text-gray-800 font-semibold text-xl">{item.title}</h4>
                                      </div>
                                      </div>
                                  </a>
  
  
  
                              </div>
                          </div>
                          
                      </li>
                  ))
              }
              </ul>
  
          
          </div>


        {/* upcoming reservations */}

        {/* calender */}
          </section>
  )
}

