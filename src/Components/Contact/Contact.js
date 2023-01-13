import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc';


const Contact = () => {
    return (
        <div className='hero min-h-screen bg-slate-800'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mx-40 md:mx-36 sm:mx-32">
                <div className="flex flex-col justify-between lg:flex-row space-x-32">
                    <div className="mb-12 lg:ml-0 lg:mb-0">
                        <div className="mb-6 ">
                            <h2 className="max-w-full lg:text-left mb-6 font-sans text-3xl font-bold text-center text-white sm:text-xl sm:leading-none">
                                Get In Touch
                            </h2>
                            <p className="text-white lg:text-left text-center md:text-lg">
                                I would love to hear from you.
                            </p>
                        </div>
                        <hr className="mb-6 border-gray-300 mt-20" />
                        <div className="flex space-x-6 justify-center">
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaRegEnvelope className='w-10 h-10 mb-3 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='w-10 h-10 hover:text-red-600 hover:-translate-y-1 duration-700 text-gray-400' /></a>
                        </div>
                    </div>
                    <div className="px-5 lg:mx-0">
                        <div className='space-y-5'>
                            <input type="text" placeholder="Full Name" name='name' required
                                className="outline-none hover:bg-slate-200 px-4 py-3 border-b hover:border-red-800 w-full  bg-transparent" />
                            <input type="email" placeholder="Email" name='email' required className="outline-none hover:bg-slate-200 px-4 py-3 border-b hover:border-red-800 w-full bg-transparent" />

                            <textarea type='text' name='message' required className="outline-none hover:bg-slate-200 px-4 py-3 border-b hover:border-red-800 w-full h-36 bg-transparent" placeholder="Message"></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className='mt-5 text-xl text-red-600 px-8 py-2 hover:bg-gray-400 border border-red-800'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;