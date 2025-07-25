// import React from 'react';
// import {Link} from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div className='h-[100vh] md:h-[90vh] overflow-hidden flex flex-col md:flex-row items-center justify-center '>
//         <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
//         <img
//           src="./front-view-education-day-concept.png"
//           alt="Education Day Concept"
//           className='ml-[50%]'
//         />
//       </div>
//       <div className='w-1/2 flex flex-col items-center lg:items-end justify-center pr-[10%]'>
//         <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center'>
//           Discover Your Next Great Read
//         </h1>
//         <p className='mt-4 text-xl text-zinc-300 text-center'>
//           Uncover captivating stories, enriching knowledge, and endless inspiration
//           in our curated collection of books.
//         </p>
//         <div className='mt-8 flex justify-center w-full'>
//           <Link to='/all-books' className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 rounded-full hover:bg-zinc-800'>
//             Discover
//           </Link>
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-[100vh] md:h-[90vh] overflow-hidden flex flex-col md:flex-row items-center justify-center'>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <img
          src="/front-view-education-day-concept.png"
          alt="Education Day Concept"
          className='w-[90%] md:w-[80%] object-contain'
        />
      </div>

      <div className='w-full md:w-1/2 flex flex-col items-center md:items-end justify-center px-6 md:pr-[10%] text-center md:text-right'>
        <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100'>
          Discover Your Next Great Read
        </h1>
        <p className='mt-4 text-xl text-zinc-300'>
          Uncover captivating stories, enriching knowledge, and endless inspiration
          in our curated collection of books.
        </p>
        <Link
          to='/all-books'
          className='mt-8 text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 rounded-full hover:bg-zinc-800 transition'
        >
          Discover
        </Link>
      </div>
    </div>
  );
};

export default Hero;
