import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Pipes', 'Valves', 'Fittings', 'Tools', 'Fixtures'];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="products-page">
            <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Our Products</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="products-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
                        {/* Sidebar Filters */}
                        <aside className="filters" style={{ height: 'fit-content' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                                <Filter size={20} />
                                <h3 style={{ fontWeight: '600' }}>Categories</h3>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setSelectedCategory(cat)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '0.5rem 1rem',
                                                borderRadius: 'var(--radius-md)',
                                                backgroundColor: selectedCategory === cat ? 'var(--color-bg-offset)' : 'transparent',
                                                color: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                                fontWeight: selectedCategory === cat ? '600' : '400',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Product Grid */}
                        <div className="product-grid">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                            {filteredProducts.length === 0 && (
                                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>
                                    No products found in this category.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Filter handling would go here with a media query to stack or hide sidebar */}
            <style>{`
            @media (max-width: 768px) {
                .products-layout {
                    grid-template-columns: 1fr !important;
                }
                .filters {
                   margin-bottom: 2rem;
                }
                .filters ul {
                    flex-direction: row;
                    overflow-x: auto;
                    padding-bottom: 1rem;
                }
                .filters button {
                    white-space: nowrap;
                }
            }
        `}</style>
        </div>
    );
};

export default Products;
