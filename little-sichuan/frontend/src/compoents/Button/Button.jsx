import './Button.scss';

const Button = ({ onClick }) => {
    return (
        <div className="button">
            <div className="button__container">
                <button onClick={onClick} className="button__button-element">
                    Cart - 0
                </button>
            </div>
        </div>
    );
};

export default Button;
