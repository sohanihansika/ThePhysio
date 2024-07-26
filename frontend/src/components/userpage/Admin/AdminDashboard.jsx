import React from 'react'
import { FaUsers,FaReceipt,FaCalendarCheck  } from "react-icons/fa6";

export default () => {
    const integrations = [
        {
            title: "Users",
            desc: "100",
            path:"/users",
            icon: <FaUsers />
            
        }, {
            title: "Reservation",
            desc: "70 Daily",
            path:"/userd",
            icon: <FaCalendarCheck  />
  
      
        }, 
        {
          title: "Reports",
          desc: "0",
          path:"/userd",
          icon: <FaReceipt  />
  
          
      },
        
      ]
const tableItems = [
    {
        avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Liam James",
        email: "liamjames@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Software engineer",
        salary: "$100K"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Product designer",
        salary: "$90K"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Front-end developer",
        salary: "$80K"
    },
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Laravel engineer",
        salary: "$120K"
    },
    {
        avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Open source manager",
        salary: "$75K"
    },
]


return (
    
    <section className="py-2">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {
                integrations.map((item, idx) => (
                    <li key={idx} className="border rounded-2xl bg-blue-100">
                        <div className="flex items-start justify-center p-4">
                            <div className="space-y-2">
                                <a href={item.path}>
                                    <div className="flex-shrink-0 items-center">

                                     <div className="flex items-center text-5xl" >{item.icon}</div>


                                       <h4 className="text-gray-800 font-semibold text-center">{item.title}</h4>
                                       <p className="text-gray-600 text-3xl mb-3 text-center">{item.desc}</p>
                                    </div>
                                </a>



                            </div>
                        </div>
                        
                    </li>
                ))
            }
        </ul>

        
    </div>


      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
    <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-3">
            Activity Logs
        </h3>
        {/* <p className="text-gray-600 mt-3">
        To provide you with a detailed list of all users of "The Physio" system and their primary activities or roles within the system, I would need specific data from the system's user management or activity logs.
        </p> */}
    </div>
    {/* <div className="mt-3 md:mt-0">
        <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
        >
            Add member
        </a>
    </div> */}
</div>
<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Last Login </th>
                <th className="py-3 px-6">Last Logout</th>
                <th className="py-3 px-6">Created Date</th>
                <th className="py-3 px-6"></th>

            </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
            {
                tableItems.map((item, idx) => (
                    <tr key={idx}>
                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                            <img src={item.avatar} className="w-10 h-10 rounded-full" />
                            <div>
                                <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                <span className="block text-gray-700 text-xs">{item.email}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td> */}
                        <td className="text-right px-6 whitespace-nowrap">
                            {/* <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                View
                            </button>
                            <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                Edit
                            </a>
                            <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                Delete
                            </button>
                            <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                Blacklist
                            </button> */}
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
</div>
  </section>


)


}


