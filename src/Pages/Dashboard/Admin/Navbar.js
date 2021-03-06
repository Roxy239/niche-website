import './Dashboard.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                <h2 className="fs-2 m-0">Dashboard</h2>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link  second-text fw-bold" href="#" role="button">
                            <i className="fas fa-user me-2"></i>John Doe
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default Navbar;