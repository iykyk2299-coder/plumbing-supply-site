import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ title, category, price, image }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image || "https://via.placeholder.com/300?text=Product"} alt={title} className="product-image" />
                <div className="product-badge">{category}</div>
            </div>
            <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                <Button variant="outline" size="sm" className="w-full">Get Quote</Button>
            </div>
        </div>
    );
};

export default ProductCard;
