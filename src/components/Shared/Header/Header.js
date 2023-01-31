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
        <div>
            <div className="flex justify-end items-center w-full h-11 lg:min-h-[52px] bg-[#000] fixed top-0 left-0 right-0 z-[100] pr-[8px] lg:pr-7">
                <div className="flex-none">
                    <ul className="menu menu-horizontal divide-x lg:divide-x-0 text-[#00ffff] text-[0.9rem] lg:text-[1.02rem text-[0.9rem] lg:text-[1.02rem] divide-white/10 w-full">
                        <li>
                            <Link className='px-1 py-3 md:px-3 lg:py-[14px] hover:font-bold hover:text-white w-[4.6rem] md:w-[6rem] lg:w-[8rem] justify-center hover:bg-[#1a0000]' activeClass='active' smooth spy to="home" >Home</Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 md:px-3 lg:py-[14px] hover:font-bold hover:text-white w-[4.6rem] md:w-[6rem] lg:w-[8rem] justify-center hover:bg-[#1a0000]' activeClass='active' smooth spy to="about" >About</Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 md:px-3 lg:py-[14px] hover:font-bold hover:text-white w-[4.6rem] md:w-[6rem] lg:w-[8rem] justify-center hover:bg-[#1a0000]' activeClass='active' smooth spy to="portfolio" >Portfolio</Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 md:px-3 lg:py-[14px] hover:font-bold hover:text-white w-[4.6rem] md:w-[6rem] lg:w-[8rem] justify-center hover:bg-[#1a0000]' activeClass='active' smooth spy to="skills" >Skills</Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 md:px-3 lg:py-[14px] hover:font-bold hover:text-white w-[4.6rem] md:w-[6rem] lg:w-[8rem] justify-center hover:bg-[#1a0000]' activeClass='active' smooth spy to="contact" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Header;