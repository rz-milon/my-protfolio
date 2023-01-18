import React, { useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import projectImg from '../../../Assets/project-image/project1-img.png';
import Aos from 'aos';



const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='hero min-h-screen'>
            <div className='sm:mx-5 md:mx-10 lg:mx-40' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <h2 className='text-4xl tracking-tight font-light text-white lg:text-left text-center'>My Projects</h2>
                <div className='grid lg:grid-cols-3 gap-2 lg:gap-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-10 sm:mx-auto mt-12'>
                    <div className="card w-full h-fit bg-black/10 text-white rounded-lg shadow-xl hover:shadow-white">
                        <figure><img src={projectImg} alt="" className='w-full' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex justify-around px-3">
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full h-fit bg-black/10 text-white rounded-lg shadow-xl hover:shadow-white">
                        <figure><img src={projectImg} alt="" className='w-full' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex justify-around px-3">
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full h-fit bg-black/10 text-white rounded-lg shadow-xl hover:shadow-white">
                        <figure><img src={projectImg} alt="" className='w-full' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex justify-around px-3">
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;