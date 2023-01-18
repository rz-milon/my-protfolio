import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import profileImg from '../../../Assets/profile-image/profile-img.png'


const About = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="hero min-h-screen text-white">
            <div className=" hero-content flex flex-col lg:flex-row-reverse sm:32 md:36 lg:mx-40" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <img src={profileImg} alt='' className="max-w-sm rounded-lg shadow-lg bg-white h-80 opacity-80 hover:opacity-100 transition delay-300" />
                <div className='min-w-lg'>
                    <h1 className="text-4xl tracking-tight font-light  lg:text-left text-center">About Me</h1>

                    <p className="text-xl text-left tracking-wide leading-7 font-thin mt-4 lg:mt-12"><article>I'm a react front end web developer from Dhaka, Bangladesh.</article>
                        <article>
                            In previous years I devoted my time to learning Sociology and I have completed my graduation.</article> <article>Always hungry to keep learning.
                                I like dabbling in various parts of front-end development and like to learn about new technologies.</article>
                        <article>A Web Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing.</article>
                        <article>Having a strong understanding of web standards and best practices, and a passion for creating websites that users will find easy to use and visually appealing.</article></p>
                    <p className='text-xl tracking-wide leading-8 font-light mt-5 flex'><span className='text-red-800'>Download My Resume</span> <a href="http://" target="_blank" rel="noopener noreferrer"><FaDownload className='w-8 h-8 ml-5 hover:text-red-800 hover:translate-y-1' /></a></p>

                </div>
            </div>
        </div>
    );
};

export default About;