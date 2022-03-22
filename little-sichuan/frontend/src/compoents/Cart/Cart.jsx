import Drawer from '@material-ui/core/Drawer';
import { useContext } from 'react';
import { cartContext } from '../../context/Context';
import { Link } from 'react-router-dom';

import './Cart.scss';
import CartList from '../CartList/CartList.jsx';

const Cart = ({ cartOpen, setCartOpen }) => {
    const { cart } = useContext(cartContext);
    let total = 0;
    const clickHandle = () => {
        setCartOpen(false);
    };
    const totalPrice = () => {
        cart.map((item) => {
            total = Number(item.price * item.count) + total;
        });
    };

    return (
        <Drawer anchor="right" open={cartOpen}>
            <div className="cart">
                <div className="cart__container">
                    <div className="cart__header">
                        <div className="cart__title">Cart</div>
                        <button
                            className="cart__exit"
                            onClick={() => clickHandle()}
                        >
                            x
                        </button>
                    </div>
                    <div className="cart__list-container">
                        {cart &&
                            cart.length > 0 &&
                            cart.map((item, index) => {
                                return (
                                    <CartList
                                        key={`${item.title}__${index}`}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        count={item.count}
                                    />
                                );
                            })}
                    </div>
                    {totalPrice()}
                    <Link to="/not-home" className="cart__link">
                        <button
                            className="cart__checkout-but"
                            onClick={() => clickHandle()}
                        >
                            <div className="cart__checkout">
                                GO TO CHECKOUT{' '}
                            </div>
                            <div className="cart__checkout-total">${total}</div>
                        </button>
                    </Link>
                </div>
            </div>
        </Drawer>
    );
};
export default Cart;
