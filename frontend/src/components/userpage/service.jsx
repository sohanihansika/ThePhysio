import React from 'react';

export default function Service() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-3xl font-semibold">Our Services</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Comprehensive Physiotherapy Care</span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">Personalized Health Care</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Ongoing</time>
                <p className="mt-3">
                  We provide comprehensive care for your health, ensuring that each treatment plan is personalized to meet your specific needs. Our dedicated team of physiotherapists works closely with you to achieve optimal health outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">Weekly Private Check-ups</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Ongoing</time>
                <p className="mt-3">
                  Our clinic offers weekly private check-ups to monitor your progress and make necessary adjustments to your treatment plan. We ensure that all patient reports are handled with the utmost confidentiality.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">Experienced Physiotherapists</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Ongoing</time>
                <p className="mt-3">
                  Our team of highly skilled and experienced physiotherapists is dedicated to providing the highest quality care. We use the latest techniques and equipment to ensure the best possible outcomes for our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
