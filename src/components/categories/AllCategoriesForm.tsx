
// logo
import shoesIcon from '../../assets/img/icons/shoesIcon.png'
import sneakersShoesIcon from "../../assets/img/icons/sneakerShoesIcon.png"
import AthleticShoesIcon from '../../assets/img/icons/AthleticShoesIcon.png'
import CasualShoesIcon from '../../assets/img/icons/CasualShoesIcon.png'
import FormalShoesIcon from '../../assets/img/icons/FormalShoesIcon.png'
import bootsShoesIcon from '../../assets/img/icons/bootsShoesIcon.png'
import sandalsShoesIcon from '../../assets/img/icons/sandalsShoesIcon.png'
import espadrilleShoesIcon from '../../assets/img/icons/espadrilleShoesIcon.png'
import hikingShoesIcon from '../../assets/img/icons/hikingShoesIcon.png'
import highHeelsShoesIcon from '../../assets/img/icons/highHeelsShoesIcon.png'
import babyShoesIcon from '../../assets/img/icons/babyShoesIcon.png'
//start all categories form
const AllCategoriesForm = () => {
  return (
    <div className=' bg-white rounded-md w-60 shadow-lg dark:shadow-gray-950 dark:bg-gray-800'>
        {/* categories header */}
        <div className=" flex flex-row gap-3 p-2 border-b-2 border-b-orange-600">
            <img src={shoesIcon} alt="shoesIcon in cycle" className=" h-8" />
            <h3 className=" text-lg font-bold mt-2">
              Shoes Categories
            </h3>
        </div>
        {/* categories list */}
        <ul className=' flex flex-col max-h-60 overflow-scroll overflow-x-hidden'>
            <li className=' group hover:bg-orange-600 border-b-2 border-b-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={sneakersShoesIcon} alt="sneakersShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Sneakers
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 duration-300 transition-all ease-in-out border-b-2 border-b-orange-300 '>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={AthleticShoesIcon} alt="AthleticShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                      Athletic Shoes
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={babyShoesIcon} alt="babyShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                      Baby Shoes
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={highHeelsShoesIcon} alt="highHeelsShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        High Heels
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={CasualShoesIcon} alt="CasualShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Casual Shoes
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={FormalShoesIcon} alt="FormalShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Formal Shoes
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={bootsShoesIcon} alt="bootsShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Boots
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={sandalsShoesIcon} alt="sandalsShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Sandals
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={espadrilleShoesIcon} alt="espadrilleShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Espadrilles
                    </span>
                </a>
            </li>
            <li className=' group hover:bg-orange-600 border-t-2 border-t-orange-300 duration-300 transition-all ease-in-out'>
                <a href="./" className='flex flex-row gap-3 p-2 group-hover:bg-orange-100'>
                    <img src={hikingShoesIcon} alt="hikingShoesIcon" className="h-8" />
                    <span className='text-base font-medium mt-1 group-hover:text-orange-600'>
                        Hiking Shoes
                    </span>
                </a>
            </li>
            
            
        </ul>
    </div>
  )
}

export default AllCategoriesForm