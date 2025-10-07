import React, { useEffect, useState } from 'react';
// icons
import { CgDarkMode } from 'react-icons/cg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoriesAll from './CategoriesAll';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import TopProduct from './TopProduct';
import BrunoRwandaSneakersNikeJordanOne1 from './buy/BrunoRwandaSneakersNikeJordanOne1';
import BuyNikeJordanOne1BuyPage from './buy/BuyNikeJordanOne1BuyPage';
import FirstNav from './nav/FirstNav';
import SecondNav from './nav/SecondNav';

const Navbar = (props: {
  toggleDarkMode: React.MouseEventHandler<HTMLButtonElement> | undefined;
  DarkMode: any;
}) => {
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
      <header
        className={`navbar ${
          hideNavbar
            ? 'hidden'
            : ' flex flex-col fixed z-50 w-full shadow-cool-h bg-white dark:bg-zinc-950'
        }`}
      >
        {/* Dark mode button */}
        <div>
          <button
            type="button"
            className="font-bold text-3xl text-orange-600 dark:text-orange-600 absolute text-end ml-[94.5%] mt-5"
            onClick={props.toggleDarkMode}
          >
            <CgDarkMode />
          </button>
        </div>
        {/* First nav */}
        <div className="p-2 ">
          <FirstNav />
        </div>
        {/* Second nav */}
        <div className="">
          <SecondNav />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesAll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/topProduct" element={<TopProduct />} />
        <Route path="/nike" element={<BuyNikeJordanOne1BuyPage />} />
        <Route
          path="/BrunoRwanda/sneakers/Nike/jordanOne/1"
          element={<BrunoRwandaSneakersNikeJordanOne1 />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navbar;
