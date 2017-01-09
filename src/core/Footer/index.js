import React from 'react';
import { Link } from 'react-router';

import './footer.css';

/**
 * 	Footer component to be displayed at the bottom of every page
 */
const Footer = () => {
	return (
		<footer className="footer">
			<div>
			
				<h3><i className="fa fa-external-link"></i> Links</h3>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/">About</Link></li>
				<li><Link to="/privacy_policy">Privacy Policy</Link></li>
				<li><Link to="/">Contact</Link></li>
				<hr className="light" />

				<h2 className="footer-logo"><i className="fa fa-street-view"></i> The Street View<span> Tourist</span></h2>
				<p className="copyright">&copy; 2017</p>

				<div className="footer-icons">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a target="__blank" href="https://www.github.com/ipuljak"><i className="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;