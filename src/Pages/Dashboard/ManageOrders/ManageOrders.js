import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import { FaTrashAlt } from "react-icons/fa";
import RemoveModal from '../Dashboard/RemoveModal/RemoveModal';
import toast from 'react-hot-toast';

const ManageOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const closeModal = () => {
        setDeletingOrder(null);
    }


    const { data: addOrders, isLoading, refetch } = useQuery({
        queryKey: ['addOrders'],
        queryFn: async () => {
            try {
                const res = fetch(`http://localhost:8000/addOrders`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await (await res).json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleRemoveOrder = orders => {
        fetch(`http://localhost:8000/addOrders/${orders._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `ferrari ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
              refetch()
                
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h2 className='text-3xl font-bold mb-6 p-6'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th className='text-2xl'>No</th>
                            <th className='bg-red-200 font-bold text-2xl'>Avatar</th>
                            <th className='bg-red-200 font-bold text-2xl'>Name</th>
                            <th className='bg-red-200 font-bold text-2xl'>Email Address</th>
                            <th className='bg-red-200 font-bold text-2xl'>Brand Name</th>
                            <th className='bg-red-200 font-bold text-2xl'>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            addOrders?.map((add, i) => <tr key={add._id}>
                                <th className='font-semibold text-xl'>{i + 1}</th>
                                <td><div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src={add.image} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td className='font-semibold text-xl'> {add.name}</td>
                                <td className='font-semibold text-xl'>{add.email}</td>
                                <td className='font-semibold text-xl'>{add.specialty}</td>
                                <td className='font-semibold text-xl'>
                                    <label onClick={() => setDeletingOrder(add)} htmlFor="remove-modal" className="btn btn-sm btn-primary"><FaTrashAlt></FaTrashAlt>Remove</label>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingOrder &&
                <RemoveModal
                    title={`Are you sure order remove `}
                    message={`if you remove ${deletingOrder.name}`}
                    success={handleRemoveOrder}
                    successButton="Remove"
                    modalData={deletingOrder}
                    closeModal={closeModal}
                ></RemoveModal>
            }
        </div>
    );
};

export default ManageOrders;