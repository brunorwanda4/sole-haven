import { useState,useEffect } from 'react'
//icons

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
  // nike one image random
  const [nikeOne, setNikeOne] = useState([nikeOneOne, nikeOneTwo,  nikeOneThree]);
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
  const [nikeTwo,setNikeTwo] = useState([nikeTwoOne,nikeTwoTwo,nikeTwoThree])
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
  const [nikeThree, setNikeThree]=useState ([nikeThreeOne,nikeThreeTwo,nikeThreeThree]);
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
    <div className=' flex flex-row m-4'>
        {/* shoes information */}
        <div className=' hidden sm:flex flex-col gap-2 transition-cool'>
            {/* shoes header */}
            <h1 className=' font-bold text-4xl md:text-5xl  transition-cool bg-white'>
                The New Arrival <br />
                <span className=' text-orange-600'> Nike</span> Shoes
            </h1>
            {/* information */}
            <p className=' text-gray-600 text-sm md:text-base transition-cool md:mt-4 md:mt-3 '>
                Discover style Nike arrivals, quality comfort. 
                <br />and innovation for your active life.
            </p>
            {/* buy link */}
            <a href="./" className=' font-bold  transition-cool bg-orange-950 shadow-cool hover:bg-orange-600 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool md:mt-8 mt-4'>
                Shop Now
            </a>
            <a href="./" className=' md:ml-44 ml-28  md:-mt-12 -mt-10  font-bold  transition-cool bg-orange-600 shadow-cool-o hover:bg-orange-950 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool '>
                3500Frw
            </a>
            {/* customer */}
            <div className=' md:mt-8 mt-4 flex flex-row md:gap-4 gap-3 transition-cool'>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        1K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-700 '>
                        Brands
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        250K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-700 '>
                        Shops
                    </span>
                </div>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' font-bold text-3xl md:text-4xl font-mono'>
                        750K<span className=' text-orange-600'>+</span>
                    </h2>
                    <span className=' text-gray-700 '>
                        Customer
                    </span>
                </div>
            </div>
        </div>
        {/* shoes title sm */}
        <div className=' flex flex-col  sm:hidden absolute -mt-4 gap-1'>
        <h1 className=' font-bold text-4xl transition-cool '>
                The New Arrival <br />
                <span className=' text-orange-600'> Nike</span> Shoes
            </h1>
            <a href="./" className=' font-bold  transition-cool bg-orange-950 shadow-cool hover:bg-orange-600 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool mt-2'>
                Shop Now
            </a>
            <a href="./" className='font-bold transition-cool bg-orange-600 shadow-cool-o hover:bg-orange-950 text-white md:h-10 md:w-28 md:p-2 md:pl-4 text-base p-1 pl-2 h-8 w-24 rounded-3xl animation-cool ml-28 -mt-[38px]'>
                3500Frw
            </a>
        </div>
        {/* shoes image */}
        <div className=' flex lg:flex-row flex-col'>
           <a href="./">
             <img src={randomNikeOne} alt=" Jordan one image" className=' md:h-96 md:w-auto h-72'  />
           </a>
            {/* anther product image */}
            <div className=' gap-4 flex lg:flex-col flex-row lg:pt-0 pt-10'>
                <a href="./">
                 <img src={randomNikeTwo} alt="Jordan two image" className=' h-44 w-44 rounded-md shadow-xl -mt-16 shadow-cool-s transition-cool'/>
                </a>
                <a href="./">
                 <img src={randomNikeThree} alt="Nike sport shoes image" className=' h-44 w-44 rounded-md shadow-xl lg:-mt-0 -mt-16 shadow-cool-s transition-cool'/>
                </a>

            </div>
        </div>

    </div>
    
  )
}

export default Hero1