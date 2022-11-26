import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../images/logos.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItem = <>
        <li><NavLink className='btn btn-ghost font-bold rounded-xl' to={'/'}>Home</NavLink></li>
        <li><NavLink className='btn btn-ghost font-bold rounded-xl' to={'/About'}>About</NavLink></li>
        <li><NavLink className='btn btn-ghost font-bold rounded-xl' to={'/blog'}>Blog</NavLink></li>

        {user?.uid ?
            <>
                <li><NavLink className='btn btn-ghost font-bold rounded-xl' to={'/dashboard'}>Dashboard</NavLink></li>
                <li><NavLink onClick={handleLogOut} className='btn btn-ghost font-bold rounded-xl' to={'/login'}>Sign out </NavLink></li>
            </>
            : <li><NavLink className='btn btn-ghost font-bold rounded-xl' to={'/login'}>Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to={'/'} className="w-24">
                    <img className='ml-12' src={logo} alt="" />
                </Link>
            </div>
          <div>
          <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className='avatar online ml-[300px]'>
                <div className="w-16 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;