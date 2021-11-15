import React from 'react';
// import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
import * as BsIcon from 'react-icons/bs';
import * as MdIcon from 'react-icons/md';

const Rating = ({ rating }) => {
    const starCount = Number(rating);
    const star = [];
    for (let i = 0; i < starCount; i++) {
        star.push(1);
    }

    for (let i = 0; i < 5 - starCount; i++) {
        star.push(0);
    }

    console.log("test rate", rating, starCount, star);

    return (
        <div>
            {star.map((obj) => {
                if (obj === 1) {
                    return <MdIcon.MdStar />;
                }
                else {
                    return <MdIcon.MdStarOutline />;
                }
            })}

        </div>
    );
};

export default Rating;