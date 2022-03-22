import { useContext, useState } from 'react';
import './Header.scss';
import Cart from '../Cart/Cart';
import { cartContext } from '../../context/Context';
import { Link } from 'react-router-dom';
const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const clickHandle = () => {
        setCartOpen(!cartOpen);
    };
    const { cart } = useContext(cartContext);
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__icon-logo">
                    <div className="header__icon">
                        <Link to="/" className="header__link">
                            <svg
                                className="header__icon-svg"
                                viewBox="0 0 40 18"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="5.5"
                                    cy="5.5"
                                    r="3.5"
                                    fill="#FF0000"
                                />
                                <path d="M0 18C0 18 3.2618 4.65517 9.78541 4.5C12.7186 4.43023 14.8883 7.15244 16.388 10.17C18.1761 5.31596 21.4335 0 27.1245 0C37.5966 0 40 18 40 18H19.0558H14.4206H0Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="header__logo">Little Sichuan</div>
                </div>
                <div className="header__action">
                    <div className="header__search-bar">
                        <form id="site-search">
                            <input
                                className="header__search-bar-text"
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            ></input>
                        </form>
                        <div className="header__search-bar-icon">
                            <svg
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.5909 12.0596H14.2472L17.7695 15.6096C18.1101 15.9513 18.1101 16.5096 17.7695 16.8513C17.4289 17.193 16.8723 17.193 16.5317 16.8513L13.0011 13.3096V12.6513L12.7768 12.418C11.6138 13.418 10.0271 13.9346 8.34071 13.6513C6.03129 13.2596 4.18707 11.3263 3.90462 8.99298C3.47264 5.46798 6.43004 2.50131 9.94402 2.93464C12.2701 3.21798 14.1974 5.06798 14.5878 7.38464C14.8702 9.07631 14.3552 10.668 13.3583 11.8346L13.5909 12.0596ZM5.52454 8.30964C5.52454 10.3846 7.19431 12.0596 9.26282 12.0596C11.3313 12.0596 13.0011 10.3846 13.0011 8.30964C13.0011 6.23464 11.3313 4.55964 9.26282 4.55964C7.19431 4.55964 5.52454 6.23464 5.52454 8.30964Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="header__cart">
                        <button
                            className="header__cart-button"
                            onClick={() => clickHandle()}
                        >
                            Cart-{cart.length}
                        </button>
                        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
