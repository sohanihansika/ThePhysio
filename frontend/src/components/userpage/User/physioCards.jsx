import React from 'react';
import Slider from "react-slick";
import profileImage from '../../../assets/profile.png';
<img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Dr. Jane Doe" className="w-24 h-24 rounded-full object-cover" />

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PhysiotherapistProfiles = () => {
    const profiles = [
        {
            name: "Dr. Jane Doe",
            title: "Senior Physiotherapist",
            desc: "With over 10 years of experience, Dr. Jane specializes in sports injuries and rehabilitation.",
            img: profileImage,
            contact: "janedoe@example.com",
            date: "Joined Jan 2015"
        },
        {
            name: "Dr. John Smith",
            title: "Physiotherapist",
            desc: "Dr. John focuses on pediatric physiotherapy and has helped numerous children regain mobility.",
            img: profileImage,
            contact: "johnsmith@example.com",
            date: "Joined Mar 2018"
        },
        {
            name: "Dr. Emily Turner",
            title: "Junior Physiotherapist",
            desc: "Emily is passionate about helping patients with chronic pain through personalized treatment plans.",
            img: profileImage,
            contact: "emilyturner@example.com",
            date: "Joined Sep 2020"
        },
        {
            name: "Dr. Alex Brown",
            title: "Physiotherapist",
            desc: "Specializing in neurological physiotherapy, Alex has extensive experience with stroke recovery.",
            img: profileImage,
            contact: "alexbrown@example.com",
            date: "Joined Dec 2017"
        },
        {
            name: "Dr. Shanta",
            title: "Neurologist",
            desc: "Dr. Shanta has a wealth of experience in neurology, focusing on brain and spinal disorders.",
            img: profileImage,
            contact: "shantha@gmail.com",
            date: "Experience: 15 years"
        }
    ];

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
                {
                    profiles.map((profile, key) => (
                        <div key={key} className="p-2">
                            <article className="shadow-lg border rounded-md duration-300 hover:shadow-sm" style={{ width: '300px', height: '460px', margin: 'auto' }}>
                                <img src={profile.img} loading="lazy" alt={profile.name} className="w-full h-58 rounded-t-md object-cover" style={{ width: '100%', height: '160px' }} />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    {/* <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={profile.img} className="w-full h-full rounded-full" alt={profile.name} />
                                    </div> */}
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{profile.name}</span>
                                        <span className="block text-gray-400 text-sm">{profile.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {profile.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{profile.desc}</p>
                                    <p className="text-gray-400 text-sm mt-1">Contact: {profile.contact}</p>
                                </div>
                                <a href="/physioprofile" className="flex items-center gap-x-2 p-1 rounded-lg hover:bg-gray-700 text-white duration-150" style={{ backgroundColor: '#172b59', width: '80px' }}>
                                    <p className="text-sm text-center w-full">View</p>
                                </a>


                            </article>
                        </div>
                    ))
                }
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
