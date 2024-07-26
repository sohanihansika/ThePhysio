import { useState } from 'react';

const members = [
  {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "John lorin",
      email: "john@example.com"
  }, {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Chris bondi",
      email: "chridbondi@example.com"
  }, {
      avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "yasmine",
      email: "yasmine@example.com"
  }, {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
      name: "Joseph",
      email: "joseph@example.com"
  },
];

export default () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="items-start justify-between sm:flex">
        <form
          onSubmit={(e) => e.preventDefault()} 
          className="max-w-md px-4 ml-0 mt-12">
          <div className="flex items-center space-x-4">
            <label htmlFor="doctor-name" className="text-sm font-medium text-gray-700">Doctor Name</label>
            <div className="relative flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                id="doctor-name"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
            </div>
          </div>
        </form>   
      </div>
      <ul className="mt-12 divide-y">
        {
          filteredMembers.map((item, idx) => (
            <li key={idx} className="py-5 flex items-start justify-between ">
              <div className="flex gap-3">
                <img src={item.avatar} className="flex-none w-12 h-12 rounded-full" alt={item.name} />
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">{item.name}</span>
                  <span className="block text-sm text-gray-600">{item.email}</span>
                </div>
              </div>
              <a href="/calender" className="text-white text-sm border rounded-lg px-3 py-2 duration-150 bg-[#051B40] ">View</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
