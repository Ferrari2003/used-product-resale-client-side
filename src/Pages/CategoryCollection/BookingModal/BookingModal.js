
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const BookingModal = ({ data,setData }) => {
 const {user} =useContext(AuthContext)
    


    const { name,sellerName,resalePrice,time,location, } = data;

    const handleBooking = (event) => {
        event.preventDefault();
               
        const form = event.target
        const sellerName =form.sellerName.value;
        const email = form.email.value;
        const resalePrice =form.resalePrice.value;
        const time = form.time.value;
        const location = form.location.value;
       
         
        const booking = {
            email,
            resalePrice,
            time,
            location,
            sellerName,
        }

            // TODO: send data to the server 
            // and once data is saved then close the modal
            // and display success toast

         fetch('http://localhost:8000/bookings', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            
            if(data.acknowledged){
                setData=(null);
                toast.success('Booking confirm')
            }
         })

        
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6'>                      
                       
                        <input name="email" defaultValue={user?.email} placeholder="Email" className="input  input-bordered  w-full" required />
                        <input name="resalePrice" defaultValue={resalePrice} placeholder="Resale Price" className="input  input-bordered  w-full" />
                        <input name="time" defaultValue={time} placeholder="Time" className="input  input-bordered  w-full" />
                        <input name="location" defaultValue={location} placeholder="Location" className="input  input-bordered  w-full" />
                        <input name="sellerName" defaultValue={sellerName} placeholder="Seller Name" className="input  input-bordered  w-full" />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;