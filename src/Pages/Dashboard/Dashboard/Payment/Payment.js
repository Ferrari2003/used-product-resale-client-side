import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData();
    const { resalePrice, time, location, sellerName, } = data
    return (
        <div>
            <h2 className='text-4xl font-bold'>Payment</h2>
            <div className='text-xl font-semibold m-[100px]'>
                <h2 className='bg-red-100 mt-5 p-5'>Please pay for orders at <strong>${resalePrice}</strong> </h2>
                <h2 className='bg-red-100 mt-5 p-5'>SellerName: {sellerName} </h2>
                <h2 className='bg-red-100 mt-5 p-5'>Time:{time}</h2>
                <p  className='bg-red-100 mt-5 p-5'>Location: {location}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Payment;