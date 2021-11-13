import React from 'react';
import { Link } from 'react-router-dom';
import './Watch.css';

const Watch = ({ watch }) => {

    const { _id, key, name, fee, description, img } = watch;

    return (
        <div className="watch pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Price:${fee}</h6>
            <p className="px-3">{description}</p>
            {/* <button className=" btn btn-dark">Buy now</button> */}
            <Link to={`/booking/${key}`}>
                <button className=" btn btn-dark">Book now</button>
            </Link>
        </div>
    );
};

export default Watch;