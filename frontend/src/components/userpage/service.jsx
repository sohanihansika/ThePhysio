import React from 'react';
import Slider from "react-slick";
import healthImg from '../../assets/healthcare.png';
import checkupImg from '../../assets/theraphy.png';
import doctorImg from '../../assets/physio.png';
import fit from '../../assets/fitness.png';

export default function Service() {
  const services = [
    {
      img: healthImg,
      title: "Personalized Health Care",
      description: "We provide comprehensive care for your health, ensuring that each treatment plan is personalized to meet your specific needs. Our team of physiotherapists works with you to achieve optimal health outcomes.",
    },
    {
      img: checkupImg,
      title: "Comprehensive Physiotherapy",
      description: "Our clinic provides weekly private physiotherapy check-ups to monitor your progress and tailor your treatment plan accordingly. Our experienced   physiotherapists ensure all sessions are personalized.",
      style: { width: '400px', height: '400px' }
    },
    
    {
      img: doctorImg,
      title: "Experienced Physiotherapists",
      description: "Our team of highly skilled and experienced physiotherapists is dedicated to providing the highest quality care. We use the latest techniques and equipment to ensure the best possible outcomes for our patients.",
    },
    {
      img: fit,
      title: "Fitness and Wellness Programs",
      description: "Our fitness and wellness programs are designed to help you stay in shape and maintain a healthy lifestyle. We offer personalized training and fitness plans tailored to your needs.It will increase your fitness.",
      style: { width: '400px', height: '400px' } // Style specific to the fit image
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '50px', 
          height: '50px', 
          border: '2px solid #172b59', 
          borderRadius: '50%', 
          right: '-25px', 
          background: '#172b59', 
          color: '#fff', 
          fontSize: '24px' 
        }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '50px', 
          height: '50px', 
          border: '2px solid #172b59', 
          borderRadius: '50%', 
          left: '-25px', 
          background: '#172b59', 
          color: '#fff', 
          fontSize: '24px' 
        }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#172b59] mb-2">Our Services</h3>
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Comprehensive Physiotherapy Care</span>
        </div>
        <div className="mt-12">
          <Slider {...settings}>
            {services.map((service, idx) => (
              <div key={idx} className="p-4">
                <div className="flex flex-col h-full bg-white p-6 rounded-3xl shadow-lg" style={{ width: '360px' }}>
                  <div className="flex-grow">
                    <div className="relative w-full h-64 mb-4 rounded-t-lg overflow-hidden">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        style={service.img === fit ? service.style : {}} // Apply specific style for fit image
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
