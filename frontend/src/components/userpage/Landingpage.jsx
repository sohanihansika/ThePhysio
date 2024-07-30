import { useEffect, useState } from 'react';
import UserService from '../service/UserService';
import AboutUs from './aboutUs';
import Service from './service';
import Contactus from './contactus';
import OurTeam from './OurTeam';
import Footer from './footer';
import GymLanding from './User/dashComponent/GymLanding';
import PricingPage from './pricingPage';
import Location from './User/dashComponent/location'


const Landingpage = () => {
    const [state, setState] = useState(false);
    const isAuthenticated = UserService.isAuthenticated();

    const navigation = [
        { title: "Home", path: "/login" }, // Replace "#" with your actual paths
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

    if (location.pathname !== '/') {
        return null;
    }

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img src="./src/assets/logowithoutback.png" width={150} className="mx-auto" />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-left justify-center min-2h-screen bg-gray-100">
<div className="bg-gray-900 min-h-screen flex flex-col">
<header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-300 hover:text-gray-400">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                                <a href="/login" className="block text-gray-300 hover:text-gray-400">
                                    Log in
                                </a>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Sign up
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="relative flex-1">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            Enhance Your Health with Expert Physiotherapy
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Our clinic provides top-notch physiotherapy services to help you recover and maintain your physical well-being.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="justify-center items-center gap-x-3 sm:flex">
                            <input type="text" placeholder="Enter your email" className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto" />
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                {Array(5).fill().map((_, index) => (
                                    <svg key={index} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.868 2.205a.75.75 0 00-1.365 0l-1.993 4.042-4.458.646a.75.75 0 00-.416 1.278l3.226 3.144-.761 4.435a.75.75 0 001.088.791L10 14.347l3.977 2.089a.75.75 0 001.088-.79l-.761-4.436 3.226-3.145a.75.75 0 00-.416-1.278l-4.458-.646-1.993-4.042z" />
                                    </svg>
                                ))}
                            </div>
                            <span>Rated 4.9/5 (243 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-25"></div>
            </section>
            
            {/* Include the About Us section here */}
        </div>
                    <AboutUs />
                    <Service />                        
                    <GymLanding />
                    <PricingPage/>
                    <OurTeam/>
                    <Contactus />
                    <Footer />
                 

                    

        </div>

    );
}

export default Landingpage;
