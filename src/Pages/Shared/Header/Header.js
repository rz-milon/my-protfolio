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
        <div className="navbar nav bg-transparent lg:bg-[#000] text-gray-400 pr-12 fixed top-0 left-0 w-screen z-[100]">
            <div className="navbar-start">
                <div onClick={()=> setOpen(!open)} className="dropdown nav">
                    <label tabIndex={0} className="btn bg-transparent lg:hidden outline-none text-white hover:bg-[#ff3d00]">
                       {
                            open ? <HiOutlineXMark className='h-8 w-8' />:<HiBars3 className='h-8 w-8' />
                       }
                    </label>
                    <ul tabIndex={0} className={`menu menu-compact bg-gray-800 dropdown-content mt-3 text-white rounded-b-lg" ${open ? 'top-[45px]' : 'top-[-320px]'}`}>
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