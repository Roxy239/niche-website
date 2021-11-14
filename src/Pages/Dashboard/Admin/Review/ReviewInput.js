import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
function ReviewInput() {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const { user } = useAuth([]);
    console.log(user);
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data) {
                    alert('added successfully');
                    reset();
                }
                // console.log(res);
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        {/* <input type='text' defaultValue={user.email} {...register("email")} placeholder="email" /> */}
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail" defaultValue={user?.email} {...register("email")} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="rating" className="col-sm-2 col-form-label">Rating:</label>
                    <div className="col-sm-2">
                        <select name="rating" id="rating" {...register("rating")} >
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="form-floating">
                        <textarea className="form-control" {...register("review")} placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "150px" }}></textarea>
                        <label for="floatingTextarea2">Review</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        {/* <input type="submit" /> */}
                        <button type="submit" className="btn btn-success mt-3 fw-bold">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ReviewInput;