import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import UserService from '../../service/UserService';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileImage from '../../../assets/profile.png';


const PhysiotherapistProfiles = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Assuming you want to use a search term for filtering

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    }, [searchTerm, users]);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getAllPhysios(token);
            setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
            setFilteredUsers(response.ourUsersList); // Initialize filteredUsers with the fetched users
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Our Physiotherapists
                </h1>
                <p className="mt-3 text-gray-500">
                    Meet our team of highly qualified and experienced physiotherapists.
                </p>
            </div>
            <Slider {...settings} className="mt-12">
                {filteredUsers.map(user => (
                    <article key={user.id} className="shadow-lg border rounded-md duration-300 hover:shadow-sm bg-white" style={{ width: '280px', margin: 'auto' }}>
                        <div className="flex justify-center mt-4">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full shadow-lg"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.specialty}</p> {/* Assuming there's a specialty field */}
                        </div>
                        <div className="mt-4 px-6 text-gray-600 text-sm">
                            <p className="mb-2"><strong>Degree:</strong> {user.degree || 'MBBS'}</p>
                            <p className="mb-2"><strong>University:</strong> {user.university || 'Harvard University'}</p>
                            <p className="mb-2"><strong>Age:</strong> {user.age || '35'}</p>
                            <p className="mt-3 text-gray-400"><strong>Contact:</strong> {user.email}</p>
                        </div>
                        <div className="text-center my-4">
                            <a href={`/physioprofile/${user.id}`} className="inline-block w-full py-2 rounded-lg hover:bg-gray-700 text-white duration-150" style={{ backgroundColor: '#172b59' }}>
                                <p className="text-sm">View Profile</p>
                            </a>
                        </div>
                    </article>
                ))}
            </Slider>
        </section>
    );
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#172b59", right: '-25px', zIndex: 10 }}
            onClick={onClick}
        >
            ➔
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#172b59", left: '-25px', zIndex: 10 }}
            onClick={onClick}
        >
            ←
        </div>
    );
}

export default PhysiotherapistProfiles;
