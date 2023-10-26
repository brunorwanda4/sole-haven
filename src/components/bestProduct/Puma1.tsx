import { useState, useEffect } from 'react';
//icons
import { FaPlus, FaHeart, FaStar, FaFacebook, FaInstagram, FaTwitter, FaHSquare,FaShare } from 'react-icons/fa';
import { SiNike, SiPuma } from 'react-icons/si';
import{GrFormNextLink} from 'react-icons/gr'
//puma image
import pumaOneOne from '../../assets/img/shoes/puma/puma1.jpeg'
import pumaOneTwo from '../../assets/img/shoes/puma/puma1-2.jpg'
import pumaOneThree from '../../assets/img/shoes/puma/puma1-3.jpeg'
//start
const Puma1 = () => {
    //puma one image random
  const [pumaOne] =useState([pumaOneOne,pumaOneTwo,pumaOneThree]);
  const [randomPumaOne,setRandomPumaOne]= useState('');

  useEffect(() => {
    getRandomPumaOne();
    },[]);

    const getRandomPumaOne =() => {
      const pumaImageOneIndex =Math.floor(Math.random() * pumaOne.length)
      const randomPumaOne = pumaOne[pumaImageOneIndex];

      setRandomPumaOne(randomPumaOne);
    };
  return (
    <div className=" flex flex-col bg-white shadow-lg p-2 rounded-md w-80">
      <div className=" flex flex-col">
        <img src={randomPumaOne} className=" rounded-md " alt="puma product"  height={'235px'} width={'300px'}/>
      </div>
      {/* buy */}
      <div className=' gap-2 flex flex-col px-2'>
        {/* star icon */}
        <div className='flex flex-row gap-2'>
            <FaStar className=" text-2xl text-orange-600"/>
            <span className=' text-gray-500'>(4.2)</span>
        </div> 
        <h3 className=' font-bold text-2xl '>
            Snakes Puma
        </h3>
        {/* buy button */}
        <div className=' flex justify-between '>
            <a href="./" className='font-bold bg-orange-600 text-white p-2 rounded-3xl shadow-cool-o hover:bg-orange-950 duration-300'>
                35000Rwf
            </a>
            {/* next image */}
            <button onClick={() => getRandomPumaOne()}>
                <GrFormNextLink className=" text-orange-600 font-bold text-2xl"/>
            </button>
        </div>
      </div>
   </div>
  )
}

export default Puma1