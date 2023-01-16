import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

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