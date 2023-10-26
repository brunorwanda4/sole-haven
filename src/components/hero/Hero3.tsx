/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState,SetStateAction } from 'react'
//image
import gucciOneOne from '../../assets/img/shoes/gucci/gucci1.jpg'
import gucciOneTwo from '../../assets/img/shoes/gucci/gucci1-2.jpg'
import gucciOneThree from '../../assets/img/shoes/gucci/gucci1-3.jpg'
import AirTwoBestOne from '../../assets/img/shoes/cool/AirBest.jpg'
import AirJordanFourBestTwo from '../../assets/img/shoes/cool/AirJordan4-2Best2.jpeg'
//logo
import gucciLogo from '../../assets/img/icons/gucci.png'
//start
const Hero3 = () => {
     //  shoes change position 
  const [bigShoes,setBigShoes] = useState(gucciOneOne);
  const changeShoes = (newShoes: SetStateAction<string>) => {
    setBigShoes(newShoes);
  }
  return (
    <div className=' mt-2 flex gap-2 max-md:flex-col'>
        {/* shoes information */}
        <div className=" flex flex-col gap-4 w-1/2">
            <div className=" flex gap-2">
                <h2 className=" text-5xl font-bold"> <span className=' text-orange-600'>Gucci</span> Shoes </h2>
                <img src={gucciLogo} alt="gucciLogo" className=' h-12 mt-1 cursor-pointer' />
            </div>
            <p className=" text-gray-400">
                Experience unparalleled styled performance <br />  
                styled performance with Nike shoes.
            </p>
            {/* buy button */}
            <div className=" flex gap-4">
                <a href="./" className=" text-lg p-2 font-bold bg-orange-600 rounded-3xl shadow-cool-o duration-300 hover:bg-orange-950  text-white">Shop Now</a>
                <a href="./" className=" text-lg p-2 font-bold bg-red-600 rounded-3xl shadow-cool duration-300 hover:bg-orange-950  text-white">Buy Now</a>
            </div>
            <div className=" flex gap-4 ml-4 mt-4">
                <div className=" flex flex-col">
                    <h3 className=" font-bold text-5xl ">
                         1.5K<span className=" text-orange-600">+</span>
                    </h3>
                    <p className=" text-base text-gray-400">Brands</p>
                </div>
                <div className=" flex flex-col">
                    <h3 className=" font-bold text-5xl">
                         410K<span className=" text-orange-600">+</span>
                    </h3>
                    <p className=" text-base text-gray-400">Shops</p>
                </div>
                <div className=" flex flex-col">
                    <h3 className=" font-bold text-5xl">
                         992K<span className=" text-orange-600">+</span>
                    </h3>
                    <p className=" text-base text-gray-400">Customer</p>
                </div>
            </div>
                {/* other image */}
                <div className=' flex flex-col gap-2'>
                    <h3 className=" text-2xl cursor-pointer text-center text-red-600 font-bold">Other Products</h3>
                    <div className=' flex gap-2'>
                        <img src={gucciOneOne} onClick={() => changeShoes(gucciOneOne)} alt="airJordanFour image"  className=' h-36 cursor-pointer shadow-lg dark:shadow-gray-950 rounded-md hover:scale-105 duration-500 '/>
                        <img src={gucciOneTwo} onClick={() => changeShoes(gucciOneTwo)} alt="airJordanFour image"  className=' h-36 cursor-pointer shadow-lg dark:shadow-gray-950 rounded-md hover:scale-105 duration-500 '/>
                        <img src={gucciOneThree} onClick={() => changeShoes(gucciOneThree)} alt="airJordanFour image"  className=' h-36 cursor-pointer shadow-lg dark:shadow-gray-950 rounded-md hover:scale-105 duration-500 '/>
                    </div>
                </div>
        </div>
        {/* big shoes */}
        <div className=' flex flex-row mt-4 gap-4 max-lg:flex-col'>
          <a href="./">
            <img src={bigShoes} alt="airJordanFourOne" className=' h-[465px] w-[465px] shadow-lg dark:shadow-gray-950  rounded-md'/>
          </a>
         <div className=' flex flex-col gap-4 max-lg:flex-row'>
            <a href="./" className=' group'>
                <img src={AirTwoBestOne} alt=" air jordan six" className=' h-56 w-56 rounded-md shadow-md dark:shadow-gray-950 hover:scale-105 duration-500'/>
                <span className=' hidden group-hover:block text-2xl bg-white text-orange-600 px-2 py-1 rounded-md ml-6 font-bold absolute -mt-12 z-20'>32000RFW</span>
            </a>
            <a href="./" className=' group duration-500'>
                <img src={AirJordanFourBestTwo} alt=" air jordan five" className=' h-56 w-56 rounded-md shadow-md dark:shadow-gray-950 hover:scale-105 duration-500'/>
                <span className=' hidden group-hover:block text-2xl bg-white text-orange-600 px-2 py-1 rounded-md ml-6 font-bold absolute -mt-12 z-20'>35000RFW</span>
            </a>
         </div>
        </div>
    </div>
    
  )
}

export default Hero3