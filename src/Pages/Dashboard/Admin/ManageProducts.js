import './Dashboard.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import useAuth from '../../../hooks/useAuth';

function ManageProducts() {
    const { user } = useAuth();
    const [watches, setWatches] = useState([])
    const [loading, setLoadiong] = useState(false)

    console.log(user)
    useEffect(() => {
        fetch('https://nameless-sands-58431.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, [loading])

    const deleteWatch = (obj) => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            axios.delete('https://nameless-sands-58431.herokuapp.com/watches/' + obj._id).then((res) => {
                setLoadiong(!loading)
            })
        }
    };

    // const acceptBooking = (obj) => {
    //     const flag = window.confirm("Are you sure?");
    //     if (flag) {
    //         axios.get('https://nameless-sands-58431.herokuapp.com/orders/accept/' + obj._id).then((res) => {
    //             setLoadiong(!loading)
    //         })
    //     }
    // };

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
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                {/* <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {watches.length > 0 && watches.map((obj, index) => {
                                return <tr>
                                    <th >{index + 1}</th>
                                    <td>{obj.name}</td>
                                    <td>{obj.fee}</td>
                                    <td>{obj.description}</td>
                                    {/* <td>{obj.address}</td>
                                    <td>{obj.phone}</td>
                                    <td>{obj.status}</td> */}
                                    <td>
                                        <button onClick={() => deleteWatch(obj)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ManageProducts;