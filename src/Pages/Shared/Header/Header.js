import { NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';
import './Header.css';


const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems =
        <>
            <li><NavLink to='/' className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
                    : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
                }>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
                    : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
                }>About</NavLink></li>
            <li><NavLink to='portfolio' className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
                    : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
                }>Portfolio</NavLink></li>
            <li><NavLink to='/skills' className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
                    : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
                }>Skills</NavLink></li>
            <li><NavLink to='contact' className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
                    : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
                }>Contact</NavLink></li>
        </>

    return (
        <div className="navbar nav bg-transparent m-0 p-[-5] lg:bg-[#000] text-gray-400 pr-12 fixed top-0 left-0 w-screen z-[100]">
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