import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaAngleDown, FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from "react-icons/vsc";
import { HiMail } from 'react-icons/hi';
import { MdPictureAsPdf } from "react-icons/md";
import BubbleParticle from '../../components/Particles/BubbleParticle';





const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="hero min-h-screen min-w-full bg-[#090a16]">
            <BubbleParticle />
            <div className="hero-content text-center top-1/2  lg:top-1/3 text-white" >
                <div className="max-w-full text-left">
                    <p className="text-xl font-light tracking-tight mb-3">Hello, My name is</p>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-[#ff3d00] tracking-tight mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">Rokanuzzaman Milon</h1>
                    <p className='text-xl font-light tracking-tight mb-4'>and I'm a </p>
                    <h2 className='text-2xl lg:text-3xl font-light tracking-tight flex-wrap' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine"><span>Front End</span> <span className='text-[#ff3d00]'>Web Developer</span></h2>
                    <div className='sm:hidden block' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <ul className='flex justify-center space-x-4 mt-12'>
                            <li>
                                <a href="https://github.com/rz-milon" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/rzmilon/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/rz_milon" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                            <li>
                                <a href="mailto:rzmilon@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <HiMail className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Resume link" className=' tooltip tooltip-top tooltip-info' data-tip='Resume'><MdPictureAsPdf className='w-8 h-8 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='absolute left-1/2 right-0 bottom-8 md:bottom-10 lg:bottom-16 mx-auto'>
                <a href="#about"><FaAngleDown className='animate-bounce w-10 h-10 text-[#ff3d00] hover:bg-white/5 rounded-full' /></a>
            </div> */}
        </div>
    );
};

export default Home;