import React from 'react';
import { Link } from 'react-scroll';
import About from '../../../Pages/About/About';
import Contact from '../../../Pages/Contact/Contact';
import Home from '../../../Pages/Home/Home';
import Portfolio from '../../../Pages/Portfolio/Portfolio';
import Skills from '../../../Pages/Skills/Skills';
import './Header.css';


const Header = () => {
    return (
        <div className="App">
            <header className="nav flex justify-center lg:justify-end items-center px-0 lg:px-12">
                <nav className="nav__container__actions">
                    <ul className='flex space-x-1 lg:space-x-5'>
                        <li className=''>
                            <Link activeClass="active" smooth spy to="home">
                                Home
                            </Link>
                        </li>
                        <li className=''>
                            <Link activeClass="active" smooth spy to="about">
                                About
                            </Link>
                        </li>
                        <li className=''>
                            <Link activeClass="active" smooth spy to="portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className=''>
                            <Link activeClass="active" smooth spy to="skills">
                                Skills
                            </Link>
                        </li>
                        <li className=''>
                            <Link activeClass="active" smooth spy to="contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="home">
                <Home />
            </section>
            <section id="about" className='mt-20'>
                <About />
            </section>
            <section id="portfolio" className='mt-20'>
                <Portfolio />
            </section>
            <section id="skills" className=''>
                <Skills />
            </section>
            <section id="contact" className='mt-20'>
                <Contact />
            </section>
        </div>
    );
};

export default Header;







// import React from 'react';
// import { Link } from 'react-scroll';
// import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
// import { useState } from 'react';
// import './Header.css';
// import About from '../../../Pages/About/About';
// import Contact from '../../../Pages/Contact/Contact';
// import Home from '../../../Pages/Home/Home';
// import Portfolio from '../../../Pages/Portfolio/Portfolio';
// import Skills from '../../../Pages/Skills/Skills';
// import './Header.css';



// const Header = () => {
//     const [open, setOpen] = useState(false);

//     const menuItems =
//         <>
//             <li><Link activeClass="active" smooth spy to='/home' className={({ isActive }) =>
//                 isActive
//                     ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
//                     : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
//             }>Home</Link></li>
//             <li><Link activeClass="active" smooth spy to='/about' className={({ isActive }) =>
//                 isActive
//                     ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
//                     : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
//             }>About</Link></li>
//             <li><Link activeClass="active" smooth spy to='portfolio' className={({ isActive }) =>
//                 isActive
//                     ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
//                     : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
//             }>Portfolio</Link></li>
//             <li><Link activeClass="active" smooth spy to='/skills' className={({ isActive }) =>
//                 isActive
//                     ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
//                     : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
//             }>Skills</Link></li>
//             <li><Link activeClass="active" smooth spy to='contact' className={({ isActive }) =>
//                 isActive
//                     ? 'font-bold tracking-wide text-[#ff3d00] border-b-2 border-[#ff3d00] transition-colors duration-200'
//                     : 'font-medium tracking-wide  text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white'
//             }>Contact</Link></li>
//         </>

//     return (
//         <div className="navbar nav bg-transparent m-0 p-[-5] lg:bg-[#000] text-gray-400 pr-12 fixed top-0 left-0 w-screen z-[100]">
//             <div className="navbar-start">
//                 <div onClick={() => setOpen(!open)} className="dropdown nav">
//                     <label tabIndex={0} className="btn bg-transparent lg:hidden outline-none text-white hover:bg-[#ff3d00]">
//                         {
//                             open ? <HiOutlineXMark className='h-8 w-8' /> : <HiBars3 className='h-8 w-8' />
//                         }
//                     </label>
//                     <ul tabIndex={0} className={`menu menu-compact bg-gray-800 dropdown-content mt-3 text-white rounded-b-lg" ${open ? 'top-[45px]' : 'top-[-320px]'}`}>
//                         {menuItems}
//                     </ul>
//                 </div>
//             </div>
//             <div className="navbar-end hidden lg:flex">
//                 <ul className="menu menu-horizontal items-center space-x-8">
//                     {menuItems}
//                 </ul>
//             </div>
//             <>

//             <section id="home">
//                  <Home />
//             </section>
//             <section id="about">
//                 <About />
//             </section>
//             <section id="portfolio">
//                 <Portfolio />
//             </section>
//             <section id="skills">
//                 <Skills />
//             </section>
//             <section id="contact">
//                 <Contact />
//             </section>

//             </>
//         </div>
//     );
// };

// export default Header;