import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-red-200 text-base-content">
                          
                        <li><Link className='bg-stone-300 text-3xl font-semibold mt-5'>My Products</Link></li>
                        <li><Link className='bg-stone-300 text-3xl font-semibold mt-5'>Sidebar Item 1</Link></li>
                        <li><Link className='bg-stone-300 text-3xl font-semibold mt-5'>Sidebar Item 1</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;