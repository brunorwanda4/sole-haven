//gucci logo
import gucciIcon from '../../assets/img/icons/gucci.png'
//start GucciPopular1 information
const GucciPopular1Inf = () => {
  return (
   <div className=' flex flex-col max-lg:gap-2 max-md:gap-1 gap-1'>
     <div className=' flex flex-row gap-2'>
            <h2 className=" font-bold text-3xl font-sans text-gray-800 dark:text-gray-500">
              Best Shoes From <span className=' text-orange-600'>Gucci</span>
            </h2>
           <img src={gucciIcon} alt="Gucci logo" className=' h-10 w-12 ' />
         </div>
         <p className=' flex text-base text-gray-600'>
            Experience unparalleled styled performance with Nike shoes, <br /> 
            crafted to elevate your every step.
          </p>
          <div className=' mt-1 flex flex-row md:gap-4 gap-3 transition-cool'>
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
            <div className="flex flex-row gap-6 mt-4">
             <a href="./" className=' font-bold  transition-cool bg-red-600 shadow-cool hover:bg-orange-950 text-white text-base p-1 pl-2 h-8 w-24 rounded-3xl '>
                 Shop Now
             </a>
             <a href="./" className='  font-bold  transition-cool bg-orange-600 shadow-cool-o hover:bg-orange-950 text-white text-base p-1 pl-2 h-8 w-24 rounded-3xl '>
                35000Frw
             </a>
            </div>
   </div>
  )
}

export default GucciPopular1Inf