import './Button.scss';

const Button = ({ onClick }) => {
    return (
        <div className="button">
            <div className="button__container">
                <button onClick={onClick} className="button__button-element">
                    This is a button
                </button>
            </div>
        </div>
    );
};

export default Button;
