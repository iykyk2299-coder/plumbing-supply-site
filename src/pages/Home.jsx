import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { ShieldCheck, Truck, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home-page">
            <Hero />

            {/* Trust Section */}
            <section className="section bg-light" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div className="trust-item">
                            <ShieldCheck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Quality Guaranteed</h3>
                            <p className="text-secondary">All products meet or exceed Canadian industry standards.</p>
                        </div>
                        <div className="trust-item">
                            <Truck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Fast Delivery</h3>
                            <p className="text-secondary">Same-day shipping for orders placed before 2 PM EST.</p>
                        </div>
                        <div className="trust-item">
                            <ThumbsUp size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Expert Service</h3>
                            <p className="text-secondary">Our team of licensed plumbers is here to help you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Featured Products</h2>
                        <Link to="/products">
                            <Button variant="outline">View All</Button>
                        </Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to stock up?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#CBD5E1', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                        Join hundreds of Canadian contractors who trust North Strong for their plumbing needs.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Contact Us Today</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
