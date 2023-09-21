//icon
import {BsSearch} from 'react-icons/bs'
//start search from
const SearchFrom = () => {
  return (
    <form action="" className=' flex flex-row gap-1 mt-2'>
     <input type="search" placeholder='Search here' className='search h-10 w-80 rounded-md border-spacing-9 p-2 outline-none text-slate-950 border-2 border-orange-600 dark:bg-transparent dark:text-white'/>
     <button className=' text-white bg-orange-600 h-10 w-10 p-3 rounded-md cursor-pointer hover:bg-orange-950  duration-300'>
         <BsSearch/>
     </button>
    </form>
  )
}

export default SearchFrom