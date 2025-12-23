import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/usa-pathways', label: 'USA Pathways' },
        { path: '/ojt-program', label: 'OJT Program' },
        { path: '/ojt-edtech', label: 'OJT EdTech' },
        { path: '/how-it-works', label: 'How It Works' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" style={{ color: '#000', textDecoration: 'none' }}>
                    <div className="logo-icon"><Sparkles size={20} color="#000" /></div>
                    Niche Tech Career
                </Link>

                {/* Desktop Menu */}
                <ul className="navbar-menu desktop-only">
                    <li><Link to="/" className="nav-link active">Home</Link></li>
                    <li><Link to="/ui-programs" className="nav-link">Programs</Link></li>
                    <li><Link to="/why-choose-us" className="nav-link">Why Choose Us</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li>
                        <Link to="/start" className="btn-gradient-pill">TO START</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.path} onClick={toggleMenu}>
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
