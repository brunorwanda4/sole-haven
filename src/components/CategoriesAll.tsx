import AllCategories from "./categories/AllCategories"
import AllCategoriesForm from "./categories/AllCategoriesForm"

//start categories 
const CategoriesAll = () => {
  return (
    <section className=" pt-24 p-2 pb-4">
        {/* title  */}
        <div className=" mt-3 max-md:mt-10">
            <h1 className=" text-start font-bold text-2xl ">
              All Categories
            </h1>
        </div>
        <div className=" flex flex-row gap-3">
            {/* select categories */}
            <div className=" mt-4 max-md:hidden">
                <AllCategoriesForm/>
            </div>
            <div className=" mt-4">
                <AllCategories/>
            </div>
        </div>
    </section>
  )
}

export default CategoriesAll