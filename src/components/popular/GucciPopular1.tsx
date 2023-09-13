import { useState,useEffect } from 'react'
//gucci logo
import gucci from '../../assets/img/gucci.png'
//icons
import {GrFormNextLink} from 'react-icons/gr'
//gucci one images
import gucciOneOne from '../../assets/img/shoes/gucci/gucci1.jpg'
import gucciOneTwo from '../../assets/img/shoes/gucci/gucci1-2.jpg'
import gucciOneThree from '../../assets/img/shoes/gucci/gucci1-3.jpg'
import gucciOneFour from '../../assets/img/shoes/gucci/gucci1-4.jpg'
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
        <div className=' flex flex-col max-lg:gap-2 max-md:gap-1 gap-1'>
         {/* product name */}
         <div className=' flex flex-row gap-2'>
            <h2 className=" font-bold text-3xl font-sans text-gray-800">
              Best Shoes From <span className=' text-orange-600'>Gucci</span>
            </h2>
           <img src={gucci} alt="Gucci logo" className=' h-10 w-12 ' />
         </div>
          {/* product inf */}
          <p className=' flex text-base text-gray-600'>
            Experience unparalleled styled performance with Nike shoes, <br /> 
            crafted to elevate your every step.
            Experience unparalleled <br />
            styled performance with Nike shoes, crafted to elevate your every <br />
            step.
          </p>
          <div className=' md:mt-8 mt-4 flex flex-row md:gap-4 gap-3 transition-cool'>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        200<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Brands
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        25k<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Shops
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        75k<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Customer
                    </span>
                </div>
            </div>
            {/* buy btn */}
            <div className="flex flex-row gap-6 ">
             <a href="./" className=' font-bold  transition-cool bg-orange-950 shadow-cool hover:bg-orange-600 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool '>
                 Shop Now
             </a>
             <a href="./" className='  font-bold  transition-cool bg-orange-600 shadow-cool-o hover:bg-orange-950 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool'>
                35000Frw
             </a>
            </div>
        </div>
        {/* product image */}
        <div className=' flex flex-row justify-between'>
            <img src={randomPumaOne} alt=" gucci best shoes" className=' w-[540px] h-[420px] rounded-md shadow-2xl' />
            <button onClick={() => getRandomPumaOne()} className=' absolute flex animation-cool bg-orange-600 p-2 rounded-md text-white  gap-1 text-end ml-[379px] mt-[372px]'>
                Another Picture 
                <GrFormNextLink className=' mt-1'/>
            </button>
        </div>
    </div>
  )
}

export default GucciPopular1