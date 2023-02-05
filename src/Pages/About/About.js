import Aos from 'aos';
import React, { useEffect } from 'react';
import { HiCloudArrowDown } from 'react-icons/hi2';
import profileImg from '../../Assets/profile-image/profile-img.png';


const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="min-h-screen text-white">
            <div className="flex flex-row-reverse sm:mx-28 md:mx-24 lg:mx-28 mt-4 lg:mt-14" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">

                <div className='min-w-lg p-4'>
                    <img src={profileImg} alt='' className="max-w-[120px] md:max-w-sm lg:max-w-sm rounded-lg shadow-lg bg-white float-right h-[150px] md:h-64 lg:h-80 opacity-70 hover:opacity-100 transition delay-300 mt-[55px] lg:mt-20 md:ml-2 lg:ml-3" />
                    <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-light text-left text-[#ff3d00] ">About Me</h1>
                    <p className="text-[1.30rem] md:text-lg lg:text-[1.2rem] text-left tracking-wide leading-5 md:leading-6 lg:leading-7 font-thin mt-4 lg:mt-12 font-sans"><article>I'm a react front end web developer from Dhaka, Bangladesh.</article>
                        <article>
                            In previous years I devoted my time to learning Sociology and I have completed my graduation.</article> <article>I love creating responsive websites.I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects. I always hungry to keep learning.
                                I like dabbling in various parts of front-end development and like to learn about new technologies.</article>
                        <article>A Web Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing.</article>
                        <article>Having a strong understanding of web standards and best practices, and a passion for creating websites that users will find easy to use and visually appealing.</article></p>
                    <p className='text-xl tracking-wide leading-8 font-light mt-1 md:mt-3 lg:mt-5 flex justify-start'><span className='text-[#ff3d00]'>Download My Resume</span> <a href="https://drive.google.com/file/d/1wstkr5zr0aKXForuJVBfyBwxogSlqkw8/view?usp=share_link" target="_blank" rel="noopener noreferrer"><HiCloudArrowDown className='w-8 h-8 ml-5 hover:text-[#ff3d00] hover:translate-y-1' /></a></p>
                </div>
            </div>
        </div>
    );
};

export default About;