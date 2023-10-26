
//icons
import {BsCaretUpFill} from 'react-icons/bs'
import AllCategoriesForm from '../categories/AllCategoriesForm'
//start categories
const CategoriesForm = () => {
  return (
    <div className=" absolute -ml-[1.4rem] mt-5">
        <BsCaretUpFill className="text-red-600"/>
       <div className=' -ml-28'>
        <AllCategoriesForm/>
       </div>
    </div>
  )
}

export default CategoriesForm