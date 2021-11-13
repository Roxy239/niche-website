
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    return (
        <div className="login-form">
            <div>
                <h2> Please login</h2>
                {!isLoading && <form onSubmit={handleLoginSubmit}>

                    <div class="form-group mx-auto w-25">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={handleOnChange} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group w-25  mx-auto">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handleOnChange} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-dark">Login</button>
                    <p >new to Hublot?<br /><button className="btn btn-warning"><Link className="text-decoration-none" to="/register">Create Account ? </Link></button></p>
                </form>}
                {isLoading && <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {authError && <div className="alert alert-danger" role="alert">{authError} </div>}
                <br /> <br /> <br />
            </div>
        </div>
    );
};

export default Login;