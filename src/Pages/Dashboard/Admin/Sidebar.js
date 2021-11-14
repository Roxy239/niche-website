import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import useAuth from '../../hooks/useAuth';

import * as BsIcon from 'react-icons/bs';
import * as MdIcon from 'react-icons/md';

function Sidebar({ url, path }) {
    // let { path, url } = useRouteMatch();
    const { user, logout } = useAuth();

    return (
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                <BsIcon.BsWatch /> Hublot</div>
            <div className="list-group list-group-flush my-3">
                {/* <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
                    <i className="fas fa-tachometer-alt me-2"></i>Dashboard</a> */}

                <Link to={`${url}/myorder`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><BsIcon.BsClipboardCheck /> My Orders</Link>
                <Link to={`${url}/review`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><MdIcon.MdRateReview />Review</Link>
                {/* <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <MdIcon.MdRateReview /> Review</a> */}
                <Link to={`${url}/payment`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><MdIcon.MdPayment /> Payment</Link>

                <a href="#" onClick={logout} className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <i className="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
    );
}

export default Sidebar;
