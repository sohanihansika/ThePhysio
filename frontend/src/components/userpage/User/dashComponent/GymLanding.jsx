import React from 'react';
import backgroundImage from '../../../../assets/gymLanding.jpg';

export default () => {
    return (
        <section className="py-28" style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginLeft:'10px'
        }}>
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-3 md:mx-auto text-white">
                    <h3 className="font-semibold" style={{ color: '#172b59' }}>
                        Fitness & Wellness
                    </h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Reach Your Peak Performance
                    </p>
                    <p className="text-gray-300">
                        Join us to experience personalized fitness programs and achieve your fitness goals with professional trainers and state-of-the-art equipment.
                    </p>
                </div>
                <div className="mt-4">
                    <a href="/gymNavibar" className="inline-block py-2 px-4 text-white font-medium rounded-lg shadow-md hover:shadow-none" style={{ backgroundColor: '#172b59', transition: 'background-color 0.15s ease-in-out' }}>
                        Join Now
                    </a>
                </div>
            </div>
        </section>
    )
}
