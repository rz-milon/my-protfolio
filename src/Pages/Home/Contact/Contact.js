import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaFacebookSquare, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc';


const Contact = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className='hero min-h-screen'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mx-40 md:mx-36 sm:mx-32" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <div className="flex flex-col justify-between lg:flex-row space-x-32">
                    <div className="mb-12 lg:ml-0 lg:mb-0">
                        <div className="mb-6 ">
                            <h2 className="max-w-full lg:text-left mb-6 text-4xl tracking-tight font-light text-center text-white">
                                Get In Touch
                            </h2>
                            <p className="text-white lg:text-left tracking-wider text-center md:text-lg">
                                I would love to hear from you.
                            </p>
                        </div>
                        <hr className="mb-6 border-gray-300 mt-20" />
                        <div className="flex space-x-6 justify-center">
                            <a href="http://rzmilon@gmail.com" target="_blank" rel="noopener noreferrer"><FaRegEnvelope className='w-10 h-10 mb-3 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="https://github.com/rz-milon" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="https://www.linkedin.com/in/rzmilon" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                        </div>
                    </div>
                    <div className="px-5 lg:mx-0">
                        <div className='space-y-5'>
                            <input type="text" placeholder="Full Name" name='name' required
                                className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-red-800 w-full  bg-transparent" />
                            <input type="email" placeholder="Email" name='email' required className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-red-800 w-full bg-transparent" />

                            <textarea type='text' name='message' required className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-red-800 w-full h-36 bg-transparent" placeholder="Message"></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className='mt-5 text-xl text-red-600 px-10 py-2 hover:bg-black/20 border border-red-800'>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;