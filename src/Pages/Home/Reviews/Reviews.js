import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import axios from "axios"
import Rating from './Rating';
import "./reviews.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/reviews").then((res) => {
            setReviews(res.data)
            console.log(res.data)
        })
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
    ];

    const styleComponent = {
        "display": "flex",
        "flex-direction": "column",
        "width": "450px",
        "justify-content": "center",
        "align-items": "center",
        "height": "3000px",
        "color": "#000",
        "background-color": "whitesmoke",
        "margin": "0 15px",
        "font-size": "1rem"
    };

    const styleApp = {
        "font-family": "sans-serif",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "height": "40vh"
    }


    return (
        <div>
            <h2 className="text-primary mt-5">Reviews</h2>
            <Carousel pagination={false} breakPoints={breakPoints}>
                {reviews.length > 0 && reviews.map((obj) => {
                    return <>
                        <div style={styleApp} className="mb-2">

                            <div style={styleComponent}>
                                <p>{obj.review}</p>

                                <Rating rating={obj.rating} />

                                <h5>{obj.email}</h5>
                            </div>


                        </div>




                        {/* <div class="colO">
                            <div class="testimonialO">
                                <img src="./ratingUser.png" alt="" />
                                <div class="nameO">{obj.name}</div>
                                <div class="starsO">
                                    <Rating rating={obj.rating} />
                                </div>
                                <p>
                                    {obj.review}
                                </p>
                            </div>
                        </div> */}
                    </>
                })}
            </Carousel>


        </div>
    );
};

export default Reviews;