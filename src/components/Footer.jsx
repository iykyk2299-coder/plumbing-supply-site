import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container footer-grid">
                <div className="footer-col">
                    <div className="footer-logo">
                        <span className="text-white">North</span>
                        <span className="text-accent">Strong</span>
                    </div>
                    <p className="footer-desc">
                        Your trusted partner for commercial and residential plumbing supplies across Canada. Quality parts for professional results.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="text-accent" />
                            <span>123 Industrial Blvd, Toronto, ON</span>
                        </li>
                        <li>
                            <Phone size={18} className="text-accent" />
                            <span>1-800-555-0199</span>
                        </li>
                        <li>
                            <Mail size={18} className="text-accent" />
                            <span>sales@northstring.ca</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Hours</h3>
                    <ul className="footer-hours">
                        <li><Clock size={16} className="text-secondary" /> Mon-Fri: 7:00 AM - 5:00 PM</li>
                        <li><Clock size={16} className="text-secondary" /> Sat: 8:00 AM - 12:00 PM</li>
                        <li><Clock size={16} className="text-secondary" /> Sun: Closed</li>
                    </ul>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} North Strong Plumbing Supply. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
