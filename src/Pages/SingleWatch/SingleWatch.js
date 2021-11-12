import React from 'react';
import { Link } from 'react-router-dom';
import './SingleWatch.css'

const SingleWatch = ({ watch }) => {
    const { name, fee, description, img } = watch;
    //_id,
    return (
        <div className="watch pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Price:${fee}</h6>
            <p className="px-3">{description}</p>
            <button className=" btn btn-dark">Buy now</button>
            {/* <Link to={`/booking/${_id}`}>
            <button className=" btn btn-dark">Book now</button>
        </Link> */}
        </div>
    );
};

export default SingleWatch;