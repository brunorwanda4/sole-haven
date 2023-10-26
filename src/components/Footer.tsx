import { NavLink } from 'react-router-dom'
//logo
import shoesIcon from '../assets/img/icons/shoesIcon.png'
import gucciIcon from '../assets/img/icons/gucci.png'
//icons
import { BsGeoAltFill,BsPhone,BsFacebook,BsInstagram,BsTwitter,BsTelegram,BsSnapchat,BsChevronRight,BsBagFill} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'
import {SiNike,SiAdidas,SiPuma,SiDior,SiNewbalance} from 'react-icons/si'

//start
const Footer = () => {
     //hand name
     const handName= () => {
        const name = ['SELL', 'BUY'];
        const inits =Math.floor(Math.random() * name.length)
        return name[inits]
    }
  return (
    <footer className=' max-md:flex-col w-full p-2 md:p-8 transition-cool sm:p-4  bg-orange-950 text-white flex  grid-flow-col grid-col-2 md:grid-col-4 justify-between flex-row gap-4'>
        {/* location */}
        <div className=' flex flex-col gap-2'>
       <a href="./" className=' flex flex-row mb-2 gap-2'>
            <img src={shoesIcon} alt="logo" className=' h-10 w-10 '/>
            <h1 className=' font-bold text-4xl'>{handName()}</h1>
        </a>
        {/* cool name */}
        <p className=' text-gray-500 text-sm mb-2 cursor-auto'>
          Elevate your style with our exquisite collection of shoes, <br />
          available now on our website!
        </p>
        {/* location */}
        <div className='flex flex-row gap-1 cursor-pointer transform-cool-s transition-cool text-yellow-700'>
          < BsGeoAltFill className=' text-2xl '/>
          <span className=' text-xl'>
           Kigali Rwanda
          </span>
        </div>
        {/* phone number */}
        <div className='flex flex-row gap-1 cursor-pointer transform-cool-s transition-cool text-yellow-700'>
          <BsPhone className=' text-2xl '/>
          <span className=' text-xl'>
           Phone:
          </span>
          <p className=' text-white'>
            +250 792 537 274
          </p>
        </div>
        {/* email */}
        <div className='flex flex-row gap-1 cursor-pointer transform-cool-s transition-cool text-yellow-700'>
          <IoIosMail className=' text-3xl '/>
          <span className=' text-xl'>
           Mail:
          </span>
          <p className=' text-white'>
            brunorwanda4@gmail.com
          </p>
        </div>
        {/* top icons */}
        <div className=' flex flex-row gap-2 mt-2'>
          <a href="https://web.facebook.com/profile.php?id=100073088573367">
            <BsFacebook className=' bg-orange-600 rounded-md text-2xl p-1 h-8 w-8 transform-cool-l transition-cool hover:bg-orange-700'/>
          </a>
          <a href="https://www.instagram.com/bruno_rwanda/?hl=en">
            <BsInstagram className=' bg-orange-600 rounded-md text-2xl p-1 h-8 w-8 transform-cool-l transition-cool hover:bg-orange-700'/>
          </a>
         
          <a href="https://twitter.com/BrunoRwanda4">
            <BsTwitter className=' bg-orange-600 rounded-md text-2xl p-1 h-8 w-8 transform-cool-l transition-cool hover:bg-orange-700'/>
          </a>
          <a href="./">
            <BsTelegram className=' bg-orange-600 rounded-md text-2xl p-1 h-8 w-8 transform-cool-l transition-cool hover:bg-orange-700'/>
          </a>
          <a href="./">
            <BsSnapchat className=' bg-orange-600 rounded-md text-2xl p-1 h-8 w-8 transform-cool-l transition-cool hover:bg-orange-700'/>
          </a>
        </div>
      </div>
      {/* pages */}
      <div>
        <div className=' flex flex-row mb-2'>
          <span className=' font-bold text-3xl text-orange-600 -mt-1 cursor-pointer hover:text-orange-700 transform-cool transition-cool'>.</span>
          <p className=' text-2xl font-bold cursor-auto'>
             Use full links
          </p>
        </div>
        <ul className=' flex flex-col gap-3 '>
          <li>
            <NavLink to="/" className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"  className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm  text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Categories</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./service" className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm  text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Brands</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./product"   className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm  text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./contact" className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm  text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Popular</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./contact" className='flex flex-row gap-1'>
              <BsChevronRight className=' font-bold text-sm  text-orange-600 mt-2'/><span className=' hover:font-bold transition-cool transform-cool-s '>Sell</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* best product */}
      <div className='flex flex-col'>
        <h2 className=' flex flex-row gap-2'>
          <BsBagFill className=' text-orange-600 font-bold text-3xl hover:text-orange-700 cursor-pointer transition-cool transform-cool'/>
          <p className=' text-2xl font-bold flex flex-row cursor-auto'>Best Product's</p>
        </h2>
        <ul className=' flex flex-col gap-3 mt-2'>
          <li>
            <a href="./"  className='flex flex-row gap-1'>
              <SiNike className=' font-bold text-2xl text-orange-600 mt-2 '/><span className=' hover:font-bold transition-cool transform-cool-s '>Nike</span>
            </a>
          </li>
          <li> 
            <a href="./"  className='flex flex-row gap-1 hover:font-bold transition-cool transform-cool-s '>
              <SiAdidas className=' font-bold text-2xl text-orange-500 mt-0 '/><span className=' hover:font-bold transition-cool transform-cool-s '>Adidas</span>
            </a>
          </li>
          <li>
            <a href="./"  className='flex flex-row gap-1 hover:font-bold transition-cool transform-cool-s '>
              <img src={gucciIcon } alt="gucci logo" className='h-6 w-6' /><span className=' hover:font-bold transition-cool transform-cool-s '>Gucci</span>
            </a>
          </li>
          <li>
            <a href="./"  className='flex flex-row gap-1 hover:font-bold transition-cool transform-cool-s '>
              <SiPuma className=' font-bold text-2xl text-orange-500 mt-2 '/><span className=' hover:font-bold transition-cool transform-cool-s '>Puma</span>
            </a>
          </li>
          <li>
            <a href="./"  className='flex flex-row gap-1 hover:font-bold transition-cool transform-cool-s '>
              <SiDior className=' font-bold text-4xl text-orange-500 -mt-1 '/><span className=' hover:font-bold transition-cool transform-cool-s '>Dior</span>
            </a>
          </li>
          <li>
            <a href="./"  className='flex flex-row gap-1 hover:font-bold transition-cool transform-cool-s '>
              <SiNewbalance className=' font-bold text-2xl text-orange-500 mt-0 '/><span className=' hover:font-bold transition-cool transform-cool-s '>Newbalance</span>
            </a>
          </li>
        </ul>
      </div>
       {/* contact */}
       <div>
        <h2 className=' flex flex-row gap-2'>
          <IoIosMail className=' text-orange-600 font-bold text-3xl hover:text-orange-700 cursor-pointer transition-cool transform-cool'/>
          <p className=' text-2xl font-bold  '>
            Send as message 
          </p>
        </h2>
        <div>
          <p className=' text-gray-400'>
            Send message on email or comment<br />
            if you like our product or you want <br />
            to buy or question .
          </p>
          <h3 className=' font-bold text-[var(--orange)] text-xl mt-4'>
            Your Email:
          </h3>
          {/* email */}
          <form action="" className=' mt-4 flex flex-row'>
            <input type="email" className='rounded-cool-one h-14 w-48 outline-none text-black pl-1' placeholder=' enter@your.email'/>
            <input type="submit" value="Subscribe" className=' rounded-cool bg-red-600 h-14 w-20 hover:bg-orange-600 transition-cool cursor-pointer' />
          </form>
        </div>
        {/* copy right */}
        <div className=' mt-4 text-gray-600 flex flex-col'>
          <h6 className=' flex flex-row gap-2'>
            <span className=' text-orange-700 font-bold text-lg'>&copy;</span> 
            <p>Copyright</p>
            <a href="./" className=' text-gray-500 font-bold transition-cool transform-cool-s hover:text-[var(--orange)]'> H4</a>
          </h6>
          <h5 className=' flex gap-2'>
            <p className=' text-[var(--red)]'>Designed by</p>
            <a href="./" className=' font-bold transition-cool transform-cool-s hover:text-[var(--orange)] text-gray-500 '> Bruno Rwanda</a>
          </h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer