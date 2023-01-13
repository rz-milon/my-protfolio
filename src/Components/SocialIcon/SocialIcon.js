import React from 'react';
import { FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa';
import { MdPictureAsPdf } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";


const SocialIcon = () => {
    return (
        <div className='fixed top-1/4 ml-5'>
            <a href="http://" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaRegEnvelope className='w-6 h-6 mb-3 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Resume link" className='tooltip tooltip-right tooltip-info' data-tip='Resume'><MdPictureAsPdf className='w-6 h-6 hover:text-red-600 hover:translate-x-1 duration-700 text-gray-400' /></a>
        </div>
    );
};

export default SocialIcon;