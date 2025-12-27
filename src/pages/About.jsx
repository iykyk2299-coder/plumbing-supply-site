import Hero from '../components/Hero'; // We can reuse or make a smaller page header
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>About Us</h1>
                    <p style={{ fontSize: '1.2rem', color: '#CBD5E1' }}>Serving Canada's Plumbing Professionals Since 1995</p>
                </div>
            </div>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Story</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                        North Strong Plumbing Supply was founded with a simple mission: to provide Canadian contractors with reliable, high-quality plumbing supplies at fair prices.
                        We understand the unique challenges of the Canadian climate and construction industry, which is why we stock only the most durable and trusted brands.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem', color: 'var(--color-text-secondary)' }}>
                        From a small warehouse in Toronto, we've grown to serve professionals across the country. Our team consists of former plumbers and industry experts who can help you find exactly what you need for any job, big or small.
                    </p>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Choose Us?</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Canadian Owned & Operated', 'Huge Inventory of In-Stock Items', 'Expert Technical Support', 'Competitive Trade Pricing'].map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                <CheckCircle className="text-accent" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;
