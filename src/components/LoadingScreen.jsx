import React, { useEffect, useRef } from 'react';
import { loadingImage, loadingBg } from '../assets/images'; // Add the background image

const LoadingScreen = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    let angle = 0;

    const spin = () => {
      // Increment the angle to create a spinning effect
      angle = (angle + 2) % 360; // Adjust the speed by changing the increment value
      image.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(spin);
    };

    requestAnimationFrame(spin);

    return () => cancelAnimationFrame(spin);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center z-50"
      style={{ backgroundImage: `url(${loadingBg})` }} // Correct property for background image
    >
      <img
        ref={imageRef}
        src={loadingImage}
        alt="Loading"
        className="w-64 h-44 absolute"
      />
    </div>
  );
};

export default LoadingScreen;
