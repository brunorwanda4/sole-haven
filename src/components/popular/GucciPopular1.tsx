import { useState,useEffect } from 'react'
// image
//gucci logo
import gucciIcon from '../../assets/img/icons/gucci.png'
//icons
import {BsArrowRight} from 'react-icons/bs'
//gucci one images
import gucciOneOne from '../../assets/img/shoes/gucci/gucci1.jpg'
import gucciOneTwo from '../../assets/img/shoes/gucci/gucci1-2.jpg'
import gucciOneThree from '../../assets/img/shoes/gucci/gucci1-3.jpg'
import gucciOneFour from '../../assets/img/shoes/gucci/gucci1-4.jpg'
import GucciPopular1Inf from './GucciPopular1Inf'
//start
const GucciPopular1 = () => {
    const [pumaOne] =useState([gucciOneOne,gucciOneTwo,gucciOneThree,gucciOneFour]);
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
    <div className=' flex lg:flex-row flex-col  gap-16 lg:gap-6'>
        {/* product information */}
        <div>
            <GucciPopular1Inf/>
            {/* other product image */}
            
        </div>
        {/* product image */}
        <div className=' flex flex-row justify-between'>
            <img src={randomPumaOne} alt=" gucci best shoes" className=' w-[540px] h-[420px] rounded-md shadow-2xl' />
            <button onClick={() => getRandomPumaOne()} className=' absolute flex bg-orange-600 p-2 rounded-md text-white  gap-1 text-end ml-[379px] mt-[372px]'>
                Another Picture 
                <BsArrowRight className=' mt-1'/>
            </button>
        </div>
    </div>
  )
}

export default GucciPopular1