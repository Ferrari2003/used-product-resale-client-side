import React, { useContext } from 'react';
import { FaCheckDouble } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ data }) => {
    const {user} = useContext(AuthContext)
    const { name,resalePrice, location,sellerName } = data
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1'>
                        <input type="text" readOnly value={user.displayName} className="input  input-bordered  w-full m-4" />
                        <input type="text" readOnly value={user.email} className="input  input-bordered  w-full m-4" />
                        <input type="text" readOnly value={name} className="input  input-bordered  w-full m-4" />
                        <input type="text" readOnly value={resalePrice} className="input  input-bordered  w-full m-4" />
                        <input type="text" readOnly value={sellerName} className="input  input-bordered  w-full m-4" />
                        <input type="text"  readOnly value={location} className="input  input-bordered  w-full m-4" />
                        <button className='btn btn-accent text-white w-full max-xs text-2xl'><FaCheckDouble className='text-3xl mr-4'></FaCheckDouble>Book Confirm</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;