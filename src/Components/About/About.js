import React from 'react';
import { FaDownload } from 'react-icons/fa';
import profileImg from '../../Assets/profile-img/IMG_20221214_090908.jpg'

const About = () => {
    return (
        <div className=" min-h-screen bg-gray-800 text-white">
            <div className=" hero-content flex flex-col lg:flex-row-reverse mx-48">
                <img src={profileImg} alt='' className="max-w-sm rounded-lg shadow-2xl h-80 opacity-70 hover:opacity-100 transition delay-300 mt-24" />
                <div className='min-w-lg'>
                    <h1 className="text-2xl font-bold mb-20">About Me</h1>

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p>Download My Resume</p>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaDownload className='w-8 h-8 mt-5 hover:text-red-600 hover:translate-y-1' /></a>
                </div>
            </div>
        </div>
    );
};

export default About;