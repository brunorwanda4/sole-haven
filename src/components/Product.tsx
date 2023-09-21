import All from "./products/All"

//start
const Product = () => {
  return (
    <section className=" pt-24 max-lg:pt-20 p-4">
      <div>
        <h2 className=" font-bold text-3xl ">
          Buy Now <span>All</span> Your Shoes Are <span>Here</span>
        </h2>
      </div>
    {/* all product */}
     <div>
      <All/>
     </div>
    </section>
  )
}

export default Product