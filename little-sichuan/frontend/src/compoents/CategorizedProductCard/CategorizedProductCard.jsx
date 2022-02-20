import './CategorizedProductCard.scss';
import { productImageMapping } from '../../utils/imageUtils';
const CategorizedProductCard = ({ image, title, price }) => {
    return (
        <button className="categorized-product-card">
            <div className="categorized-product-card__container">
                <div className="categorized-product-card__image">
                    <img src={productImageMapping[image]} />
                </div>
                <div className="categorized-product-card__info">
                    <div className="categorized-product-card__title">
                        {title}
                    </div>
                    <div className="categorized-product-card__price">
                        {price}
                    </div>
                </div>
            </div>
        </button>
    );
};

export default CategorizedProductCard;
