import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Categories from '../components/home/Categories';
import WholesaleCTA from '../components/home/WholesaleCTA';

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <About />
            <Categories />
            <WholesaleCTA />
        </div>
    );
};

export default Homepage;
