import userImage from '../../../assets/user.png';


const reviews = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "John Lorin",
        review: "Great service and very attentive staff. Highly recommend!",
        date: "2024-07-01"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Chris Bondi",
        review: "Had a fantastic experience. The therapy sessions were very effective.",
        date: "2024-07-02"
    },
    {
        avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Yasmine",
        review: "Staff was very professional and the facilities were top-notch.",
        date: "2024-07-03"
    },
    {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
        name: "Joseph",
        review: "Highly satisfied with the treatment. Will definitely return.",
        date: "2024-07-04"
    },
]

export default () => (
    <div className="max-w-2xl mx-auto px-4">
        {/* <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-xl font-semibold">User Reviews</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">See what our users have to say about their experiences.</p>
            </div>
            <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Submit Review
            </a>
        </div> */}
        <ul className="mt-12 divide-y divide-gray-200">
            {
                reviews.map((item, idx) => (
                    <li key={idx} className="py-5 flex items-start justify-between">
                        <div className="flex gap-3">
                        <img
        src={userImage} // Use the imported image
        alt={item.name}
        className="w-10 h-10 rounded-full"
      />                            <div>
                                <span className="block text-sm text-gray-700 font-semibold">{item.name}</span>
                                <span className="block text-sm text-gray-500">{item.date}</span>
                                <p className="mt-1 text-sm text-gray-600">{item.review}</p>
                            </div>
                        </div>
                        {/* <a href="javascript:void(0)" className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">Reply</a> */}
                    </li>
                ))
            }
        </ul>
    </div>
)
