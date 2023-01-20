import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;