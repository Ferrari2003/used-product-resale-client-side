import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.webp'

const Banner = () => {
    return (
        <div className="hero bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg  w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to={'/'} className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;