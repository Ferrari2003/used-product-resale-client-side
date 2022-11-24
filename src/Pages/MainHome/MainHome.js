import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/Top-6-highest-selling-motorcycles-75014.webp'
import { FaHome } from "react-icons/fa";

const MainHome = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <img className='w-full' src={img} alt="" />
                <div className="hero-content flex-col">
                    <div className="form-control mt-6">
                        <Link to={'/home'} className="btn  bg-slate-200 font-bold"><FaHome className='mr-2 text-4xl bg-pink-600'></FaHome>Open Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHome;