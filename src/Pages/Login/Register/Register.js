import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <h2> Register now</h2>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                {/* <div class="form-group mx-auto w-25">
                    <label for="name">Your name</label>
                    <input onChange={handleOnChange} name="name" type="name" class="form-control" id="name" placeholder="Enter name" />

                </div> */}
                <div class="form-group mx-auto w-25">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={handleOnChange} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group w-25  mx-auto">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={handleOnChange} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <br />
                    <input onChange={handleOnChange} name="password2" type="password" class="form-control" id="exampleInputPassword1" placeholder="retype your password" />
                </div>
                <br />
                <button type="submit" class="btn btn-dark">Register</button>
                <p >Already Registered?<br /><button className="btn btn-warning"><Link className="text-decoration-none" to="/login"> Please Log in  </Link></button></p>
            </form>}
            {isLoading && <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {authError && <div className="alert alert-danger" role="alert">{authError} </div>}
            <br /> <br /> <br />
        </div>
    );
};

export default Register;