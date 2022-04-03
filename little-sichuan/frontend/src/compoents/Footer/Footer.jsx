import '../Footer/Footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__title-container">
                    <div className="footer__icon">
                        <svg
                            className="footer__icon-svg"
                            viewBox="0 0 40 18"
                            fill="white"
                            // fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="5.5" cy="5.5" r="3.5" fill="#FF0000" />
                            <path
                                d="M0 18C0 18 3.2618 4.65517 9.78541 4.5C12.7186 4.43023 14.8883 7.15244 16.388 10.17C18.1761 5.31596 21.4335 0 27.1245 0C37.5966 0 40 18 40 18H19.0558H14.4206H0Z"
                                // fill="white"
                            />
                        </svg>
                    </div>
                    <div className="footer__title">Little Sichuan</div>
                </div>
                <div className="footer__address">100 Street name, Toronto</div>
                <div className="footer__phone">Phone number: 647-000-000</div>
                <div className="footer__email">
                    Email: littlesichuan@gmail.com
                </div>
            </div>
        </div>
    );
};

export default Footer;
