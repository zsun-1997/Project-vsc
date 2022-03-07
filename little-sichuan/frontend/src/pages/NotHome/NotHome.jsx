import React, { useContext } from 'react';
import { cartContext } from '../../context/Context';

import CartList from '../../compoents/CartList/CartList';
import './NotHome.scss';

const NotHome = () => {
    const { cart } = useContext(cartContext);
    let subTotal = 0;
    const subTotalPrice = () => {
        cart.map((item) => {
            subTotal = Number(item.price * item.count) + subTotal;
        });
    };

    return (
        <div className="not-home">
            <div className="not-home__container">
                <div className="not-home__order-title">Your order</div>
                <div className="not-home__order-list">
                    {cart &&
                        cart.length > 0 &&
                        cart.map((item, index) => {
                            return (
                                <CartList
                                    key={`${item.title}__${index}`}
                                    title={item.title}
                                    price={item.price}
                                    count={item.count}
                                />
                            );
                        })}
                </div>
                {subTotalPrice()}
                <div className="not-home__subtotal">
                    <div className="not-home__subtotal-title">Subtotal</div>
                    <div className="not-home__subtotal-price">{subTotal}</div>
                </div>
                <div className="not-home__taxes">
                    <div className="not-home__taxes-title">Taxes</div>
                    <div className="not-home__taxes-price">
                        {Math.round(subTotal * 0.13)}
                    </div>
                </div>
                <div className="not-home__total">
                    <div className="not-home__total-title">Total</div>
                    <div className="not-home__total-price">
                        {Math.round(subTotal * 0.13 + subTotal)}
                    </div>
                </div>
                <div className="not-home__tip">
                    Leave your phone number and some one from Little Sichuan
                    will call to confirm your order.
                </div>
                <div className="not-home__input-box">
                    <input type="text" className="not-home__input" />
                </div>
                <button className="not-home__button">SUBMIT ORDER</button>
            </div>
        </div>
    );
};

export default NotHome;
