import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';


const MyOrderlist = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([])
    const [loading, setLoadiong] = useState(false)

    console.log(user)
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + user?.email)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [loading])
    const cancelBooking = (obj) => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            axios.get('http://localhost:5000/orders/cancel/' + obj._id).then((res) => {
                setLoadiong(!loading)
            })
        }
    }
    return (
        <div>
            <h2>your orders</h2>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {booking.length > 0 && booking.map((obj, index) => {
                            return <tr>
                                <th >{index + 1}</th>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.watch_name}</td>
                                <td>{obj.address}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.status}</td>
                                <td>{obj.status === "cancelled" ? "" : <button onClick={() => cancelBooking(obj)} className="btn btn-sm btn-danger">Cancel</button>}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrderlist;