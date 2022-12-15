import StarRateIcon from '@mui/icons-material/StarRate';
import Image from 'next/legacy/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckOutProduct({ id, title, price, rating, description, category, image, hasPrime }) {

    const dispatch = useDispatch();

    const addItemToCart=()=>{
        const product = {
            id, 
            title, 
            price, 
            rating,
            description, 
            category, 
            image,
            hasPrime
        }
        // push into redux
        dispatch(addToBasket(product))
    }
    const removeItemToCart=()=>{
       // remove into redux
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className='grid grid-cols-5'>
        <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
        />
        {/* middle */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i)=>(
                    <StarRateIcon key={i} className='h-5 text-yellow-500'/>
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <p>₹{price}</p>

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img 
                        loading='lazy'
                        className='w-12'
                        src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png" 
                        alt="prime-logo" 
                    />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}
        </div>
        {/* right add/remove button */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick={addItemToCart}>Add to Cart</button>
            <button className='button' onClick={removeItemToCart}>Remove from Cart</button>
        </div>
    </div>
  );
}

export default CheckOutProduct