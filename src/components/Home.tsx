import CoolBestProduct from "./bestProduct/CoolBestProduct"
import MaqueenBestProduct from "./bestProduct/MaqueenBestProduct"
import NikeBestProduct6 from "./bestProduct/NikeBestProduct6"
import NikeBestProduct1 from "./bestProduct/nikeBestProduct1"
import Hero1 from "./hero/Hero1"
import GucciPopular1 from "./popular/gucciPopular1"
//start
const Home = () => {
  return (
    <section className=" pt-20 p-2 gap-4 flex flex-col">
      <div>
       <Hero1/>
      </div>
      {/* best product */}
      <div className="  max-md:p-0 max-lg:p-2 p-4 flex-col flex gap-4 max-lg:gap-3 max-md:gap-2 max-sm:gap-1">
        <h2 className=" font-bold max-md:text-4xl max-sm:text-3xl text-5xl ">
          Our <span className=" text-orange-600">Popular</span> Products
        </h2>
        <div className=" flex gap-2 lg:gap-14 max-sm:flex-col ">
         <NikeBestProduct1/>
         <MaqueenBestProduct/>
         <NikeBestProduct6/>
         <CoolBestProduct/>
        </div>
      </div>
      {/* popular product */}
      <div className=" lg:gap-4 gap-6 flex flex-col pl-8">
        {/* product brand */}
         <h1 className=" font-bold max-md:text-4xl max-sm:text-3xl text-5xl ">
           Our <span className=" text-orange-600">Best</span> Products
         </h1>
         <div className=" ">
           <GucciPopular1/>
         </div>
      </div>
      {/* footer padding */}
      <div className=" pb-4"></div>
    </section>
  )
}

export default Home