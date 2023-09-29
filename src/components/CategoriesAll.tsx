import AllCategoriesFormImages from "./categories/AllCategoriesFormImages"
//icons
import shoesIcon from '../assets/img/icons/shoesIcon.png'
import AllCategories from "./categories/AllCategories"
//start categories 
const CategoriesAll = () => {
  return (
    <section className=" pt-24 p-2 pb-4 flex gap-4">
        {/* title  */}
        <div className=" mt-3 max-md:mt-10  bg-white shadow-lg dark:shadow-gray-950 dark:bg-gray-800 p-2 w-[352px] justify-center rounded-md max-lg:hidden">
            <div className=" flex gap-2">
              <img src={shoesIcon} alt=" shoes icon" className=" h-8" />
            <span className=" text-center font-bold text-2xl mb-2"> Shoes Categories </span>
            </div>
             {/* AllCategoriesForm image */} 
            <div className="">
              <AllCategoriesFormImages />
            </div>
        </div> 
        {/* All categories pages  */}
        <div className="">
          <AllCategories/>
        </div>
    </section>
  )
}

export default CategoriesAll