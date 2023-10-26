/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from 'react-router-dom'
import { useState,SetStateAction } from 'react'
//image
import gucciOneOne from '../../assets/img/shoes/nike/nike1copy.jpg'
import gucciOneTwo from '../../assets/img/shoes/nike/nike1-2copy.jpg'
import gucciOneThree from '../../assets/img/shoes/nike/nike1-3copy.jpg'
import AirTwoBestOne from '../../assets/img/shoes/nike/nike2-2.jpg'
import AirJordanFourBestTwo from '../../assets/img/shoes/nike/nike3.jpg'
import { SiNike } from 'react-icons/si'
//start
const Hero1 = () => {
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
                <h2 className=" text-5xl font-bold">Air <span className='text-orange-600'>Jordan</span> 1</h2>
                <SiNike className=" text-5xl text-orange-600"/>
            </div>
            <p className=" text-gray-400">
                Experience unparalleled styled performance <br />  
                styled performance with Nike shoes.
            </p>
            {/* buy button */}
            <div className=" flex gap-4">
                <a href="./" className=" text-lg p-2 font-bold bg-orange-600 rounded-3xl shadow-cool-o duration-300 hover:bg-orange-950  text-white">Shop Now</a>
                <NavLink to="BrunoRwanda/sneakers/Nike/jordanOne/1" className=" text-lg p-2 font-bold bg-red-600 rounded-3xl shadow-cool duration-300 hover:bg-orange-950  text-white">28kFRW</NavLink>
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
          <NavLink to="BrunoRwanda/sneakers/Nike/jordanOne/1">
            <img src={bigShoes} alt="airJordanFourOne" className=' h-[465px] w-[465px] shadow-lg dark:shadow-gray-950  rounded-md'/>
          </NavLink>
         <div className=' flex flex-col gap-4 max-lg:flex-row'>
            <a href="./" className=' group'>
                <img src={AirTwoBestOne} alt=" air jordan six" className=' h-56 w-56 rounded-md shadow-md dark:shadow-gray-950 hover:scale-105 duration-500'/>
                <span className=' hidden group-hover:block text-2xl bg-white text-orange-600 px-2 py-1 rounded-md ml-6 font-bold absolute -mt-12 z-20'>22KRFW</span>
            </a>
            <a href="./" className=' group duration-500'>
                <img src={AirJordanFourBestTwo} alt=" air jordan five" className=' h-56 w-56 rounded-md shadow-md dark:shadow-gray-950 hover:scale-105 duration-500'/>
                <span className=' hidden group-hover:block text-2xl bg-white text-orange-600 px-2 py-1 rounded-md ml-6 font-bold absolute -mt-12 z-20'>20KRFW</span>
            </a>
         </div>
        </div>
    </div>
    
  )
}

export default Hero1