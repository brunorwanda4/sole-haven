//images
import BrunoRwanda from '../../assets/img/people/BrunoRwanda.jpg'
// icons
import { BsHeartFill, BsSearch } from 'react-icons/bs'
//start
const BuyNikeJordanOne1Comments = () => {
  return (
    <div className=' flex flex-col bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg dark:shadow-gray-950 w-80'>
       
        {/* product information */}
        <div className='flex flex-col gap-1'>
            <div className=" flex flex-row gap-2 ">
                <img src={BrunoRwanda} alt=" bruno rwanda image" className=' h-12 rounded-full' />
                <h3 className='text-3xl font-medium mt-2'>Bruno Rwanda</h3>
            </div>
            <div className=" flex flex-row -mt-2 gap-2 ml-12">
                <div>
                  <span className=" text-green-600 font-mono cursor-pointer hover:text-orange-600">comment:</span>
                  <span className=" text-white">6</span>
                </div>
                <span className=" text-green-600 font-mono cursor-pointer hover:text-orange-600">likes:</span>
                <span className=" text-white">1084</span>
                <button className=' flex text-orange-600 hover:text-red-900 mt-1 hover:scale-105 duration-300'>
                  <BsHeartFill/>
                </button>
            </div>
        </div>
       {/* comments */}
       <div className=' flex flex-col gap-3'>
          <div className=" text-cent dark:border border border-gray-400 rounded-md">
              <div className=' flex border-b justify-between px-4 dark:border-b  border-gray-400 '>
              <h3 className='text-xl text-center'>Product comment</h3>
              <button className=' cursor-pointer font-bold'><BsSearch/></button>
              </div>
           <ul className=' h-56 overflow-scroll overflow-x-hidden'>
              <li className=' p-1 flex gap-2'>
                <img src={BrunoRwanda} alt=" Bruno Rwanda image" className=' h-8 rounded-full' />
                <p className=' dark:bg-gray-600 bg-gray-400 p-1 rounded-2xl text-sm font-thin w-44'>This page is not read 🤕. </p>
                <span className=' flex flex-col cursor-pointer'>...</span>
              </li>
              
           </ul>
          </div>
          <div className=' flex gap-2'>
            <textarea placeholder='comment' className=' bg-transparent border-2 rounded-md w-64 h-10 outline-none p-1 list-none'/>
            <button className=' font-bold p-1 bg-orange-600 h-10 rounded-md cursor-pointer text-base text-white duration-300 hover:scale-105 hover:bg-red-900'>
              POST
            </button>
          </div>
       </div>
    </div>
  )
}

export default BuyNikeJordanOne1Comments