import './Dashboard.css';
import Navbar from './Navbar';
import Review from './Review';
import Tabled from './Tabled';
import Payment from './Payment';
import { Router } from 'react-router';

function Pagecontent() {
    return (
        <div id="page-content-wrapper">
            <Navbar />
            <div className="container-fluid px-4">
                <div className="row my-2">
                    <div className="col">
                        <Tabled />
                        <div className="row mt-5">
                            <Review />
                            <Payment />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pagecontent;