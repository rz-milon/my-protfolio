import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { MdPictureAsPdf } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";


const SocialIcon = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className='fixed top-1/4 ml-7' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-sine"
        >
            <a href="https://github.com/rz-milon" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="https://www.linkedin.com/in/rzmilon/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="https://twitter.com/rz_milon" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <HiMail className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Resume link" className='tooltip tooltip-right tooltip-info' data-tip='Resume'><MdPictureAsPdf className='w-6 h-6 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
        </div>
    );
};

export default SocialIcon;