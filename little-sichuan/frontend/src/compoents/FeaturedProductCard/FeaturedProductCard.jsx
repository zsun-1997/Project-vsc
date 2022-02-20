import './FeaturedProductCard.scss';
import { productImageMapping } from '../../utils/imageUtils';
import ProductPopup from '../ProductPopup/ProductPopup';
import React, { useState } from 'react';

const FeaturedProductCard = ({ title, price, image, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <button className="featured-product-card" onClick={clickHandler}>
            <div className="featured-product-card__pop">
                {isOpen && (
                    <ProductPopup
                        closePop={setIsOpen}
                        title={title}
                        price={price}
                        image={image}
                        description={description}
                    />
                )}
            </div>
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
