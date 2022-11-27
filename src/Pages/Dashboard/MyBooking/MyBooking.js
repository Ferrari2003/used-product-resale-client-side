import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyBooking = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:8000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='bg-teal-100'>
            <h3 className='text-3xl ml-4 mb-6 p-6 font-bold'>My Booking</h3>
            <div className="overflow-x-auto ">
                <table className="table w-full">

                    <thead >
                        <tr>
                            <th className='text-xl'>No</th>
                            <th className='bg-red-300 text-xl'>Email Address</th>
                            <th className='bg-red-300 text-xl'>Resale Price</th>
                            <th className='bg-red-300 text-xl'>Time</th>
                            <th className='bg-red-300 text-xl'>Location</th>
                            <th className='bg-red-300 text-xl'>Seller Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking,i) =>
                                <tr key={booking._id}>
                                    <th className='text-2xl'>{i+1}</th>
                                    <td className='text-2xl'>{booking.email}</td>
                                    <td className='text-2xl'>{booking.resalePrice}</td>
                                    <td className='text-2xl'>{booking.time}</td>
                                    <td className='text-2xl'>{booking.location}</td>
                                    <td className='text-2xl'>{booking.sellerName}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;