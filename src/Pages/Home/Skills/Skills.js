import Aos from 'aos';
import React, { useEffect } from 'react';


const Skills = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className='hero min-h-screen'>
            <div className='text-white lg:mx-40 md:mx-36 sm:mx-32 lg:max-w-screen-xl md:max-w-full sm:max-w-xl' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <h1 className="text-4xl tracking-tight font-light lg:text-left text-center ">Skills & Experience</h1>
                <div className='mt-4 lg:mt-12'>
                    <p className="py-8 text-left">I'm a front-end web developer. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind. I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects.</p>
                </div>
                <div className='flex justify-start flex-wrap tracking-widest'>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>JavaScript</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>React</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>NodeJs</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>MongoDB</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>HTML5</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>CSS3</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>Tailwind</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>Bootstrap</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>Figma</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>Git</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>VS Code</span></div>
                    <div className='mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-red-600'><span>GitHub</span></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;