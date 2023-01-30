import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { MdPictureAsPdf } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";



const LeftSideSocialIcon = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='absolute left-0 top-0 z-[99] hidden lg:block' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-sine"
        >
            <div className='bg-[#ff3d00] h-28 w-[1px] my-0 mx-auto'/>
            <ul className='block space-y-3 mx-6 my-4'>
                <li className='hover:text-[#ff3d00] hover:translate-x-1 duration-700 text-gray-400'>
                    <a href="https://github.com/rz-milon" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-6 h-6' /></a>
                </li>
                <li className='hover:text-[#ff3d00] hover:translate-x-1 duration-700 text-gray-400'>
                    <a href="https://www.linkedin.com/in/rzmilon/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-6 h-6' /></a>
                </li>
                <li className='hover:text-[#ff3d00] hover:translate-x-1 duration-700 text-gray-400'>
                    <a href="https://twitter.com/rz_milon" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6' /></a>
                </li>
                <li className='hover:text-[#ff3d00] hover:translate-x-1 duration-700 text-gray-400'>
                    <a href="mailto:rzmilon@gmail.com" target="_blank" rel="noopener noreferrer">
                        <HiMail className='w-6 h-6' /></a>
                </li>
                <li className='hover:text-[#ff3d00] hover:translate-x-1 duration-700 text-gray-400'>
                    <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Resume link" className='tooltip tooltip-right tooltip-info' data-tip='Resume'><MdPictureAsPdf className='w-6 h-6' /></a>
                </li>
            </ul>
        </div>
    );
};

export default LeftSideSocialIcon;