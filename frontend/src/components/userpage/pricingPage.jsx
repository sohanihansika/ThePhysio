import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const pricingPlans = [
  {
    title: "Physiotherapy",
    price: "1500 RS",
    description: "Per half-hour session",
    details: "Receive top-notch physiotherapy sessions tailored to your needs."
  },
  {
    title: "Gym Subscription (3 days/week)",
    price: "5000 RS",
    description: "Monthly subscription",
    details: "Access our gym facilities 3 days a week with this monthly plan."
  },
  {
    title: "Gym Subscription (5 days/week)",
    price: "7500 RS",
    description: "Monthly subscription",
    details: "Enjoy unlimited access to our gym facilities 5 days a week."
  },
];

export default function PricingPlans() {
  return (
    <section className='py-14'>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
            Our Pricing Plans
          </h3>
          <div className='mt-3 max-w-xl mx-auto'>
            <p>
              Choose the plan that best suits your needs and goals.
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
            {pricingPlans.map((plan, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-stretch h-full rounded-xl border-2 bg-white hover:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-2">
                  <div className="p-8 space-y-4 border-b h-full" style={{ minHeight: '350px' }}> {/* Adjusted minHeight */}
                    <span className='text-indigo-600 font-medium'>
                      {plan.title}
                    </span>
                    <div className='text-gray-800 text-3xl font-semibold'>
                      {plan.price} <span className="text-xl text-gray-600 font-normal">{plan.description}</span>
                    </div>
                    <p className="text-gray-800">
                      {plan.details}
                    </p>
                    <div className="mt-auto pt-6"> {/* Added padding top */}
                      <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-[#172b59] hover:bg-indigo-500 active:bg-indigo-700'>
                        Learn More
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
}
