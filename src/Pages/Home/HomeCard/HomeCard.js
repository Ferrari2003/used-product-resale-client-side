import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import { FaBuffer } from "react-icons/fa";

const HomeCard = () => {

    const data = useLoaderData();
    

    return (
        <div>
            <div className='flex justify-center items-center mt-5 '>
            <FaBuffer className='text-4xl mr-4'></FaBuffer>
            <h2 className=' font-bold text-4xl '>Category</h2> 
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 p-6'>
                {
                    data?.map(category => <Card key={category._id}
                        category={category}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default HomeCard;