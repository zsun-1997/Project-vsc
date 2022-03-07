import React from 'react';

import './CategorizedProductCard.scss';
import { productImageMapping } from '../../utils/imageUtils';
import ProductPopup from '../ProductPopup/ProductPopup';
import { ModalConsumer } from '../../context/Modal.context';

const CategorizedProductCard = ({ image, title, price, description }) => {
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
                    className="categorized-product-card"
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
                    <div className="categorized-product-card__container">
                        <div className="categorized-product-card__image">
                            <img src={productImageMapping[image]} />
                        </div>
                        <div className="categorized-product-card__info">
                            <div className="categorized-product-card__title">
                                {title}
                            </div>
                            <div className="categorized-product-card__price">
                                ${price}
                            </div>
                        </div>
                    </div>
                </button>
            )}
        </ModalConsumer>
    );
};

export default CategorizedProductCard;
