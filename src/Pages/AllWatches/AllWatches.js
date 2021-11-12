import React, { useEffect, useState } from 'react';

import SingleWatch from '../SingleWatch/SingleWatch';
import './AllWatches.css'




import './AllWatches.css';

const AllWatches = () => {
    const [watches, setWatches] = useState([]);

    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        if (searchText !== "") {
            let filter_data = watches.filter(obj => obj.name.includes(searchText));
            setWatches(filter_data)
        } else {
            fetch('./watches.json')
                .then(res => res.json())
                .then(data => setWatches(data));
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
                    watches.map(watch => <SingleWatch
                        key={watch.key}
                        watch={watch}
                    >

                    </SingleWatch>)
                }
            </div>
        </div>
    );
};

export default AllWatches;
