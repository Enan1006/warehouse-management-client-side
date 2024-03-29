import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeInventory from '../HomeInventory/HomeInventory';
import Process from '../Process/Process';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <HomeInventory />
            <Process />
        </div>
    );
};

export default Home;