import React, { useEffect, useState } from 'react';
import axios from "axios"

import Watch from '../Watch/Watch';
import './Watches.css';

const Watches = () => {
    const [watches, setWatches] = useState([]);

    const [searchText, setSearchText] = useState("");

    // console.log(watches)


    /*

    import axios from "axios"

        const fetchData = () => {
        return axios.get("https://randomuser.me/api/")
            .then((response) => console.log(response.data));}


    */





    useEffect(() => {
        if (searchText !== "") {
            let filter_data = watches.filter(obj => obj.name.toLowerCase().includes(searchText.toLowerCase()));
            setWatches(filter_data)
        } else {
            axios.get('https://nameless-sands-58431.herokuapp.com/watches').then((res) => {
                setWatches(res.data)
            }).catch((error) => {

            });

            // fetch('https://nameless-sands-58431.herokuapp.com/watches')
            //     .then(res => {
            //         console.log(res)
            //         res.json();
            //     })
            //     .then(data =>  setWatches(data) )
            //     .catch((error) => {

            //     });
        }
    }, [searchText])



    const handleChange = (e) => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
    };


    return (
        <div id="watches">

            <div className="course-container p-3 m-5">

                <div className="srarch-box ">
                    <input onChange={handleChange} type="text" className="p-2" placeholder="find your watch" />
                    <button className="btn btn-danger m-3">Search</button>
                </div>
            </div>
            <h2 className="text-primary mt-5">Our Watches</h2>
            <div className="watch-container">
                {
                    watches?.slice(0, 6).map(watch => <Watch
                        key={watch._id}
                        watch={watch}
                    ></Watch>)
                }
            </div>
        </div>
    );
};

export default Watches;
