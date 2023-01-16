import React from 'react';
import { FaDownload } from 'react-icons/fa';


const About = () => {
    return (
        <div className=" min-h-screen text-white">
            <div className=" hero-content flex flex-col lg:flex-row-reverse mx-48">
                <img src='' alt='' className="max-w-sm rounded-lg shadow-lg bg-white h-80 opacity-80 hover:opacity-100 transition delay-300" />
                <div className='min-w-lg'>
                    <h1 className="text-4xl tracking-tight font-light mt-10 mb-14">About Me</h1>

                    <p className="text-xl tracking-wide leading-7 font-thin"><article>I'm a react front end web developer from Dhaka, Bangladesh.</article>
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