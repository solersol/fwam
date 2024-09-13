


import React from 'react';
import { pt1 } from '../assets/images'; // Ensure the path is correct

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center">
      {/* Centered Text and Button */}
      <div className="flex-grow flex flex-col mt-44 justify-center items-center">
        <h1 className="font-Matemasie text-[35px] text-center px-4 break-words font-black text-[#fff] animate-slide-in-left">
          CA: 2vmAWL2b38GhnZhJgfvBsT7uCededGmczj4GZ589pump
        </h1>

        <a href="https://pump.fun/2vmAWL2b38GhnZhJgfvBsT7uCededGmczj4GZ589pump">
          <button className="animate-pulse mt-6 mb-10 bg-[#6b81d6] text-[#000] px-28 py-6 hover:bg-[#425973] border-4 border-black font-black font-Matemasie text-[24px]">
            BUY $PATTIE
          </button>
        </a>
      </div>

      {/* Image at the Bottom */}
      <div className="w-full flex justify-center mb-0">
        <img
          src={pt1}
          alt="burger"
          className="w-auto h-auto max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

