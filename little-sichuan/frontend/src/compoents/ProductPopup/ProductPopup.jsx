import './ProductPopup.scss';
import { productImageMapping } from '../../utils/imageUtils';
const ProductPopup = ({ title, price, description, image, prop, onClose }) => {
    console.log(description);
    return (
        <div className="product-popup">
            <div className="product-popup__container">
                <div className="product-popup__info">
                    <div className="product-popup__title">{title}</div>
                    <div className="product-popup__close-icon">
                        <button
                            className="product-popup__close-icon-btn"
                            onClick={() => prop(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className="product-popup__description">{description}</div>
                <div className="product-popup__image">
                    <img src={productImageMapping[image]} />
                </div>
                <div className="product-popup__settlement">
                    <div className="product-popup__count">count</div>
                    <div className="product-popup__add">
                        <button className="product-popup__add-item">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
