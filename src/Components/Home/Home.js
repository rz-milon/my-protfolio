import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center fixed top-1/3 text-white">
                <div className="max-w-full text-left">
                    <p className="text-2xl font-light tracking-tight mb-3">Hello, My name is</p>
                    <h1 className="text-7xl font-thin text-red-700 tracking-tighter mb-2">Rokanuzzaman Milon</h1>
                    <p className='text-2xl font-light tracking-tight mb-4'>and I'm a </p>
                    <h2 className='text-4xl font-light tracking-tight'><span>Front End</span> <span className='text-red-700'>Web Developer</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Home;