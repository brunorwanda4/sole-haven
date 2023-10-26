//icon
import { FaCamera, FaSearch } from 'react-icons/fa'
//start search from
const SearchFrom = () => {
  return (
    <form action="" className=' flex flex-row gap-1 mt-2'>
     <input type="search" placeholder='Search here' className='search h-10 w-80 rounded-md border-spacing-9 p-2 outline-none text-slate-950 border-2 border-orange-600 dark:bg-transparent dark:text-white focus:outline-none appearance-none' autoFocus/>
     <button role='search' name='search' type='submit' className=' text-white bg-orange-600 h-10 w-10 p-2 text-2xl rounded-md cursor-pointer hover:bg-orange-950  duration-300 '>
         <FaSearch/>
     </button>
     <button className="text-white bg-orange-600 h-10 w-10 p-2 rounded-md cursor-pointer hover:bg-orange-950  duration-300 text-2xl">
      <FaCamera/>
     </button>
    </form>
  )
}

export default SearchFrom