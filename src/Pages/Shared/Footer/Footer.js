import './Footer.css';

function Footer() {
    return (
        <div className="mt-5">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Hublot</h4>
                            <p>
                                We are one of the companies provide you services with minimal costs.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>about us</li>
                                <li>our services</li>
                                <li>privacy policy</li>
                                <li>affiliate program</li>
                                {/* 					
					<li><a href="#">affiliate program</a></li> */}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Address</h4>
                            <p className="addr">
                                78, Satmasjid Road
                                (Road#27),Dhanmondi,
                                Dhaka, 1205, Bangladesh.
                                Phone: 10620, (+88) 09666787878
                            </p>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                                {/* <a href="#"><i className="fab fa-linkedin-in"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
