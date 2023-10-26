//top product
import topProductTwo from '../../assets/img/shoes/topProduct/topProduct2.jpg'
//icons
import {SiNike,SiAdidas,SiPuma,SiDior,SiNewbalance} from 'react-icons/si'
//popular best
import topProductOne from '../../assets/img/shoes/topProduct/topProduct1.jpg'
import topProductThree from '../../assets/img/shoes/topProduct/topProduct3.jpg'
const TopProductHero = () => {
  return (
    <div className="max-md:flex-col flex flex-row gap-2">
      {/* introduction */}
      <div className=" flex flex-col gap-5 ">
        <h3 className=" font-bold text-ellipsis text-lg leading-3 text-orange-600">
          TOP SHOES ALL TIME
        </h3>
        {/* let shop */}
        <h2 className=" flex flex-col font-bold font-sans text-4xl">
          Let' Start
          <span className=" text-orange-600">Shopping!</span>
        </h2>
        <p className=" text-gray-700 font-normal leading-tight">
         Experience unparalleled styled performance <br />
          with Nike shoes, crafted to elevate your every <br />
          step.
        </p>
        <a href="./" className=" bg-orange-600 h-12 w-28 text-white font-bold text-center items-center pt-3 rounded-3xl transition-all duration-500  shadow-cool-o hover:bg-orange-950 ">
          SHOP NOW
        </a>
        {/* shoes icon */}
        <div className=' flex flex-row gap-2 mt-16'>
          <a href="./">
           <SiNike className=' font-bold text-3xl transition-cool transform-cool-l hover:text-orange-600'/>
          </a>
          <a href="./">
           <SiAdidas className=' font-bold text-3xl transition-cool transform-cool-l hover:text-orange-600'/>
          </a>
          <a href="./">
           <SiPuma className=' font-bold text-3xl transition-cool transform-cool-l hover:text-orange-600'/>
          </a>
          <a href="./">
           <SiDior className=' font-bold text-3xl transition-cool transform-cool-l hover:text-orange-600'/>
          </a>
          <a href="./">
           <SiNewbalance className=' font-bold text-3xl transition-cool transform-cool-l hover:text-orange-600'/>
          </a>
          <a href="./" >
            <div className=' gucci-logo'></div>
          </a>
        </div>
      </div>
      {/* images */}
      <div>
        <div>
          <img src={topProductTwo} alt="" className=' h-96 rounded-md'/>
        </div>
      </div>
      {/* best product */}
       {/* anther product image */}
       <div className=' gap-4 flex lg:flex-col flex-row lg:pt-0 pt-10 mt-8'>
                <a href="./">
                 <img src={topProductOne} alt="Jordan 1 Mid " className=' h-48 w-52 rounded-md shadow-xl -mt-16 shadow-cool-s transition-cool'/>
                </a>
                <a href="./">
                 <img src={topProductThree} alt="Nike sport shoes image" className=' h-48 w-52 rounded-md shadow-xl lg:-mt-0 -mt-16 shadow-cool-s transition-cool'/>
                </a>
            </div>
    </div>
  )
}

export default TopProductHero