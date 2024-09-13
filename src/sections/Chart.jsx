// import React from 'react';
// import { chartImage } from '../assets/images'; // Replace with your actual image path

// const Chart = () => {
//   return (
//     <section className="relative w-full h-screen flex justify-center items-center bg-cover bg-center  p-8">
//       <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 mb-32 bg-black bg-opacity-50 p-8 rounded-lg">
//         {/* Iframe Section */}
//         <div className="w-full lg:w-2/3">
//           <iframe
//             src="https://dexscreener.com/solana/66cxxqzcpfttlcdmbxyykjfcevqkag8cv1ob5keacd5b?embed=1&theme=dark&trades=0&info=0"
//             width="100%"
//             height="700px"
//             loading="lazy"
//             title="Dexscreener Chart"
//             className="w-full"
//           ></iframe>
//           <noscript>
//             <p className="text-center text-red-500">
//               Your browser does not support iframes. Please visit Dexscreener to view the live chart.
//             </p>
//           </noscript>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/3 flex justify-center">
//           <img
//             src={chartImage}
//             alt="Chart Information"
//             className="w-full h-auto max-w-md object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Chart;


import React from 'react';
import { chartImage } from '../assets/images'; // Replace with your actual image path

const Chart = () => {
  return (
    <section id="chart"  className="relative  w-full min-h-screen flex justify-center items-center bg-cover bg-center p-4 md:p-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 mb-12 md:mb-32 bg-black bg-opacity-50 p-4 md:p-8 rounded-lg">
        {/* Iframe Section */}
        <div className="w-full lg:w-2/3">
          <iframe
            src="https://pump.fun/board?embed=1&theme=dark&trades=0&info=0"
            width="100%"
            height="300px" // Set height to adjust for mobile
            loading="lazy"
            title="Dexscreener Chart"
            className="w-full h-64 md:h-96 lg:h-[700px]" // Adjust heights for mobile and larger screens
          ></iframe>
          <noscript>
            <p className="text-center text-red-500">
              Your browser does not support iframes. Please visit Dexscreener to view the live chart.
            </p>
          </noscript>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={chartImage}
            alt="Chart Information"
            className="w-full h-auto max-w-sm md:max-w-md rounded-lg  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Chart;
