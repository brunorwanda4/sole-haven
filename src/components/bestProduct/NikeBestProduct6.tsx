//icons
import {FaStar,FaShare} from 'react-icons/fa'
import {BsHeartFill,BsChatLeftFill} from 'react-icons/bs'
//image
import BrunoRwanda from '../../assets/img/people/BrunoRwanda.jpg'
//nike 6
import nikeSix from '../../assets/img/shoes/nike/nike6.jpg'
//start
const NikeBestProduct6 = () => {
  return (
    <div className='dark:bg-gray-800 pb-8 bg-gray-100 p-4 w-64 flex flex-col gap-2 rounded-md shadow-xl'>
        <img src={nikeSix} alt="Air Force One image" className=' rounded-md h-44 w-56 lg:h-52 lg:w-64' />
        <div>
           {/* product person image start icons */}
           <div className=' flex gap-2'>
              <div className=' flex gap-1 cursor-pointer'>
                <img src={BrunoRwanda} alt=" BrunoRwanda image" className=' h-8 rounded-full cursor-pointer  hover:scale-105 duration-300'/>
                <h4 className=' flex font-mono text-base dark:text-gray-400 text-gray-500 mt-1'>Bruno Rwanda</h4>
             </div>
              <div className=' flex gap-1 mt-1'>
                <FaStar className="text-orange-600 text-xl"/>
                <span className=' text-gray-500 font-medium text-base font-mono leading-normal '>
                  (3.7)
                </span>
              </div>
           </div>
           {/* product name */}
           <h3 className=' font-bold text-xl'>
              Air Force 1
           </h3>
           <div className=' flex flex-row gap-6 pt-4'>
              {/* amount */}
              <a href='./' className=' bg-orange-600 text-white rounded-lg shadow-cool-o transition-cool hover:bg-orange-950 p-1 font-bold font-mono text-xl'>
                24000Rfw
              </a>
              {/* share and like */}
              <div className=" flex flex-row gap-4 mt-3">
                <button className=' text-2xl hover:scale-110 duration-300 hover:text-orange-600 active:text-orange-600 dark:text-white text-gray-500  dark:hover:text-orange-600'>
                  <FaShare/>
                </button>
                <button className=' text-2xl hover:scale-110 duration-300 hover:text-orange-600 active:text-orange-600 dark:text-white text-gray-500  dark:hover:text-orange-600'>
                  <BsHeartFill/>
                </button>
                <button className=' text-2xl hover:scale-110 duration-300 hover:text-orange-600 active:text-orange-600 dark:text-white text-gray-500  dark:hover:text-orange-600'>
                  <BsChatLeftFill/>
                </button>
              </div>
           </div>
        </div>
    </div>
  )
}

export default NikeBestProduct6