

import React from 'react';
// import userImage from './assets/user.png'; // Import the image
import userImage from '../../../assets/user.png';

const appoinments = () => {
    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
            email: "liamjames@example.com",
            phone_number: "+1 (555) 000-000",
            specialty: "Sports Injuries",
            experience: "5 years"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            phone_number: "+1 (555) 000-000",
            specialty: "Orthopedic",
            experience: "3 years"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            phone_number: "+1 (555) 000-000",
            specialty: "Neurological",
            experience: "7 years"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            phone_number: "+1 (555) 000-000",
            specialty: "Pediatric",
            experience: "4 years"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            phone_number: "+1 (555) 000-000",
            specialty: "Geriatric",
            experience: "6 years"
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-4">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Available Physiotherapists
                    </h3>
                    <p className="text-gray-600 mt-2">
                        You can choose a physiotherapist based on your needs.
                    </p>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Phone Number</th>
                            <th className="py-3 px-6">Specialty</th>
                            <th className="py-3 px-6">Experience</th>
                            <th className="py-3 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {tableItems.map((item, idx) => (
                            <tr key={idx}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                <img
        src={userImage} // Use the imported image
        alt={item.name}
        className="w-10 h-10 rounded-full"
      />                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                        <span className="block text-gray-700 text-xs">{item.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.phone_number}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.specialty}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.experience}</td>
                                <td className="text-right px-6 whitespace-nowrap">
                                <button 
    onClick={() => window.location.href = '/calendar'} 
    className="flex items-center gap-x-2 text-blue-600 p-2 rounded-lg hover:bg-lightblue hover:text-blue-500 active:bg-gray-100 duration-150 leading-none px-3 font-medium hover:bg-gray-50"
>
    Add Appointment
</button>



                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default appoinments;
