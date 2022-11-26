import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const CategoryCollectionCard = ({ items, setData }) => {
    const { photo, name, location, originalPrice, resalePrice, used, time, sellerName } = items
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-16 ">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl"><strong>{name}</strong></h2>
                <p className='text-2xl'>location: <strong>{location}</strong></p>
                <p className='text-2xl'>Original Price:<strong>{originalPrice}</strong></p>
                <p className='text-2xl'>Resale Price:<strong>{resalePrice}</strong></p>
                <p className='text-2xl'>Used:<strong>{used}</strong></p>
                <p className='text-2xl'>Time:<strong>{time}</strong></p>
                <p className='text-2xl'>Seller Name:<strong>{sellerName}</strong></p>

                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal"
                        onClick={() => setData(items)}
                        className="btn btn-primary  bg-gradient-to-r from-purple-500 font-bold to-pink-500">

                        <FaArrowRight
                            className='mr-4 text-2xl font-semibold'>
                        </FaArrowRight>Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default CategoryCollectionCard;