import { useContext, useState } from 'react';

import './ProductPopup.scss';
import { productImageMapping } from '../../utils/imageUtils';
import { cartContext } from '../../context/Context';

const ProductPopup = ({ title, price, description, image, toggleModal }) => {
    const [count, setCount] = useState(1);
    const { cart, setCart } = useContext(cartContext);
    var cartData = { title, price, count };
    const clickHandle = () => {
        var checkedCartData = cartData;
        cart.map((item) => {
            if (item.title == title) {
                item.count = item.count + 1;
            }
        });
        setCart((cart) => [...cart, cartData]);
    };

    return (
        <div className="product-popup">
            <div className="product-popup__container">
                <div className="product-popup__info">
                    <div className="product-popup__title">{title}</div>
                    <div className="product-popup__close-icon">
                        <button
                            className="product-popup__close-icon-btn"
                            onClick={() => toggleModal()}
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
                    <div className="product-popup__count-container">
                        <button
                            className="product-popup__count-less"
                            onClick={() => {
                                if (count > 1) setCount(count - 1);
                            }}
                        >
                            -
                        </button>
                        <div className="product-popup__count-item-number">
                            {count}
                        </div>
                        <button
                            className="product-popup__count-add"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </button>
                    </div>
                    <div className="product-popup__add-to-cart">
                        <button
                            className="product-popup__add-item-container"
                            onClick={() => clickHandle()}
                        >
                            <div className="product-popup__add-item">
                                ADD TO CART
                            </div>

                            <div className="product-popup__add-item-price">
                                ${price * count}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
