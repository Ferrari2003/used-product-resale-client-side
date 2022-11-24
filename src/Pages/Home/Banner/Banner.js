import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/20210302050600_Best_selling_bikes_in_January_2021.jpg'

const Banner = () => {
    return (
        <div className="hero bg-slate-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg  w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-semibold">Welcome To..<strong className='text-red-500'>Bike Resale Market</strong></h1>
                    <p className="py-6">Safe Trading Motorbike on Leading B2B Platform. High Quality Motorbike with Competitive Price. China’s B2B Impact Award. Leading B2B Portal. Quality China Products. SGS Audited Suppliers. Highlights: New User Guide Available, Multiple Quotes Available, App Available..</p>
                    <Link to={'/'} className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;