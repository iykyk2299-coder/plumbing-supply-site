import { ArrowRight } from 'lucide-react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Reliable Supply for <br />
                    <span className="text-accent">Canadian Pros</span>
                </h1>
                <p className="hero-subtitle">
                    Top-grade pipes, valves, and fittings. In stock and ready for your next job.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" size="lg" icon={ArrowRight}>Shop Products</Button>
                    <Button variant="outline" size="lg" style={{ color: 'white', borderColor: 'white' }}>Contact Sales</Button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">15k+</span>
                        <span className="stat-label">Products</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">24/7</span>
                        <span className="stat-label">Support</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">30yr</span>
                        <span className="stat-label">Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
