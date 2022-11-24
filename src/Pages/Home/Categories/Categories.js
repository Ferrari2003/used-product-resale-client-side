import React from 'react';
import { Link } from 'react-router-dom';
import {FaBuffer } from "react-icons/fa";


const Categories = () => {
    return (
        <section className='bg-red-200'>
            <div>
                <div className='flex justify-center items-center text-4xl font-bold py-2'>
                <FaBuffer className='mr-3'></FaBuffer>
                <h2 >Category</h2>
                
                </div>
                <ul className='p-10'>
                    <li><Link className='btn btn-outline btn-secondary mt-4 '>Sidebar Item 1</Link></li>
                    <li><Link className='btn btn-outline btn-secondary mt-4 '>Sidebar Item 2</Link></li>
                    <li><Link className='btn btn-outline btn-secondary mt-4 '>Sidebar Item 1</Link></li>
                    <li><Link className='btn btn-outline btn-secondary mt-4 '>Sidebar Item 2</Link></li>
                </ul>
            </div>
        </section>
    );
};

export default Categories;