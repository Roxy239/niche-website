
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { watchId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    // details of a product
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
            {/* <h2>this is booking: {watch?.key}</h2>
            <img style={{ width: "120px", height: "120px" }} src={watch?.img} alt="" />
            <p> Fee:{watch?.fee}</p>
            <p>Description:{watch?.description}</p> */}
            {/* trying */}
            <div className="row">
                <div className="col-md-6">
                    <h2>this is booking: {watch?.key}</h2>
                    <img style={{ width: "250px", height: "250px" }} src={watch?.img} alt="" />
                    <p> Fee:{watch?.fee}</p>
                    <p>Description:{watch?.description}</p>
                </div>
                {/* purchase form using react hook */}
                <div className="col-md-6 addservice">
                    <br /><br />
                    <h5>Place your order</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input type='text' defaultValue={user.displayName} {...register("name")} placeholder="name" />
                        <input type='text' defaultValue={user.email} {...register("email")} placeholder="email" />
                        <input type='text' value={watch?.name} {...register("package")} placeholder="package name" />

                        <input type="text" {...register("address", { required: true })} placeholder="address" />
                        <input type="text" {...register("phn", { required: true })} placeholder="contact" />



                        <input type="submit" />
                    </form>


                    {/* <form >
                    <div className="col-4">

                    </div>

                </form> */}
                </div>


            </div>


            ---------

            <br /> <br /> <br />
        </div>
    );
};

export default Booking;