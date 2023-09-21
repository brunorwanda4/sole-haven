//images
import BrunoRwanda from '../../assets/img/people/BrunoRwanda.jpg'
// icons
import { FaStar } from 'react-icons/fa'
import { SiNike } from '@icons-pack/react-simple-icons'
//start
const BuyNikeJordanOne1Comments = () => {
  return (
    <div className=' flex flex-col bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg dark:shadow-gray-950'>
       
        {/* product information */}
        <div className='flex flex-col gap-1'>
            <div className=" flex flex-row gap-2 ">
                <img src={BrunoRwanda} alt=" bruno rwanda image" className=' h-12 rounded-full' />
                <h3 className='text-3xl font-medium mt-2'>Bruno Rwanda</h3>
            </div>
            <div className=" flex flex-row -mt-2 gap-2 ml-12">
                <div>
                  <span className=" text-green-600 font-mono cursor-pointer hover:text-orange-600">Top:</span>
                  <span className=" text-gray-500 hover:text-white">Seller</span>
                </div>
                <span className=" text-green-600 font-mono cursor-pointer hover:text-orange-600">Products:</span>
                <span className=" text-gray-500 hover:text-white">84</span>
                <FaStar className=" text-orange-600 text-base mt-1 hover:text-red-600"/>
            </div>
        </div>
       {/* comments */}
       <div>
          <div className=" text-cent">
            <h2 className=" text-2xl font-bold ">Product <span>comments</span></h2>
          </div>
       </div>
    </div>
  )
}

export default BuyNikeJordanOne1Comments