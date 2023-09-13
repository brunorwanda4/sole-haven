import { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
//icons
import {FaHome,} from 'react-icons/fa'
import {BsPersonFill,BsPhoneFill,BsShop,BsPeopleFill,BsTwitter,BsFacebook,BsInstagram,BsTelegram} from 'react-icons/bs'
// logo
import logo from "../assets/img/logo.png"
//pages
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';
//start
const Navbar = () => {
    //hand name
    const handName= () => {
        const name = ['SELL', 'BUY'];
        const inits =Math.floor(Math.random() * name.length)
        return name[inits]
    }
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
      let prevScrollPos = window.pageYOffset;
      
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const scrollingDown = currentScrollPos > prevScrollPos;
        
        // If scrolling down, hide the navbar; if scrolling up, show it
        setHideNavbar(scrollingDown);
        prevScrollPos = currentScrollPos;
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
   <Router>
     <header className={`navbar ${hideNavbar ? 'hidden' : 'text-orange-950 p-1 md:p-[6px] flex flex-row gap-4 justify-between fixed w-full bg-white shadow-cool-h'}`}>
        <NavLink to="/"  className=" flex flex-row transition-cool transform-cool group-even:hover:text-orange-500">
            <img src={logo} alt=" logo image" className=" cursor-pointer h-12 w-12 md:h-16 md:w-16" />
            <h1 className=" font-bold text-5xl md:text-6xl hover:text-orange-600 transition-cool cursor-pointer hidden sm:flex">{handName()}</h1>
        </NavLink>
        <nav className=' flex flex-row '>
            {/* pages */}
            <ul className=' flex flex-row gap-2 md:mt-5 mt-3'>
                <li >
                    <NavLink to="/" className=' flex flex-row gap-1 cursor-pointer hover:text-orange-600 transition-cool transition-cool transform-cool'>
                     <FaHome className=' text-3xl transition-cool'/>
                     <span className=' font-bold text-2xl  hidden lg:flex transition-cool'>Home</span>
                    </NavLink>
                </li>
                <li >
                   <NavLink to="/about" className=' flex flex-row gap-1 cursor-pointer hover:text-orange-600 transition-cool transition-cool transform-cool'>
                     <BsPersonFill className=' text-3xl transition-cool'/>
                     <span className=' font-bold text-2xl hidden lg:flex transition-cool'>About</span>
                   </NavLink>
                </li>
                <li >
                    <NavLink to="/service" className=' flex flex-row gap-1 cursor-pointer hover:text-orange-600 transition-cool transition-cool transform-cool'>
                     <BsPeopleFill className=' text-3xl transition-cool'/>
                     <span className=' font-bold text-2xl hidden lg:flex transition-cool'>Service</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/product" className=' flex flex-row gap-1 cursor-pointer hover:text-orange-600 transition-cool transition-cool transform-cool'>    
                     <BsShop className=' text-3xl transition-cool'/>
                     <span className=' font-bold text-2xl hidden lg:flex transition-cool'>Product</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/contact" className=' flex flex-row gap-1 cursor-pointer hover:text-orange-600 transition-cool transition-cool transform-cool'>
                     <BsPhoneFill className=' text-3xl transition-cool'/>
                     <span className=' font-bold text-2xl hidden lg:flex transition-cool'>contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
         {/* top icons */}
         <div className=' md:mt-6 mt-4 hidden sm:flex transition-cool  flex-row gap-1 '>
                <a href="https://web.facebook.com/profile.php?id=100073088573367" className=' font-bold text-2xl transition-cool transform-cool-m hover:text-orange-600'>
                    <BsFacebook className=' transform-cool-m transition-cool '/>
                </a>
                <a href="https://www.instagram.com/bruno_rwanda/?hl=en" className=' font-bold text-2xl transition-cool transform-cool-m hover:text-orange-600'>
                    <BsInstagram className=' transform-cool-m transition-cool '/>
                </a>
                <a href="https://twitter.com/BrunoRwanda4" className=' font-bold text-2xl transition-cool transform-cool-m hover:text-orange-600'>
                    <BsTwitter className=' transform-cool-m transition-cool '/>
                </a>
                <a href="./" className=' font-bold text-2xl transition-cool transform-cool-m hover:text-orange-600'>
                    <BsTelegram className=' transform-cool-m transition-cool '/>
                </a>
            </div>
            {/* Get start */}
            <NavLink to="/contact" className=' hover:bg-orange-600 transition-cool transform-cool shadow-cool bg-orange-950 text-white rounded-md h-10 w-20 p-1 pt-[6px] font-bold md:mt-4 mt-1 transition-cool'>
                Get Start
            </NavLink>
     </header>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
     </Routes>
     <Footer/>
   </Router>
  )
}

export default Navbar