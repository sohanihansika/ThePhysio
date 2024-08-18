import { IoIosArrowRoundBack } from "react-icons/io";
export default () => {

    const Subscribers = [
        {
            id: "12",
            name: "Liam James",
            coach: "Kevin"
            
        },
        {
            name: "Olivia Emma",
            id: "12",
            coach: "Peter"
        },
        {
            name: "William Benjamin",
            id: "12",
            coach: "Peter"
        },
        {
            name: "Henry Theodore",
            id: "12",
            coach: "Peter"
        },
        {
            name: "Amelia Elijah",
            id: "12",
            coach: "Peter"
        },
    ]

    return (
        <div className="max-w-screen-xl mt-7 mx-auto px-4 md:px-8">
            <div className="max-w-lg">
            <a
            href="/packages"
            // className=" hover:bg-blue-900 px-4 py-2 text-md font-semibold rounded bg-blue-950 text-white"
            >
             <IoIosArrowRoundBack className="text-4xl"/>
          </a>
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Subscribers
                </h3>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">MemberId</th>
                            <th className="py-3 px-6">Member name</th>
                            <th className="py-3 px-6">Coach</th>
                            
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            Subscribers.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.coach}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            
            </div>
            
        </div>
    )
}