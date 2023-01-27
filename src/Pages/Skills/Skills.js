import Aos from 'aos';
import React, { useEffect } from 'react';


const Skills = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className='hero min-h-screen'>
            {/* <SkillsParticle /> */}
            <div className='text-white mx-10 lg:mx-40 md:mx-36 sm:mx-32 lg:max-w-screen-xl md:max-w-full sm:max-w-xl' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                <h1 className="text-4xl my-12 sm:my-5 tracking-tight font-light lg:text-left text-center text-[#ff3d00]">Skills & Experience</h1>
                <div className='mt-2 lg:mt-12'>
                    <p className="py-2 lg:py-8 text-left leading-7">I'm a front-end web developer. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind. I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects.</p>
                </div>
                <div className='flex justify-center lg:justify-start flex-wrap tracking-widest'>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>JavaScript</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>React</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>NodeJs</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>MongoDB</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>HTML5</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>CSS3</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>Tailwind</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>Bootstrap</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>Figma</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>Git</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>VS Code</span></div>
                    <div className='mr-4 lg:mr-16 border-b-2 text-xl font-thin tracking-wide  mb-5 border-[#ff3d00]'><span>GitHub</span></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;