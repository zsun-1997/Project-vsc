import './FeaturedProductCard.scss';
import { productImageMapping } from '../../utils/imageUtils';

const FeaturedProductCard = ({ title, price, image }) => {
    return (
        <button className="featured-product-card">
            <div className="featured-product-card__container">
                <div className="featured-product-card__info">
                    <div className="featured-product-card__title">{title}</div>
                    <div className="featured-product-card__price">${price}</div>
                </div>
                <div className="featured-product-card__image">
                    <img src={productImageMapping[image]} />
                </div>
            </div>
        </button>
    );
};

export default FeaturedProductCard;
