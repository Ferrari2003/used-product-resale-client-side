import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    
    const { data: allSeller = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn:async () => {
            const res = await fetch(`http://localhost:8000/users`);
            const data = await res.json();
            return data
        }
            
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:8000/users/admin/${id}`,{
        method: 'PUT',
        headers: {
            authorization: `${localStorage.getItem('accessToken')}`
        }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin success')
                refetch();
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl font-bold ml-4 mb-6 p-6'>All Seller</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSeller.map((seller,i) =>
                                <tr key={seller._id}
                                >
                                    <th>{i+1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(seller._id)} className="btn btn-primary btn-sm ">Make Admin</button>}</td>
                                    <td><button className="btn btn-info btn-sm">Delete</button></td>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;