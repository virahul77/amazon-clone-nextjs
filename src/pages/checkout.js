import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';
import Image from 'next/legacy/image'
import React from 'react';
import axios from 'axios';
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux';
import CheckOutProduct from '../Components/CheckOutProduct';
import Header from '../Components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import Head from 'next/head';
const stripePromise = loadStripe(process.env.stripe_public_key);
function checkout() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();


    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        //call the backend to creat checkout session
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items: items, 
            email: session.user.email,
        });
        //redirect user/customer to strip checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });
        if(result.error) alert(result.error.message)
    };

  return (
    <div className='bg-gray-100'>

        <Head>
            <title>Checkout</title>
        </Head>
        <Header/>

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* left section */}
            <div className='flex-grow m-5 shadow-lg'>
                <Image
                src='https:/links.papareact.com/ikj'
                width={1500}
                height={250}
                objectFit='contanin'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your amazon Cart is empty' : "Shopping Cart" }
                    </h1>

                    {items.map((item, i)=>(
                        <CheckOutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}

                </div>
            </div>
           
            {/* right section */}
            <div className='flex flex-col m-5 bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
                        <span className='font-bold'>
                        <Currency quantity={total} currency='INR' />
                        </span>
                        </h2>
                        {/* buttons */}
                        <button 
                            role="link"
                            onClick={createCheckoutSession}
                            disabled={!session}
                            className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}
                        >
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default checkout