import React from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import projectImg1 from '../../Assets/ProjectScreen/Screenshot from 2023-01-12 00-38-50.png'

const Portfolio = () => {
    return (
        <div className='min-h-screen bg-gray-700'>
            <div className='sm:mx-5 md:mx-10 lg:mx-24 pt-3'>
                <h2 className='text-5xl mb-12 text-white'>My Projects</h2>
                <div className='grid lg:grid-cols-3 gap-2 lg:gap-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-10 sm:mx-auto'>
                    <div className="card w-full  bg-gray-800 text-white rounded-lg shadow-xl">
                        <figure><img src={projectImg1} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                        </div>
                        <div className="card-actions justify-end space-x-3 px-3 pb-2">
                            <a className='flex mr2 rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink /></a>
                            <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink /></a>
                        </div>
                    </div>

                    <div className="card w-full  bg-gray-800 text-white rounded-lg shadow-xl">
                        <figure><img src={projectImg1} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                        </div>
                        <div className="card-actions justify-end space-x-3 px-3 pb-2">
                            <a className='flex mr2 rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink /></a>
                            <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink /></a>
                        </div>
                    </div>

                    <div className="card w-full  bg-gray-800 text-white rounded-lg shadow-xl">
                        <figure><img src={projectImg1} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                ONLINE QUIZ PROJECT
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=''>
                                <p className='font-thin text-justify'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                            </div>
                        </div>
                        <div className="card-actions justify-end space-x-3 px-3 pb-2">
                            <a className='flex mr2 rounded hover:bg-black/95 px-2 py-1' href="https://guileless-rolypoly-824fa3.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>LIVE</span><HiExternalLink /></a>
                            <a className='flex rounded hover:bg-black/95 px-2 py-1' href="https://github.com/rz-milon/Assignment/tree/master-branch/b610-learning-platform-client-side-RZ-Milon" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>SOURCE</span><HiExternalLink /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;