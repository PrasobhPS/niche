import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 pb-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <img
                    src="/footer-design.png"
                    alt="Footer Design"
                    className="w-full h-auto object-contain"
                />
            </div>
        </footer>
    );
};

export default Footer;
