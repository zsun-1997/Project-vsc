import React from 'react';

import './FeaturedProductCard.scss';
import { productImageMapping } from '../../utils/imageUtils';
import ProductPopup from '../ProductPopup/ProductPopup';
import { ModalConsumer } from '../../context/Modal.context';

const FeaturedProductCard = ({ title, price, image, description }) => {
    const renderModalComponent = (
        toggleModal,
        title,
        price,
        image,
        description
    ) => {
        return (
            <ProductPopup
                toggleModal={toggleModal}
                title={title}
                price={price}
                image={image}
                description={description}
            />
        );
    };

    return (
        <ModalConsumer>
            {({ toggleModal }) => (
                <button
                    className="featured-product-card"
                    onClick={() =>
                        toggleModal(
                            renderModalComponent(
                                toggleModal,
                                title,
                                price,
                                image,
                                description
                            )
                        )
                    }
                >
                    {/* <div className="featured-product-card__pop"></div> */}
                    <div className="featured-product-card__container">
                        <div className="featured-product-card__info">
                            <div className="featured-product-card__title">
                                {title}
                            </div>
                            <div className="featured-product-card__price">
                                ${price}
                            </div>
                        </div>
                        <div className="featured-product-card__image">
                            <img src={productImageMapping[image]} />
                        </div>
                    </div>
                </button>
            )}
        </ModalConsumer>
    );
};
export default FeaturedProductCard;
