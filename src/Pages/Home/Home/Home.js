import Aos from 'aos';
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="hero min-h-screen">
            {/* <img src={bgImg} alt="" className=' opacity-25'/> */}
            <div className="hero-content text-center  top-1/3 text-white" >
                <div className="max-w-full text-left">
                    <p className="text-2xl font-light tracking-tight mb-3">Hello, My name is</p>
                    <h1 className="text-7xl font-thin text-red-700 tracking-tighter mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">Rokanuzzaman Milon</h1>
                    <p className='text-2xl font-light tracking-tight mb-4'>and I'm a </p>
                    <h2 className='text-4xl font-light tracking-tight' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine"><span>Front End</span> <span className='text-red-700'>Web Developer</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Home;