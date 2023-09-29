//logos
import sneakerIcon from '../../assets/img/icons/sneakerShoesIcon.png'
import MaqueenBestProduct from '../bestProduct/MaqueenBestProduct'
import NikeBestProduct1 from '../bestProduct/nikeBestProduct1'
// start sneakers page
const Sneakers = () => {
  return (
    <div className=''>
        {/* sneakers */}
        <div className=' flex gap-4 cursor-pointer justify-center items-center text-center ml-54'>
            <img src={sneakerIcon} alt=" sneakers icon" className=' h-16 w-auto' />
            <h1 className=' text-7xl font-allura stroke-1'>Sneakers</h1>
        </div>
        {/* sneaker shoes */}
        <div className=' grid grid-cols-4 gap-4'>
            <MaqueenBestProduct/>
            <NikeBestProduct1/>
        </div>
    </div>
  )
}

export default Sneakers