import './Dashboard.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import useAuth from '../../../hooks/useAuth';

function MakeAdmin() {
    const { user } = useAuth();
    const [users, setUsers] = useState([])
    const [loading, setLoadiong] = useState(false)

    console.log(user)
    useEffect(() => {
        fetch('https://nameless-sands-58431.herokuapp.com/users/alluser')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [loading])

    // const cancelBooking = (obj) => {
    //     const flag = window.confirm("Are you sure?");
    //     if (flag) {
    //         axios.get('https://nameless-sands-58431.herokuapp.com/orders/cancel/' + obj._id).then((res) => {
    //             setLoadiong(!loading)
    //         })
    //     }
    // };

    const makeAdmin = (obj) => {
        const flag = window.confirm("Are you sure?");
        if (flag) {
            axios.get('https://nameless-sands-58431.herokuapp.com/users/makeadmin/' + obj._id).then((res) => {
                setLoadiong(!loading)
            })
        }
    };

    return (
        <>
            <div className="col-sm-7 mx-auto mt-5">
                <div className="col">
                    <h3 className="fs-4 mb-2">Make a Admin</h3>
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                {/* <th scope="col">Make Admin</th> */}
                                {/* <th scope="col">Phone</th>
                                <th scope="col">Status</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 && users.map((obj, index) => {
                                return <tr>
                                    <th >{index + 1}</th>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.role}</td>
                                    {/* <td>{obj.address}</td>
                                    <td>{obj.phone}</td>
                                    <td>{obj.status}</td> */}
                                    <td>{obj.role === "admin" ? "" : <>
                                        <button onClick={() => makeAdmin(obj)} className="btn btn-sm btn-success">Make Admin</button>
                                        {/* <button onClick={() => cancelBooking(obj)} className="btn btn-sm btn-danger">Cancel</button> */}
                                    </>
                                    }</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MakeAdmin;