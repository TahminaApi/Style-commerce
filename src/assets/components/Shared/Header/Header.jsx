import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
        <li className='text-amber-400 text-xl'><NavLink to="/shop">Shop</NavLink></li>
        <li className='text-amber-400 text-xl'><NavLink to="/login">login</NavLink></li>
    </>
    return (
        <div>
            <div className='bg-red-700 fixed left-0 right-0 z-30'>
                <div className="navbar justify-between container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {menuItems}

                            </ul>
                        </div>
                        <NavLink to="/" className="text-amber-400 text-2xl">Style-commerce</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">

                            {menuItems}

                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;