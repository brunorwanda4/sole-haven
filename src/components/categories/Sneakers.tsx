//logos
import sneakerIcon from '../../assets/img/icons/sneakerShoesIcon.png'
import Jordan5One from '../bestProduct/Jordan-5One'
import MaqueenBestProduct from '../bestProduct/MaqueenBestProduct'
import NikeBestProduct1 from '../bestProduct/nikeBestProduct1'
// start sneakers page
const Sneakers = () => {
  return (
    <div className=' duration-500 flex flex-col'>
        {/* sneakers */}
        <div className=' flex gap-4 cursor-pointer justify-center items-center text-center ml-[-5%]'>
            <img src={sneakerIcon} alt=" sneakers icon" className=' h-16 w-auto' />
            <h1 className=' text-7xl font-allura stroke-1'>Sneakers</h1>
        </div>
        {/* sneaker shoes */}
        <div className=' grid grid-cols-4 max-md:grid-cols-2 max-xl:gap-x-60 gap-4 max-md:gap-x-2'>
            <MaqueenBestProduct/>
            <NikeBestProduct1/>
            <Jordan5One/>
        </div>
    </div>
  )
}

export default Sneakers