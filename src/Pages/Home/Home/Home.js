import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Portfolio></Portfolio>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;