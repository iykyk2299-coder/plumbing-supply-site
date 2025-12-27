import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="text-primary">North</span>
                    <span className="text-accent">Strong</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-desktop">
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-actions">
                        <a href="tel:+15551234567" className="navbar-phone">
                            <Phone size={18} className="text-accent" />
                            <span className="text-secondary font-medium">1-800-555-0199</span>
                        </a>
                        <Button variant="primary" size="sm">Get Quote</Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile-links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-actions">
                        <Button variant="primary" className="w-full">Get Quote</Button>
                        <a href="tel:+15551234567" className="mobile-phone btn btn-outline w-full">
                            <Phone size={18} /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
