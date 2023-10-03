import {SetStateAction, useState} from 'react'
import nikeOneOne from '../../assets/img/shoes/nike/nike1.jpg'
import nikeOneTwo from '../../assets/img/shoes/nike/nike1-2.jpg'
import nikeOneThree from '../../assets/img/shoes/nike/nike1-3.jpeg'
const BuyNikeJordanOne1Images = () => {
    //shoes change position 
    const [nikeOne,setNikeOne] = useState(nikeOneOne)
    const changeShoes = (newShoes: SetStateAction<string>) => {
        setNikeOne(newShoes);
    }
  return (
    <div>
        {/* big shoes */}
        <div>
            <img src={nikeOne} alt="Jordan one image 1" className=' duration-300 rounded-md shadow-lg dark:shadow-gray-950 object-cover w-[480px]'/>
        </div>
        {/* small shoes */}
        <div className=' flex flex-row gap-2 mt-2'>
            <img src={nikeOneOne} alt="Jordan one image 1" className=' h-24 rounded-md shadow-md dark:shadow-green-950 cursor-pointer hover:border-2 hover:border-orange-600 duration-200 ease-in-out transition-all' onClick={() => changeShoes(nikeOneOne)}/>
            <img src={nikeOneTwo} alt="Jordan one image 1" className=' h-24 rounded-md shadow-md dark:shadow-green-950 cursor-pointer hover:border-2 hover:border-orange-600 duration-200 ease-in-out transition-all' onClick={() => changeShoes(nikeOneTwo)}/>
            <img src={nikeOneThree} alt="Jordan one image 1" className=' h-24 rounded-md shadow-md dark:shadow-green-950 cursor-pointer hover:border-2 hover:border-orange-600 duration-200 ease-in-out transition-all' onClick={() => changeShoes(nikeOneThree)}/>
        </div>
    </div>
  )
}

export default BuyNikeJordanOne1Images