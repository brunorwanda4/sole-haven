import { useState,useEffect,useRef } from "react"
import { useMatch,NavLink } from "react-router-dom"
//icons 
import {FaHome,FaChevronDown,FaChevronUp,} from 'react-icons/fa'
import {BsMenuButtonWideFill,BsStarFill,BsCartCheckFill,BsCheckAll,BsList, BsBell, BsChatLeftText, BsCaretDownFill,} from 'react-icons/bs'
import CategoriesForm from "./CategoriesForm"
import { CgCloseR } from "react-icons/cg"
import SearchFrom from "./SearchFrom"
import NotificationFrom from "./NotificationFrom"
//start second header
const SecondNav = () => {
  // Use useMatch to determine if a route is active
  const homeIsActive = useMatch("/");
  const categoriesIsActive = useMatch("/categories");
  // menu list
  const [menu,SetMenu]=useState(true);
  const toggleMenu =() => {
    SetMenu(!menu);
    };
  //categories list
  const [categories, setCategories] = useState(true);
  const toggleCategories = () => {
    setCategories(!categories);
  };
  
  const [notification, setNotification] = useState(true);
  const toggleNotification = () => {
    setNotification(!notification);
  };
  return (
    <nav className=" p-1 px-2 max-lg:flex max-lg:justify-between">
      {/* menu button */}
      <button className=" text-2xl lg:hidden dark:text-white hover:text-orange-600 duration-300 hover:scale-105" onClick={toggleMenu}>
        {menu? <BsList/> : <CgCloseR/>} 
      </button>
      {/* pages */}
      {/* hidden list */}
      <div className={`mt-9   ${menu ? ' hidden' : 'visible'}   absolute`}>
        <BsCaretDownFill className=' text-base text-red-600 ml-1'/>
      <ul className={` flex flex-col gap-2 dark:bg-gray-800 bg-white w-64 rounded-md shadow-lg shadow-gray-950  p-2 `}>
        <li className={`hover:text-orange-600 duration-300 ${homeIsActive ? "text-orange-600" : ""}`}>
          <NavLink to="/" className=" flex flex-row gap-1">
            <FaHome className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Home</span>
          </NavLink>
        </li>
        <li className={`hover:text-orange-600 duration-300 flex flex-row gap-1 ${categoriesIsActive ? "text-orange-600" : ""}`}>
          <NavLink to="/categories" className=" flex flex-row gap-1">
            <BsMenuButtonWideFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Categories</span>
            {/* other option of categories */}
          </NavLink>
          <button className=" block font-bold text-xl mt-1" onClick={toggleCategories}>
              {categories ? <FaChevronDown/> : <FaChevronUp/>}
            </button>
          {/* other categories */}
          <div className={`${categories ? 'hidden' : 'visible'}`}>
            <CategoriesForm/>
          </div>
        </li>
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsCheckAll className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Brands</span>
          </NavLink>
        </li>
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsStarFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Popular</span>
          </NavLink>
        </li>
        {/* Sell */}
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsCartCheckFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Sell</span>
          </NavLink>
        </li>
      </ul>
      </div>
      <div className=" max-lg:hidden">
        {/* menu */}
        <ul className=" flex flex-row gap-3">
        {/* home pages */}
        <li className={`hover:text-orange-600 duration-300 ${homeIsActive ? "text-orange-600" : ""}`}>
          <NavLink to="/" className=" flex flex-row gap-1">
            <FaHome className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Home</span>
          </NavLink>
        </li>
        {/* categories */}
        <li className={`hover:text-orange-600 duration-300 flex flex-row gap-1 ${categoriesIsActive ? "text-orange-600" : ""}`}>
          <NavLink to="/categories" className=" flex flex-row gap-1">
            <BsMenuButtonWideFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Categories</span>
            {/* other option of categories */}
          </NavLink>
          <button className=" block font-bold text-xl mt-1" onClick={toggleCategories}>
              {categories ? <FaChevronDown/> : <FaChevronUp/>}
            </button>
          {/* other categories */}
          <div className={`${categories ? 'hidden' : 'visible'}`}>
            <CategoriesForm/>
          </div>
        </li>
        {/* brands */}
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsCheckAll className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Brands</span>
          </NavLink>
        </li>
        {/* popular */}
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsStarFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Popular</span>
          </NavLink>
        </li>
        {/* Sell */}
        <li className=" hover:text-orange-600 duration-300">
          <NavLink className=" flex flex-row gap-1">
            <BsCartCheckFill className=" text-2xl text-orange-600"/>
            <span className=" font-bold text-xl">Sell</span>
          </NavLink>
        </li>
      </ul>
      </div>
      <div className=" lg:hidden">
        <SearchFrom/>
      </div>
      <div className="mt-4 gap-6 flex flex-row lg:hidden">
        {/* notification */}
        <button type="button" className="text-2xl" onClick={toggleNotification}>
          <span className="absolute text-white bg-orange-600 text-sm h-5 w-5 -mt-2 rounded-md animation-cool font-bold">
            2
          </span>
          <BsBell />
        </button>
        {/* notification page */}
        <div className={`${notification ? 'hidden' : 'visible'}`}>
          <NotificationFrom />
        </div>
        {/* charts */}
        <button type="button" className="text-2xl">
          <span className="absolute text-white bg-red-600 text-sm h-5 w-5 -mt-2 rounded-md animation-cool font-bold">
            1
          </span>
          <BsChatLeftText />
        </button>
      </div>
    </nav>
  )
}

export default SecondNav