import {useRef} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//pages
import CoolBestProduct from "./bestProduct/CoolBestProduct"
import MaqueenBestProduct from "./bestProduct/MaqueenBestProduct"
import NikeBestProduct6 from "./bestProduct/NikeBestProduct6"
import NikeBestProduct1 from "./bestProduct/nikeBestProduct1"
import Hero1 from "./hero/Hero1"
import Hero3 from "./hero/Hero3"
import Hero2 from "./hero/Hero2"
import {BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
// import JordanBest6 from "./popular/JordanBest6"
//start
const Home = () => {
  // slide heroes
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 9000,
  };
   // Go to the previous slide
   const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Go to the next slide
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <section className=" pt-24 p-2 gap-4 flex flex-col pb-4">
      <Slider ref={sliderRef} {...settings} className=" mx-4">
        {/* slide image */}
       <div>
        <Hero2/>
       </div>
       <div>
        <Hero1/>
       </div>
       <div>
        <Hero3/>
       </div>
      </Slider>
       {/* slide button */}
       <div className=" flex justify-center items-center gap-16">
        <button className=" font-bold text-3xl text-white shadow-md dark:shadow-gray-950 duration-300 hover:scale-105 p-1 bg-orange-600 rounded-md" onClick={goToPrevSlide}><BsArrowLeftShort/></button>
        <button className=" font-bold text-3xl text-white shadow-md dark:shadow-gray-950 duration-300 hover:scale-105 p-1 bg-orange-600 rounded-md" onClick={goToNextSlide}><BsArrowRightShort/></button>
      </div>
      {/* best product */}
      <div className="  max-md:p-0 max-lg:p-2 p-4 flex-col flex gap-4 max-lg:gap-3 max-md:gap-2 max-sm:gap-1">
        <h2 className=" font-bold max-md:text-4xl max-sm:text-3xl text-5xl ">
          Our <span className=" text-orange-600">Popular</span> Products
        </h2>
        {/* <JordanBest6/> */}
        <div className="gap-2 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-x-2 max-[412px]:grid-cols-1">
         <NikeBestProduct1/>
         <MaqueenBestProduct/>
         <NikeBestProduct6/>
         <CoolBestProduct/>
        </div>
      </div>
      {/* popular product */}
      <div className=" lg:gap-4 gap-6 flex flex-col pl-8">
        {/* product brand */}
        <div>
         
        </div>
      </div>
      {/* footer padding */}
    </section>
  )
}

export default Home