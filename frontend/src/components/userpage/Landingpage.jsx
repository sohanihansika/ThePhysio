import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import UserService from '../service/UserService';
import AboutUs from './aboutUs';
import Service from './service';
import Contactus from './contactus';
import OurTeam from './OurTeam';
import Footer from './footer';
import GymLanding from './User/dashComponent/GymLanding';
import PricingPage from './pricingPage';
import Location from './User/dashComponent/location';

const Landingpage = () => {
    const [state, setState] = useState(false);
    const isAuthenticated = UserService.isAuthenticated();

    const navigation = [
        { title: "Home", path: "/login" },
        { title: "About Us", path: "/AboutUs" },
        { title: "Services", path: "/service" },
        { title: "Gym", path: "/gymlanding" }
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        "./src/assets/actual2.jpg",
        "./src/assets/actual.jpg",
        "./src/assets/actual1.jpg",
    ];
    
    const imageStyle = {
        width: '90vw',
        height: '75vh',
        objectFit: 'cover' // Adjusts the aspect ratio of the image to cover the element
    };

    if (location.pathname !== '/') {
        return null;
    }

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img src="./src/assets/logowithoutback.png" width={100} height={100} className="imageStyle" />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col items-left  justify-center min-h-screen w-99vw bg-gray-100 overflow-x-hidden">
            <div className="bg-gray-100 min-h-screen flex flex-col overflow-x-hidden">
                <header className="h-[100px] overflow-hidden bg-gray-900">
                    <div className={`md:hidden ${state ? "mx-2 pb-0" : "hidden"}`}>
                        <Brand className="w-4 h-4" /> {/* Reduced size for the logo */}
                    </div>
                    <nav className={`md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-0 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-8 items-center max-w-screen-lg mx-auto px-4 md:flex md:px-6">
                            <Brand className="w-8 h-8" /> {/* Reduced size for the logo */}
                            <div className={`flex-1 items-center mt-2 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-end items-center space-y-0 md:flex md:space-x-4 md:space-y-0">
                                    {navigation.map((item, idx) => (
                                        <li key={idx} className="text-gray-300 hover:text-gray-400 text-lg"> {/* text-lg sets the font size */}
                                        <a href={item.path} className="block font-medium">
  {item.title}
</a>


                                      </li>
                                      
                                    ))}
                                </ul>
                                <div className="flex-1 gap-x-4 items-center justify-end mt-2 space-y-0 md:flex md:space-y-0 md:mt-0">
                                <a href="/login" className="block text-gray-300 hover:text-gray-400 text-lg py-2 px-3">
  Log in
</a>

                                    <a href="/register" className="flex items-center justify-center gap-x-1 text-lg py-1 px-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                        Sign up
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="relative flex-1">
                    <Slider {...sliderSettings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <div className="w-full h-screen" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white z-10 bg-black bg-opacity-50 p-5">
                        <h2 className="text-4xl font-extrabold mx-auto md:text-5xl">
                            Enhance Your Health with Expert Physiotherapy
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-300 mt-4">
                            Our clinic provides top-notch physiotherapy services to help you recover and maintain your physical well-being.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="justify-center items-center gap-x-3 sm:flex mt-6">
                            <input type="text" placeholder="Enter your email" className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto" />
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </section>
                {/* Rest of the page content */}
                <div className="py-6">
                    <AboutUs />
                    <Service />
                    <OurTeam />
                    <PricingPage />
                    <Contactus />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Landingpage;
