import Aos from 'aos';
import React, { useEffect } from 'react';
import bgImg from '../../../Assets/banner-img/pietro-jeng-n6B49lTx7NM-unsplash.jpg';
import BannerParticle from '../../../Particles/BannerParticle';
// import './Banner.css';




const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="hero min-h-screen bg-[#090a16]"> 
            {/* <BannerParticle className='particle' /> */}
            {/* <img src={bgImg} alt="" className='w-full h-screen bg-no-repeat bg-cover bg-fixed opacity-20 relative top-0' /> */}
            <div className="hero-content text-center  top-1/3 text-white" >
                <div className="max-w-full text-left">
                    <p className="text-xl font-light tracking-tight mb-3">Hello, My name is</p>
                    <h1 className="lg:text-5xl text-3xl font-light text-[#ff3d00] tracking-wide mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">Rokanuzzaman Milon</h1>
                    <p className='text-xl font-light tracking-tight mb-4'>and I'm a </p>
                    <h2 className='text-2xl lg:text-3xl font-light tracking-tight flex-wrap' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine"><span>Front End</span> <span className='text-[#ff3d00]'>Web Developer</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;