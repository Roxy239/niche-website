import './Dashboard.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';

function Tabled() {
    const { user } = useAuth();
    const [booking, setBooking] = useState([])
    const [loading, setLoadiong] = useState(false)

    console.log(user)

    useEffect(() => {
        fetch('https://nameless-sands-58431.herokuapp.com/orders?email=' + user?.email)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [loading])

    const cancelBooking = (obj) => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            axios.get('https://nameless-sands-58431.herokuapp.com/orders/cancel/' + obj._id).then((res) => {
                setLoadiong(!loading)
            })
        }
    }

    return (
        <>
            <div className="col-sm-7 mx-auto mt-5">
                <div className="col">
                    <h3 className="fs-4 mb-2">My Orders</h3>
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
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
                                    <td>{obj.status !== "pending" ? "" : <button onClick={() => cancelBooking(obj)} className="btn btn-sm btn-danger">Cancel</button>}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Tabled;