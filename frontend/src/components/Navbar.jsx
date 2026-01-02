import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/ojt' },
        { name: 'Why Choose Us', path: '/how-it-works' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-white shadow-sm">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Niche Tech Career" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-brand-dark hover:text-purple-600 text-sm font-medium transition-colors border-b border-transparent pb-1 ${location.pathname === link.path ? 'border-purple-500' : 'hover:border-purple-500'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <Link
                    to="/contact"
                    className="hidden md:inline-block px-8 py-2.5 rounded-full bg-btn-gradient text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:brightness-110 transition-all"
                >
                    To Start
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-brand-dark text-lg py-2 border-b border-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="text-center px-8 py-3 rounded bg-btn-gradient text-white font-bold uppercase"
                            onClick={() => setIsOpen(false)}
                        >
                            To Start
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
