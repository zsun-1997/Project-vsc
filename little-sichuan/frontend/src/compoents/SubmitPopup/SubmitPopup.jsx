import React from 'react';
import './SubmitPopup.scss';

const SubmitPopup = (trigger, setButtonPopup) => {
    return trigger ? (
        <div className="submit-popup">
            <div className="submit-popup__container">
                <div className="submit-popup__inner">Submit Successful!</div>
                <button
                    className="submit-popup__close-btn"
                    onClick={() => setButtonPopup(false)}
                >
                    X
                </button>
            </div>
        </div>
    ) : (
        ''
    );
};

export default SubmitPopup;
