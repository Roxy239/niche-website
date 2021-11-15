import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Addwatch.css';

const AddWatch = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://nameless-sands-58431.herokuapp.com/watches', data)
            .then(res => {

                if (res.data) {
                    alert('added successfully');
                    reset();
                }
                // console.log(res);
            })
    }
    return (
        <div className="addservice col-sm-7 mx-auto mt-5">

            <h2>Add a New Watch </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />

                <input type="number" {...register("fee")} placeholder="Price" />

                <textarea {...register("description")} placeholder="Description" />

                <input {...register("img")} placeholder="Image link" />

                <input type="submit" className="btn btn-success mt-3 fw-bold" />

            </form>
            {/* <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br /> */}

        </div>
    );
};

export default AddWatch;