import { NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import './Header.css';

const Header = () => {

    const menuItems =
        <>
            <li className='hover:text-red-700'><NavLink  to='/'>Home</NavLink></li>
            <li className='hover:text-red-700'><NavLink  to='/about'>About</NavLink></li>
            <li className='hover:text-red-700'><NavLink  to='portfolio'>Portfolio</NavLink></li>
            <li className='hover:text-red-700'><NavLink  to='/skills'>Skills</NavLink></li>
            <li className='hover:text-red-700'><NavLink  to='contact'>Contact</NavLink></li>
        </>

    return (
        <div className="navbar bg-black text-white pr-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                       <HiBars3 className='h-8 w-8' />
                       <HiOutlineXMark className='h-8 w-8' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
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