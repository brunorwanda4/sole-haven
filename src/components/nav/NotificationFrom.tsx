//icons
import {BsCaretUpFill,BsExclamationCircle,BsCheckCircle} from 'react-icons/bs'
// start notification form
const NotificationFrom = () => {
  return (
   <div className=' notification-from absolute mt-8 -ml-64'>
     <BsCaretUpFill className="ml-52 text-red-600"/>
     <ul className=' bg-white rounded-md dark:bg-gray-800 hover:rounded-md shadow-lg dark:shadow-gray-950  w-80 '>
        {/* notification list */}
        <li className=" flex flex-row gap-4 border-b-2 border-orange-600 px-2 py-2 duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <p className=" text-gray-500">You have <span>2</span> new notifications</p>
            <a href="./" className=" bg-red-600 text-white font-bold text-sm p-1 rounded-2xl hover:bg-green-600 duration-500">
                View All
            </a>
        </li>
        {/* warning notification */}
        <li className=" border-b-2 px-2 py-2 duration-300 hover:bg-gray-200  dark:hover:bg-gray-700">
           <a href="./" className=" flex flex-row  gap-4 items-center">
           <BsExclamationCircle className=" text-yellow-400 text-2xl font-bold"/>
           {/* notification paragraph */}
            <div>
                <h3 className=' font-medium '>Get your account now</h3>
                <p className=' text-gray-500 text-sm '>
                    To buy some thing you need to create account or to login.
                </p>
                <span className=' text-gray-500 text-sm'>
                    2 min. ago
                </span>
            </div>
           </a>
        </li>
        {/* well come  */}
        <li className=" border-b-2 px-2 py-2 duration-300 hover:bg-gray-200  dark:hover:bg-gray-700">
           <a href="./" className=" flex flex-row  gap-4 items-center">
           <BsCheckCircle className=" text-green-700 text-2xl font-bold"/>
           {/* notification paragraph */}
            <div>
                <h3 className=' font-medium '>Welcome On ChickKicks</h3>
                <p className=' text-gray-500 text-sm '>
                    welcome to ChickKicks shop a every thing you want are here.
                </p>
                <span className=' text-gray-500 text-sm'>
                    3 min. ago
                </span>
            </div>
           </a>
        </li>
        {/* show all notification */}
        <li className=" text-center pt-2 pb-2 duration-300 hover:bg-gray-200  dark:hover:bg-gray-700" >
            Show  
            <a href="./" className=' all-notification ml-2 duration-100 border-b-2 border-green-600'>
                All notifications 
            </a>
        </li>
    </ul>
   </div>
  )
}

export default NotificationFrom