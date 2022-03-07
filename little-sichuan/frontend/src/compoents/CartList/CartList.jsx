import React, { useContext } from 'react';
import { cartContext } from '../../context/Context';

import './CartList.scss';
const CartList = ({ title, count, price }) => {
    const { cart, setCart } = useContext(cartContext);

    const clickHandle = () => {
        var array = cart;
        cart.map((item) => {
            if (item.title == title) {
                var index = array.indexOf(item);
                array.splice(index, 1);
                setCart(array);
            }
        });
    };

    return (
        <div className="cartlist">
            <div className="cartlist__container">
                <div className="cartlist__ct-part">
                    <div className="cartlist__count">{count}</div>
                    <div className="cartlist__title">{title}</div>
                </div>
                <div className="cartlist__pt-part">
                    <div className="cartlist__price">${price * count}</div>
                    <button
                        className="cartlist__delete"
                        onClick={() => clickHandle()}
                    >
                        <svg
                            className="cartlist__delete-svg"
                            viewBox="0 0 14 18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.5 1H13C13.55 1 14 1.45 14 2C14 2.55 13.55 3 13 3H1C0.45 3 0 2.55 0 2C0 1.45 0.45 1 1 1H3.5L4.21 0.29C4.39 0.11 4.65 0 4.91 0H9.09C9.35 0 9.61 0.11 9.79 0.29L10.5 1ZM3 18C1.9 18 1 17.1 1 16V6C1 4.9 1.9 4 3 4H11C12.1 4 13 4.9 13 6V16C13 17.1 12.1 18 11 18H3Z"
                                fill="black"
                                fillOpacity={0.6}
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartList;
