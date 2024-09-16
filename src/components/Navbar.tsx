import React, { useState, useEffect,} from 'react';
// icons
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CgDarkMode} from 'react-icons/cg'
import Home from './Home';
import TopProduct from './TopProduct';
import Contact from './Contact';
import Footer from './Footer';
import Nike from './buy/dist/Nike';
import FirstNav from './nav/FirstNav';
import SecondNav from './nav/SecondNav';
import CategoriesAll from './CategoriesAll';
import BrunoRwandaSneakersNikeJordanOne1 from './buy/BrunoRwandaSneakersNikeJordanOne1';

const Navbar = (props: { toggleDarkMode: React.MouseEventHandler<HTMLButtonElement> | undefined; DarkMode: any; }) => {
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
      <header className={`navbar ${hideNavbar ? 'hidden' : ' flex flex-col fixed z-50 w-full shadow-cool-h bg-white dark:bg-zinc-950'}`}>
        {/* Dark mode button */}
        <div>
          <button
            type="button" className="font-bold text-3xl text-orange-600 dark:text-orange-600 absolute text-end ml-[94.5%] mt-5" onClick={props.toggleDarkMode} >
             <CgDarkMode />
          </button>
        </div>
        {/* First nav */}
        <div className=" p-2">
          <FirstNav />
        </div>
        {/* Second nav */}
        <div className="">
          <SecondNav />
        </div>
      </header>
      <Routes>
          <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<CategoriesAll/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/topProduct' element={<TopProduct/>} />
        <Route path='/nike' element={<Nike/>} />
        <Route path='/BrunoRwanda/sneakers/Nike/jordanOne/1' element={<BrunoRwandaSneakersNikeJordanOne1/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navbar;
