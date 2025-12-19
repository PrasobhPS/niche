import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Niche Tech Career</h3>
                    <p>Building careers through clarity, performance, and real outcomes.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/usa-pathways">USA Pathways</a></li>
                        <li><a href="/ojt-program">OJT Program</a></li>
                        <li><a href="/contact">Free Evaluation</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@nichetechcareer.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Niche Tech Career. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
