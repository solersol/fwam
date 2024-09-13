


import React from 'react';
import { rmap1, rmap2, rmap3 } from '../assets/images'; // Replace with your actual image paths
import { useInView } from 'react-intersection-observer';

const Roadmap4 = () => {
  // Animation hooks for sliding effect
  const { ref: row1Ref, inView: row1InView } = useInView({ triggerOnce: true });
  const { ref: row2Ref, inView: row2InView } = useInView({ triggerOnce: true });
  const { ref: row3Ref, inView: row3InView } = useInView({ triggerOnce: true });

  return (
    <section id="roadmap"  className="w-full py-12 px-56 ">
      <h1 className="text-center text-4xl font-Matemasie font-bold mb-12">Roadmap</h1>

      {/* Row 1 - Image Left, Text Right */}
      <div
        ref={row1Ref}
        className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row1InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      >
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6 mb-6 lg:mb-0">
          <img
            src={rmap1}
            alt="Roadmap Step 1"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>
        
        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mr-32">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold font-Matemasie mb-4">Phase I</h2>
            <p className="text-gray-600 font-Matemasie">
             PUMPFUN FAIR LAUNCH -  DEX PRE PAID - BUMP IT PAID
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 - Text Left, Image Right */}
      <div
        ref={row2Ref}
        className={`flex flex-col lg:flex-row items-center justify-between transition-transform duration-700 ${row2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
      >
        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mb-6 ml-32 lg:mb-0">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold font-Matemasie mb-4">Phase II</h2>
            <p className="text-gray-600 font-Matemasie">
              3 x KOL's - Live BURNS - Orbit Volume Boost
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6">
          <img
            src={rmap2}
            alt="Roadmap Step 2"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>
      </div>

      {/* Row 3 - Image Left, Text Right */}
      <div
        ref={row3Ref}
        className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row3InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      >
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6 mb-6 lg:mb-0">
          <img
            src={rmap3}
            alt="Roadmap Step 3"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>

        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mr-32">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 font-Matemasie">Phase III</h2>
            <p className="text-gray-600 font-Matemasie">
              On the 14th of September Rich $PATTIE will be in a secret pop up location in San Francisco come meet us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap4;
