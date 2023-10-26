import React, { useEffect,} from 'react';
import BuyNikeJordanOne1Images from './BuyNikeJordanOne1Images';
import BuyNikeJordanOne1Comments from './BuyNikeJordanOne1Comments';
import BuyNikeJordanOne1BuyPage from './BuyNikeJordanOne1BuyPage';
//start jordan one buy 
const BrunoRwandaSneakersNikeJordanOne1 = () => {
  useEffect(() => {
    document.title = 'Jordan one';
  }, []);
  return (
    <section className="pt-24 p-2 px-3">
        <div className=' mt-4 flex flex-row gap-4 max-lg:flex-col justify-between'>
          <BuyNikeJordanOne1Images/>
          <BuyNikeJordanOne1BuyPage />
          <BuyNikeJordanOne1Comments/>
        </div>
    </section>
  );
};

export default BrunoRwandaSneakersNikeJordanOne1;
