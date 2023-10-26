//images
import { useState } from 'react'
//logos
import sneakersIcon from '../../assets/img/icons/sneakerShoesIcon.png'
import  AthleticIcon from '../../assets/img/icons/AthleticShoesIcon.png'
import babyShoesIcon  from '../../assets/img/icons/babyShoesIcon.png'
import highHeelsShoesIcon from '../../assets/img/icons/highHeelsShoesIcon.png'
import casualShoesIcon from '../../assets/img/icons/CasualShoesIcon.png'
import formalShoesIcon from '../../assets/img/icons/FormalShoesIcon.png'
import espadrillesShoesIcon from '../../assets/img/icons/espadrilleShoesIcon.png'
import bootsShoesIcon from '../../assets/img/icons/bootsShoesIcon.png'
import hikingShoesIcon from '../../assets/img/icons/hikingShoesIcon.png'
import sportIcon from '../../assets/img/icons/sportIcon.png'
import sandalsIcon from '../../assets/img/icons/sandalsShoesIcon.png'
// img
import airJordan13 from '../../assets/img/shoes/cool/AirJordan13-2Best.jpeg'
import athleticShoes from '../../assets/img/shoes/onther/athleticShoes.jpg'
import babyShoes from '../../assets/img/shoes/cool/babyShoes1.jpeg'
import highHeels from '../../assets/img/shoes/cool/highHeels.jpeg'
import casualShoes from '../../assets/img/shoes/cool/casualShoes.jpg'
import formal from '../../assets/img/shoes/cool/formal1-2-image.jpg'
import sandals from '../../assets/img/shoes/cool/sandals.jpeg'
import bootsShoes from '../../assets/img/shoes/sport/boots.jpeg'
import sport from '../../assets/img/shoes/sport/sportShoes.jpeg'
import timba from '../../assets/img/shoes/sport/timba2.jpg'
//AllCategoriesForm images
const AllCategoriesFormImages = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  }
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className=' overflow-scroll overflow-x-hidden max-h-[450px] flex flex-col gap-2'>
        {/* sneakers  */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={airJordan13} alt=" airJordan13" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={sneakersIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-7xl font-allura stroke-1'>Sneakers</h3>
            </div>
        </a>
        {/* sport shoes */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={sport} alt=" sport shoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={sportIcon} alt=" sport shoes icon"  className=' h-[54px]'/>
              <h3 className=' text-7xl font-allura stroke-1'>Sports</h3>
            </div>
        </a>
        {/* Athletic */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={athleticShoes} alt=" athleticShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={AthleticIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-7xl font-allura stroke-1'> Athletic</h3>
            </div>
        </a>
        {/* baby shoes */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={babyShoes} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={babyShoesIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Baby Shoes</h3>
            </div>
        </a>
        {/* high heels */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={highHeels} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={highHeelsShoesIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>High Heels</h3>
            </div>
        </a>
        {/* casual shoes */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={casualShoes} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={casualShoesIcon} alt=" sneakersIcon"  className=' h-[48px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Casual Shoes</h3>
            </div>
        </a>
        {/* formal shoes */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={formal} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={formalShoesIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Formal Shoes</h3>
            </div>
        </a>
        {/* boots */}
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={bootsShoes} alt=" boots shoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={bootsShoesIcon} alt=" boots icons"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Boots</h3>
            </div>
        </a>
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={sandals} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={sandalsIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Sandals</h3>
            </div>
        </a>
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={babyShoes} alt="babyShoes" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={espadrillesShoesIcon} alt=" sneakersIcon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Espadrilles</h3>
            </div>
        </a>
        <a href='./' className=' group relative w-80 h-44 duration-500' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={timba} alt="timba image" className='h-44 w-80 object-cover backdrop-blur-sm rounded-lg'/>
            <div className={` ${isHover ? 'duration-500' : ''} h-44 w-80 backdrop-blur-[2px] bg -mt-44 group-hover:hidden rounded-md`}></div>
            <div className='absolute -mt-24 ml-4 flex group-hover:hidden gap-2'>
              <img src={hikingShoesIcon} alt="hiking shoes icon"  className=' h-[54px]'/>
              <h3 className=' text-5xl font-allura stroke-1'>Hiking Shoes</h3>
            </div>
        </a>
       
    </div>
  )
}

export default AllCategoriesFormImages