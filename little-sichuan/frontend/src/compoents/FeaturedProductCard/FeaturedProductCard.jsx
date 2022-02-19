import './FeaturedProductCard.scss';

const FeaturedProductCard = ({ title, price, image }) => {
    return (
        <button className="featured-product-card">
            <div className="featured-product-card__container">
                <div className="featured-product-card__info">
                    <div className="featured-product-card__title">{title}</div>
                    <div className="featured-product-card__price">{price}</div>
                </div>
                <div className="featured-product-card__image">{image}</div>
            </div>
        </button>
    );
};

export default FeaturedProductCard;
