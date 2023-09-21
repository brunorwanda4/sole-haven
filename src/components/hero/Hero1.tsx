/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//icons
import {BsArrowRight} from 'react-icons/bs'
// nike 1 shoes
import nikeOneOne from '../../assets/img/shoes/nike/nike1.jpg'
import nikeOneTwo from '../../assets/img/shoes/nike/nike1-2.jpg'
import nikeOneThree from '../../assets/img/shoes/nike/nike1-3.jpeg'
// nike 2 shoes
import nikeTwoOne from '../../assets/img/shoes/nike/nike2.jpg'
import nikeTwoTwo from '../../assets/img/shoes/nike/nike2-2.jpg'
import nikeTwoThree from '../../assets/img/shoes/nike/nike2-3.jpg'
// nike 3 shoes
import nikeThreeOne from '../../assets/img/shoes/nike/nike3.jpg'
import nikeThreeTwo from '../../assets/img/shoes/nike/nike3-2.jpg'
import nikeThreeThree from '../../assets/img/shoes/nike/nike3-3.jpg'
//start
const Hero1 = () => {
  //title
  useEffect(() => {
    document.title ="ChikKick "
  })
  // nike one image random
  const [nikeOne] = useState([nikeOneOne, nikeOneTwo,  nikeOneThree]);
  const [randomNikeOne, setRandomNikeOne] = useState('');

  useEffect(() => {
    getRandomNikeOne();
  }, []);

  const getRandomNikeOne = () => {
    const nikeImageOneIndex = Math.floor(Math.random() * nikeOne.length);
    const randomNikeOne = nikeOne[nikeImageOneIndex];
    setRandomNikeOne(randomNikeOne);
  };
  // nike two image random
  const [nikeTwo] = useState([nikeTwoOne,nikeTwoTwo,nikeTwoThree])
  const [randomNikeTwo, setRandomNikeTwo] = useState('');

  useEffect(() => {
    getRandomNikeTwo();
  }, []);

  const getRandomNikeTwo = () => {
    const nikeImageTwoIndex = Math.floor(Math.random() * nikeTwo.length);
    const randomNikeTwo = nikeTwo[nikeImageTwoIndex];
    setRandomNikeTwo(randomNikeTwo);
  };
  // nike three images random
  const [nikeThree]=useState ([nikeThreeOne,nikeThreeTwo,nikeThreeThree]);
  const [randomNikeThree, setRandomNikeThree] = useState('');

  useEffect(() => {
    getRandomNikeThree();
  }, []);

  const getRandomNikeThree = () => {
    const nikeImageThreeIndex = Math.floor(Math.random() * nikeThree.length);
    const randomNikeThree = nikeThree[nikeImageThreeIndex];
    setRandomNikeThree(randomNikeThree);
  };
  
  return (
    <div className=' flex flex-col m-4 md:flex-row'>
        {/* shoes information */}
        <div className=' flex flex-col gap-2 transition-cool'>
            {/* shoes header */}
            <h1 className=' font-bold text-4xl md:text-5xl  transition-cool '>
                The New Arrival <br />
                <span className=' text-orange-600'> Nike</span> Shoes
            </h1>
            {/* information */}
            <p className=' text-gray-600 text-sm md:text-base transition-cool md:mt-4 '>
            Experience unparalleled <br />  
            styled performance with Nike shoes, <br /> <br />
            crafted to elevate your every step.
            </p>
            {/* buy link */}
           <div className=' flex flex-row justify-between px-10 pt-4 text-start'>
             <NavLink to="/nike" className=' text-white rounded-3xl shadow-cool hover:bg-orange-950 duration-300 font-bold bg-red-600 p-2 '>
                Shop Now
              </NavLink>
             <NavLink to="/BrunoRwanda/sneakers/Nike/jordanOne/1" className=' text-white rounded-3xl shadow-cool-o hover:bg-orange-950 duration-300 font-bold bg-orange-600   p-2'>
                35000Frw
             </NavLink>
             {/* next btn */}
             <button onClick={() => getRandomNikeOne()}>
              <BsArrowRight/>
             </button>
           </div>
            {/* customer */}
            <div className=' md:mt-8 mt-4 flex flex-row md:gap-4 gap-3 transition-cool'>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        1K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Brands
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        250K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Shops
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        750K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-400 '>
                        Customer
                    </span>
                </div>
            </div>
        </div>
        {/* shoes image */}
        <div className=' flex lg:flex-row flex-col'>
           <NavLink to="/BrunoRwanda/sneakers/Nike/jordanOne/1">
             <img src={randomNikeOne} alt=" Jordan one image" className=' md:h-96 md:w-auto h-72 rounded-md shadow-lg dark:shadow-gray-950'  />
           </NavLink>
            {/* anther product image */}
            <div className=' gap-4 flex flex-col mt-16 max-lg:flex-row max-xl:ml-4'>
                <a href="./">
                 <img src={randomNikeTwo} alt="Jordan 1 Mid " className=' h-44 w-44 rounded-md shadow-lg -mt-16 shadow-cool-s transition-cool dark:shadow-gray-950'/>
                </a>
                <a href="./">
                 <img src={randomNikeThree} alt="Nike sport shoes image" className=' h-44 w-44 rounded-md shadow-lg lg:-mt-0 -mt-16 shadow-cool-s transition-cool dark:shadow-gray-950'/>
                </a>
            </div>
        </div>

    </div>
    
  )
}

export default Hero1