import { BsGeoAlt, BsPhone, BsStarFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
//start
const Contact = () => {
  //handName 
  const handName = () => {
    const names = ['Nike', 'Adidas', 'Puma', 'Gucci'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };
  return (
    <section className=" pt-20">
      <div className='flex flex-row gap-2 m-2 hover:text-orange-600 transition-cool'>
        <BsPhone className='font-bold text-5xl transition-cool' />
        <p className='text-5xl font-bold'>Contact Us</p>
        <span className='w-32 h-[2px] bg-orange-900 mt-12 hover:bg-orange-600 shadow-lg  transition-cool hidden md:flex'></span>
      </div>
      <div className='flex flex-col gap-4 m-4 lg:flex-row'>
        <div className='flex flex-col p-2 cursor-pointer'>
          <div className='flex flex-row gap-4 ml-4 transform-cool-s transition-cool'>
            <BsGeoAlt className='font-bold bg-orange-950 transition-cool transform-cool-s text-white h-16 w-12 rounded-md cursor-pointer hover:bg-orange-600 shadow-lg ' />
            <div className='flex flex-col'>
              <h3 className='font-bold text-3xl'>Location:</h3>
              <h6 className='text-gray-500'>Rwanda, Kigali, Kimironko</h6>
            </div>
          </div>
          <div className='flex flex-row gap-4 ml-4 mt-4 transform-cool-s transition-cool'>
            <IoIosMail className='font-bold bg-orange-950 transition-cool transform-cool-s text-white h-16 w-12 rounded-md cursor-pointer hover:bg-orange-600 shadow-lg ' />
            <div className='flex flex-col'>
              <h3 className='font-bold text-3xl'>Email:</h3>
              <h6 className='text-gray-500'>brunorwanda4@gmail.com</h6>
            </div>
          </div>
          <div className='flex flex-row gap-4 ml-4 mt-4 transform-cool-s transition-cool'>
            <BsPhone className='font-bold bg-orange-950 transition-cool transform-cool-s text-white h-16 w-12 rounded-md cursor-pointer hover:bg-orange-600 shadow-lg ' />
            <div className='flex flex-col'>
              <h3 className='font-bold text-3xl'>Phone:</h3>
              <h6 className='text-gray-500'>+250 792 537 274</h6>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-2 gap-8'>
          <form action='your-submit-url-here' className='flex flex-row gap-6'>
            <input
              type='text'
              placeholder='Enter your name'
              className='border h-12 w-72 bg-transparent rounded-md outline-none p-1 focus:border-orange-600'
            />
            <input
              type='email'
              placeholder='Enter your email'
              className='border h-12 w-80 rounded-md outline-none p-1 focus:border-orange-600'
            />
          </form>
          <input
            type='text'
            placeholder={handName()}
            className='border h-16 rounded-md outline-none p-1 focus:border-orange-600'
          />
          <textarea
            name='message'
            placeholder='Message'
            className='border h-32 rounded-md outline-none p-1 focus:border-orange-600'
          />
          <input
            type='submit'
            value='Send Message'
            className='ml-52 hover:bg-orange-950 text-white h-12 w-32 text-center rounded-md shadow-cool-o transition-cool bg-orange-600 '
          />
        </div>
        <div>
          <div className='flex flex-row gap-2'>
            <BsStarFill className='text-2xl text-orange-600 cursor-pointer' />
            <h3 className='font-bold text-xl'>Best Products</h3>
          </div>
        </div>
      </div>
      {/* footer padding */}
      <div className=" pb-4"></div>
    </section>
  )
}

export default Contact