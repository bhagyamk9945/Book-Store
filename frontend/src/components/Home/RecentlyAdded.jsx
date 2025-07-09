// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import Bookcard from '../BookCard/Bookcard.jsx'

// const RecentlyAdded = () => {

//     const [data,setData] = useState()

//     useEffect(()=>{
//         const fetch= async()=>{
//             const response= await axios.get("http://localhost:5000/api/v1/books/get-recent-books")

//             setData(response.data.data)
//             // console.log(response.data.data)
//         };
//         fetch()
//     },[])

//   return (
//     <div className='mt-8 px-8'>
//         <h4 className='text-3xl text-yellow-100'>Recently Added Books</h4>
//         <div className='my-4 grid grid-col-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//         {data &&
//         data.map((item,i)=>(
//             <div key={i}>
//                 <Bookcard data={item}/>
//             </div>
//         ))
//         }
//         </div>
//     </div>
//   )
// }

// export default RecentlyAdded
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookcard from '../BookCard/Bookcard.jsx';

const RecentlyAdded = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/books/get-recent-books");
        setData(response.data.data);
      } catch (err) {
        setError("Failed to fetch recently added books.");
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className='mt-16 px-8'>
      <h4 className='text-3xl text-yellow-100 mb-6'>Recently Added Books</h4>

      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data && data.map((item, i) => (
          <Bookcard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
