// import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeFirebase from "./../Pages/Login/Firebase/firebase.init";
import swal from 'sweetalert';

import axios from 'axios';





// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [role, setRole] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    // const user = auth.currentUser;

    const createUser = (email, name) => {

        axios.post('http://localhost:5000/users', {
            email: email,
            name: name
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                const newUser = { email, displayName: name };
                createUser(email, name);
                setUser(newUser);
                //send name to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/');
            })
            .then(() => {
                swal("Good job!", "Account has been created!", "success")
                logout();
            })

            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                swal("Sign in Successful!", "Welcome back !", "info");
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }










    //-----------------------------------------------------------------------------

    // const [booking, setBooking] = useState([])
    // const [loading, setLoadiong] = useState(false)


    // useEffect(() => {
    //     fetch('http://localhost:3000/users?email=' + user?.email)
    //         .then(res => res.json())
    //         .then(data => setBooking(data));
    // }, [loading])

    // const createUser = (obj) => {

    //     axios.post('http://localhost:5000/users', {
    //         email: email,
    //         name: displayName
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }


    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });







    //

    const findUserRole = (email) => {
        axios.get('http://localhost:5000/users?email=' + email)
            .then((res) => {

                // handle success
                // console.log("user email is" + res.data[0].role);
                // user.role = res.data[0].role;
                // setUser(user);
                setRole(res.data[0].role);
                // console.log("user testing" + user.role);
                // return res.data[0].role;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }




    // ---------------------------------------------------------------



    // observer 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                findUserRole(user.email);
                // user.role = userRole;
                // console.log("user testing final " + user.role);
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setRole("");
            swal("Logout Successful!", "You are logged out!", "success");
            // Sign-out
        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }

    return {
        role,
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;