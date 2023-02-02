import Aos from 'aos';
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Portfolio.css';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import projectImg1 from '../../Assets/project-image/project1-img.png';
import projectImg2 from '../../Assets/project-image/project2-img.png';
import projectImg3 from '../../Assets/project-image/project3-img.png';



const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="grid w-full items-center bg-cover mt-12" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
             <h2 className='mx-10 lg:mx-52 mt-6 lg:mt-10 text-4xl tracking-tight font-light lg:text-left text-center text-[#ff3d00]'>My Projects</h2>
            <br />
            <>
                <Swiper
                    slidesPerView={'1'}
                    centeredSlides={false}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                >
                    <br />
                    <br />

                    <SwiperSlide>
                        <div className="card w-full h-[350px] bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                            <figure><img src={projectImg2} alt="" className='w-full lg:h-28 h-36' /></figure>

                            <div className="card-body px-4 py-2 text-left">
                                <h2 className="card-title mb-3">
                                    LEARNING PLATFORM
                                </h2>
                                <p className='text-left'>This is learning project in develop in </p>
                                <div className=''>
                                    <p className='font-thin text-justify space-x-2'><span>React</span> <span>JavaScript</span> <span>Firebase</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                                </div>
                                <div className="card-actions inline-flex  justify-end">
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://assignment-10-509ea.web.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href=" " target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full h-[350px] bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                            <figure><img src={projectImg1} alt="" className='w-full lg:h-28 h-36' /></figure>

                            <div className="card-body px-4 py-2 text-left">
                                <h2 className="card-title mb-3">
                                    FLOOD DONATION
                                </h2>
                                <p className='text-left'>Simple project developed HTML & CSS</p>
                                <div className=''>
                                    <p className='font-thin text-justify space-x-2'> <span>HTML</span> <span>CSS</span></p>
                                </div>
                                <div className="card-actions inline-flex  justify-end">
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://storied-marzipan-7e26f5.netlify.app/" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href=" " target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full h-[350px] bg-black/10 text-white rounded-lg shadow-xl shadow-white/10 hover:shadow-[#ff3d00]">
                            <figure><img src={projectImg3} alt="" className='w-full lg:h-28 h-36' /></figure>

                            <div className="card-body px-4 py-2 text-left">
                                <h2 className="card-title mb-3">
                                    PLAYERS WEBSITE
                                </h2>
                                <p className='text-left'>Chose most valuable players in the world, this site is full responsible</p>
                                <div className=''>
                                    <p className='font-thin text-justify space-x-2'><span>React</span> <span>JavaScript</span> <span>Tailwind</span> <span>HTML</span> <span>CSS</span></p>
                                </div>
                                <div className="card-actions inline-flex  justify-end">
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href="https://app.netlify.com/sites/delicate-hamster-62a4f7" target="_blank" rel="noopener noreferrer"><HiOutlineGlobeAlt className='w-6 h-6 mr-2' /><span className='mr-2'>Live</span><HiExternalLink className='w-6 h-6' /></a>
                                    <a className='flex rounded hover:bg-[#ff3d00] px-2 py-1' href=" " target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6 mr-2' /><span className='mr-2'>Source</span><HiExternalLink className='w-6 h-6' /></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>

    );
};

export default Portfolio;