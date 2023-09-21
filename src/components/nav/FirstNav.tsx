import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// icons 
import {BsCaretDownFill,BsGeoAltFill,BsBell,BsPersonFill,BsChatLeftText,} from 'react-icons/bs';
import { FaLanguage, FaShoppingCart} from 'react-icons/fa';
// logos 
import ChickWearLogo from '../../assets/img/icons/ChickWearLogo.png';
import englishIcon from '../../assets/img/icons/englishIcon.png';
import rwandaIcon from '../../assets/img/icons/rwandaIcon.png';
import CasualShoesIcon from '../../assets/img/icons/CasualShoesIcon.png';
import SearchFrom from './SearchFrom';
import NotificationFrom from './NotificationFrom';

const FirstNav = () => {
  const handName = () => {
    const name = ['Kicks ', 'Wear'];
    const inits = Math.floor(Math.random() * name.length);
    return name[inits];
  };

  const [notification, setNotification] = useState(true);
  const toggleNotification = () => {
    setNotification(!notification);
  };
  return (
    <div className="flex flex-row gap-1 justify-between">
      <NavLink to="./" className="flex flex-row">
        <img src={ChickWearLogo} alt="logo" className="h-12 w-12 -mt-2" />
        <h1 className="font-bold text-4xl text-orange-500 pt-0 ">
          <span className="text-red-600">Chick</span>
          {handName()}
        </h1>
      </NavLink>
      <div className="mt-3 flex flex-row gap-3">
        {/* languages */}
        <button className="flex flex-row cursor-pointer gap-1 dark:text-white  text-black">
          <span className="font-medium text-base flex flex-row">
            <FaLanguage className="text-2xl" />:
          </span>
          <img src={englishIcon} alt=" United kingdom frag" className="h-5 w-5" />
          <BsCaretDownFill className="text-base" />
        </button>
        {/* location */}
        <button className="flex flex-row gap-1 cursor-pointer">
          <span className="font-medium text-base flex flex-row">
            <BsGeoAltFill />:
          </span>
          <img src={rwandaIcon} alt="Rwanda frag" className="h-5 w-5" />
          <BsCaretDownFill className="text-base" />
        </button>
        {/* product of type */}
        <button className="flex flex-row gap-2 cursor-pointer">
          <span className="font-medium text-base flex flex-row">
            <FaShoppingCart className="text-xl" />:
          </span>
          <img src={CasualShoesIcon} alt=" smartShoesIcon" className="h-5 w-5" />
          <BsCaretDownFill className="text-base" />
        </button>
      </div>
      <div className="max-lg:hidden">
        <SearchFrom />
      </div>
      <div className="mt-4 gap-6 flex flex-row">
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
      <div className="mt-2 flex flex-row gap-2">
        {/* login or create account */}
        <button className="text-3xl font-bold text-orange-950 hover:text-orange-600 duration-300">
          <BsPersonFill />
        </button>
      </div>
    </div>
  );
};

export default FirstNav;
