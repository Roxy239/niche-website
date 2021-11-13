import React from 'react';
import Review from '../../Dashboard/Review';

import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';




import Watches from '../Watches/Watches';



const Home = () => {
    return (
        <div id='home'>

            <Banner></Banner>

            <Watches></Watches>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;