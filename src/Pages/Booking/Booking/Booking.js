
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { watchId } = useParams();

    const [watch, setwatch] = useState({})
    const [watches, setwatches] = useState([])
    useEffect(() => {
        fetch('../watches.json')
            .then(res => res.json())
            .then(data => setwatches(data));
    }, [])

    useEffect(() => {
        if (watches.length > 0) {
            console.log(watches, watchId)
            const data = watches.find((obj) => obj.key === Number(watchId))
            console.log(data);
            setwatch(data)
        }
    }, [watches])
    return (
        <div>
            <h2>this is booking: {watch?.key}</h2>
            <img style={{ width: "120px", height: "120px" }} src={watch?.img} alt="" />
            <p> Fee:{watch?.fee}</p>
            <p>Description:{watch?.description}</p>

            <br /> <br /> <br />
        </div>
    );
};

export default Booking;