import React from 'react';
import backgroundImage from '../../assets/aboutus.jpg'; // Adjust the import path accordingly

export default function AboutUs() {
    return (
        <section className="bg-gray-100 flex items-center">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            With years of experience in physiotherapy, we pride ourselves on delivering top-notch services to help our clients achieve their health goals. Our team of skilled professionals is dedicated to providing personalized treatment plans tailored to each individual's needs.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg">
                            Our state-of-the-art facilities and cutting-edge techniques ensure that you receive the best possible care. Whether you're recovering from an injury or looking to improve your overall wellness, we're here to support you every step of the way.
                        </p>
                        <div className="mt-8">
                            <a 
                                href="#" 
                                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-full custom-hover-bg" 
                                style={{ backgroundColor: '#172b59' }}
                            >
                                Learn more about us <span className="ml-2">&#8594;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12  ml-24 md:mt-0" style={{ width: '70%', height: '700px' }}>
    <img 
        src={backgroundImage} 
        alt="About Us Image" 
        className="object-cover rounded-lg shadow-md w-full h-full" 
    />
</div>

                </div>
            </div>
        </section>
    );
}
