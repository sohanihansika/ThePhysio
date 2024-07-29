import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <div className="flex flex-col items-center"> {/* Center align the content */}
      <div className="sec text-center mb-6">
        <h2 className="text-[#172b59] text-2xl md:text-4xl">Find Us Here</h2>
      </div>
      <div className="google-map flex justify-center w-full max-w-4xl"> {/* Limit max width to keep map smaller */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9451852844486!2d79.8726168!3d6.897159900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ee2a2b0533%3A0xe2776ef7575a7845!2sThe%20Physio!5e0!3m2!1sen!2slk!4v1720498977765!5m2!1sen!2slk"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}
