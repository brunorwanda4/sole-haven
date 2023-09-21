import { useState } from "react"
import { useMatch,NavLink } from "react-router-dom"
//icons 
import {FaHome,FaChevronDown,FaChevronUp} from 'react-icons/fa'
import {BsMenuButtonWideFill,BsStarFill,BsCartCheckFill,BsCheckAll,BsList,} from 'react-icons/bs'
import CategoriesForm from "./CategoriesForm"
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
  return (
    <nav className=" p-1 px-2 ">
      {/* menu button */}
      <button className=" text-2xl md:hidden" onClick={toggleMenu}>
        <BsList/>
      </button>
      {/* pages */}
      <div className={`${menu ? 'visible' : 'hidden'}`}>
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
    </nav>
  )
}

export default SecondNav