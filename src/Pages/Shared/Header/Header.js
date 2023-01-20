import { NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';
import './Header.css';


const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems =
        <>
            <li className='hover:text-white hover:bg-black/10'><NavLink to='/'>Home</NavLink></li>
            <li className='hover:text-white hover:bg-black/10'><NavLink to='/about'>About</NavLink></li>
            <li className='hover:text-white hover:bg-black/10'><NavLink to='portfolio'>Portfolio</NavLink></li>
            <li className='hover:text-white hover:bg-black/10'><NavLink to='/skills'>Skills</NavLink></li>
            <li className='hover:text-white hover:bg-black/10'><NavLink to='contact'>Contact</NavLink></li>
        </>

    return (
        <div className="navbar nav bg-gray-800 text-gray-400 pr-12 fixed top-0 left-0 w-full z-[100]">
            <div className="navbar-start">
                <div onClick={()=> setOpen(!open)} className="dropdown nav">
                    <label tabIndex={0} className="btn bg-gray-800 lg:hidden text-[#ff3d00]">
                       {
                            open ? <HiOutlineXMark className='h-8 w-8' />:<HiBars3 className='h-8 w-8' />
                       }
                    </label>
                    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 px-2 shadow bg-gray-800 text-white rounded-box w-full flex-shrink-0 justify-items-center ml-28" ${open ? 'top-12' : 'top-[-320px]'}`}>
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal items-center space-x-8">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;