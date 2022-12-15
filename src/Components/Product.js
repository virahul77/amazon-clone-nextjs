import React, { useState } from 'react';
import Image from 'next/legacy/image'
import Currency from 'react-currency-formatter'
import StarRateIcon from '@mui/icons-material/StarRate';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({id, title, price, description, category, image}) {

  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random()*(MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToCart = () => { 
      const product = {
        id, 
        title, 
        price, 
        rating,
        description, 
        category, 
        image,
        hasPrime
      };

      //sending the product as an action to basket REDUX store... the Basket store
      dispatch(addToBasket(product));
  } ;

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-5'>
        <p className='absolute todiv-2 right-5 text-xs itali text-gray-400'>{category}</p>
        
        <Image 
          src={image} 
          width={200}
          height={200} 
          objectFit="contain"
        />

        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
          {Array(rating).fill().map((_,i)=>
            <StarRateIcon className='h-5 text-yellow-500' />
          )}          
        </div> 
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency quantity={price} currency='INR' />
            {/* <CurrencyRupeeIcon className='text-s'/> */}
        </div>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png" alt="" />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
          </div>
        )}

        <button onClick={addItemToCart} className='mt-auto button'>Add to Cart</button>     
    </div>
  )
}

export default Product