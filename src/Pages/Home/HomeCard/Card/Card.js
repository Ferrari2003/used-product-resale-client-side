import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ category }) => {

    const { _id, title, images } = category

    return (
        <div className="card  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={images} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                   <Link to={`/category${_id}`}>
                   <button className="btn btn-primary w-full font-bold text-slate-300">Show Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;