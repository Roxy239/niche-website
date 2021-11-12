import React from 'react';
import { Carousel } from 'react-bootstrap';



import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'




const Banner = () => {
    return (
        <>
            <Carousel className="my-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h1>FIND YOUR HUBLOT WATCH</h1>
                        <p>Explore all of our unique range of watches to find the perfect Hublot for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1> Get 20% discount</h1>
                        <p>Second time buyers within six months get 20% discount </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>OUR BOUTIQUES</h1>
                        <p>We have boutiques all over the world, in the most exclusive locations. Discover our global network.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;