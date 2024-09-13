

import React from 'react';
import { img1, cardImage1, img2 } from '../assets/images';

const ComingSoon = () => {
  const cards = [
    { title: "TELEGRAM", text: "Join Now", link: "https://t.me/UFWOsol", image: cardImage1, initialRotation: "rotate-[-4deg]" },
    { title: "PUMPFUN", text: "Buy Now", link: "https://pump.fun/", image: img2, initialRotation: "rotate-[-1deg]" },
    { title: "X", text: "Join Now", link: "https://x.com/UWFOsol", image: img1, initialRotation: "rotate-[10deg]" },
  ];

  return (
    <section className="relative w-full h-screen flex flex-col justify-between items-center">
      {/* Cards Positioned at the Top Center */}
      <div className="absolute top-10 w-[500px] max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            className={`block border-[4px] border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[100px] max-w-xs py-6"
              />
            </div>
            <div className="p-4 text-center">
              <p className="font-comic text-sm mb-8 text-black">{card.text}</p>
            </div>
          </a>
        ))}
      </div> 

      {/* H1 Positioned at the Bottom Center */}
      <h1 className="absolute bottom-10 text-yellow-300 text-4xl md:text-6xl font-bold font-comic text-center">
        CA: CNWA7yLCeuDnHajb77tWxhN9bQTFvUAuzJbadoYvpump
      </h1>
    </section>
  );
};

export default ComingSoon;
