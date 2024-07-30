import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Example data for physiotherapists
const physiotherapists = [
  {
    name: "Dr. Alex Johnson",
    specialization: "Sports Therapy",
    hourlyRate: 50,
  },
  {
    name: "Dr. Sarah Lee",
    specialization: "Orthopedic",
    hourlyRate: 60,
  },
  {
    name: "Dr. James Smith",
    specialization: "Pediatric",
    hourlyRate: 55,
  },
];

export default () => {
  return (
    <section className='py-14'>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
            Our Pricing Plans
          </h3>
          <div className='mt-3 max-w-xl'>
            <p>
              Choose the right plan based on the expertise of our physiotherapists.
            </p>
          </div>
        </div>
        <div className='mt-16'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='swiper-container'
          >
            {physiotherapists.map((physio, idx) => (
              <SwiperSlide key={idx}>
                <div className={`flex flex-col items-stretch h-full rounded-xl border-2 bg-white hover:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-2`}>
                  <div className="p-8 space-y-4 border-b h-full">
                    <span className='text-indigo-600 font-medium'>
                      {physio.specialization}
                    </span>
                    <div className='text-gray-800 text-3xl font-semibold'>
                      ${physio.hourlyRate} <span className="text-xl text-gray-600 font-normal">/hour</span>
                    </div>
                    <p className="text-gray-800">
                      Sessions with {physio.name}
                    </p>
                    <div className="mt-auto">
                      <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-[#172b59] hover:bg-indigo-500 active:bg-indigo-700'>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
