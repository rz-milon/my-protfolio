import React, { useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import projectImg1 from '../../../Assets/project-image/project1-img.png';
import projectImg2 from '../../../Assets/project-image/project2-img.png';
import projectImg3 from '../../../Assets/project-image/project3-img.png';
import Aos from 'aos';



const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='hero min-h-screen'>
            <div className='mx-10 sm:mx-5 md:mx-10 lg:mx-40 my-20' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <h2 className='text-4xl tracking-tight font-light lg:text-left text-center text-[#ff3d00] my-12 sm:my-5 '>My Projects</h2>
                <div className='grid lg:grid-cols-3 gap-10 lg:gap-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-10  mt-4 lg:mt-12'>
                <div className="card w-full sm:max-w-sm h-fit bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                        <figure><img src={projectImg2} alt="" className='w-full lg:h-28 h-36' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                LEARNING PLATFORM
                            </h2>
                            <p className='text-left'>This is learning project in develop in </p>
                            <div className=''>
                                <p className='font-thin text-justify space-x-2'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex lg:justify-between justify-end">
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://assignment-10-509ea.web.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:max-w-sm h-fit bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                        <figure><img src={projectImg1} alt="" className='w-full lg:h-28 h-36 sm:max-h-screen' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                FLOOD DONATION
                            </h2>
                            <p className='text-left'>Simple project developed HTML & CSS</p>
                            <div className=''>
                                <p className='font-thin text-justify space-x-2'> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex lg:justify-between justify-end">
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://storied-marzipan-7e26f5.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:max-w-sm h-fit bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                        <figure><img src={projectImg3} alt="" className='w-full lg:h-28 h-36 sm:max-h-screen' /></figure>

                        <div className="card-body px-4 py-2 text-left">
                            <h2 className="card-title mb-3">
                                PLAYERS WEBSITE
                            </h2>
                            <p className='text-left'>Chose most valuable players in the world, this site is full responsible</p>
                            <div className=''>
                                <p className='font-thin text-justify space-x-2'><span>React</span> <span>JavaScript</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                            <div className="card-actions inline-flex lg:justify-between justify-end">
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://app.netlify.com/sites/delicate-hamster-62a4f7" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;