import React, { useEffect,} from 'react';
import BuyNikeJordanOne1Images from './BuyNikeJordanOne1Images';
import BuyNikeJordanOne1Comments from './BuyNikeJordanOne1Comments';
//start jordan one buy 
const BrunoRwandaSneakersNikeJordanOne1 = () => {
  useEffect(() => {
    document.title = 'Jordan one';
  }, []);
  return (
    <section className="pt-24 p-2">
        <div className=' mt-4 flex flex-row max-md:flex-col gap-2'>
          <BuyNikeJordanOne1Images/>
          <BuyNikeJordanOne1Comments/>
        </div>
    </section>
  );
};

export default BrunoRwandaSneakersNikeJordanOne1;
