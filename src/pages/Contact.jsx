import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.2rem', color: '#CBD5E1' }}>We're here to help with your next project.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'var(--color-bg-offset)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Phone className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Phone</h3>
                                        <p className="text-secondary">1-800-555-0199</p>
                                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Mon-Fri 7am-5pm</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'var(--color-bg-offset)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Mail className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Email</h3>
                                        <p className="text-secondary">sales@northstrong.ca</p>
                                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>We reply within 24 hours</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'var(--color-bg-offset)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <MapPin className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Location</h3>
                                        <p className="text-secondary">123 Industrial Blvd, Unit 5</p>
                                        <p className="text-secondary">Toronto, ON M4B 1B3</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ background: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send us a Message</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                    <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                    <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                    <textarea rows="4" placeholder="How can we help?" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}></textarea>
                                </div>
                                <Button variant="primary" className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
