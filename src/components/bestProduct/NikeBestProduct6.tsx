//icons
import {FaStar} from 'react-icons/fa'
//nike 6
import nikeSix from '../../assets/img/shoes/nike/nike6.jpg'
//start
const NikeBestProduct6 = () => {
  return (
    <div className=' bg-gray-100 p-4 w-64 flex flex-col gap-2 rounded-md shadow-xl animation-cool-p'>
        <img src={nikeSix} alt="Air Force One image" className=' rounded-md h-44 w-56 lg:h-52 lg:w-64' />
        <div>
           {/* start icons */}
           <div className=' flex gap-2 text-orange-600 text-xl'>
             <FaStar/>
             <span className=' text-gray-500 font-medium text-base font-mono leading-normal '>
                (4.8)
             </span>
           </div>
           {/* product name */}
           <h3 className=' font-bold text-xl'>
             Air Force One
           </h3>
           <a href='./' className=' bg-orange-600 text-white rounded-lg shadow-cool-o transition-cool hover:bg-orange-950 p-1 font-bold font-mono text-xl ml-10 '>
             35000Rfw
           </a>
        </div>
    </div>
  )
}

export default NikeBestProduct6