import React, { useContext, useState } from 'react';
import { cartContext } from '../../context/Context';
import axios from 'axios';
import CartList from '../../compoents/CartList/CartList';
import './NotHome.scss';

const NotHome = () => {
    const { cart } = useContext(cartContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    let subTotal = 0;
    let taxAmount = 0;
    let totalPrice = 0;
    const subTotalPrice = () => {
        cart.map((item) => {
            subTotal = Number(item.price * item.count) + subTotal;
        });
    };
    const cartDataPayload = cart.map((item) => {
        const orderItem = {
            itemId: item.id,
            quantity: item.count,
            totalPrice: Number(item.price) * item.count
        };

        return orderItem;
    });
    const submitHandler = () => {
        const payload = {
            phoneNumber: phoneNumber,
            taxAmount: Number(taxAmount),
            totalPrice: Number(totalPrice),
            orderItems: cartDataPayload
        };
        console.log(payload);
        var data = JSON.stringify(payload);
        var config = {
            method: 'post',
            url: 'http://localhost:3000/api/order',
            headers: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
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
                                    cssClass={'not-home'}
                                    id={item.id}
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
                        {(taxAmount = (subTotal * 0.13).toFixed(2))}
                    </div>
                </div>
                <div className="not-home__total">
                    <div className="not-home__total-title">Total</div>
                    <div className="not-home__total-price">
                        {(totalPrice = (subTotal * 0.13 + subTotal).toFixed(2))}
                    </div>
                </div>
                <div className="not-home__tip">
                    Leave your phone number and some one from Little Sichuan
                    will call to confirm your order.
                </div>
                <div className="not-home__input-box">
                    <input
                        type="text"
                        className="not-home__input"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="not-home__button"
                    onClick={() => submitHandler()}
                >
                    SUBMIT ORDER
                </button>
            </div>
        </div>
    );
};

export default NotHome;
