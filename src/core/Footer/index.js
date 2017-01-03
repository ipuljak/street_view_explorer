import React from 'react';
import {Link} from 'react-router';

import './footer.css';

const Footer = () => {
    return (
        <section className="footer">
			<div className="container">
				<div className="row">			
					<div className="col-md-6 col-xs-12">
						<div className="footer-links">
							<h2><i className="fa fa-external-link"></i> Links</h2>
							<hr className="light" />
							<li><Link to="/">Home</Link></li>
							<li><Link to="/">About</Link></li>
							<li><Link to="/privacy_policy">Privacy Policy</Link></li>
							<li><Link to="/">Contact</Link></li>
						</div>
						<div>
							<i className="fa fa-envelope"></i>
							<p className="email"><a href="mailto:ivan@streetviewtourist.com">ivan@streetviewtourist.com</a></p>
						</div>
					</div>
					<div className="col-md-6 col-xs-12">
						<h2 className="footer-logo"><i className="fa fa-street-view"></i> The Street View<span> Tourist</span></h2>
						<hr className="light" />
						<p className="footer-blurb">The Street View Tourist utilizes the power of Google Street View 
						to bring to life the many landmarks and locations this world has to offer. 
						Save the trip fees and explore the world in the comfort of your own chair!</p>
						
						<div className="footer-icons">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a target="__blank" href="https://www.github.com/ipuljak"><i className="fa fa-github"></i></a>
						</div>

						<p className="copyright">The Street View Tourist &copy; 2017</p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Footer;