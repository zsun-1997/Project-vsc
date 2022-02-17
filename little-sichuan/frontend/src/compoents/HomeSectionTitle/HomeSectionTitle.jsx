import './HomeSectionTitle.scss';

const HomeSectionTitle = ({ firstTitle, secondTitle }) => (
    <div className="home-section-title">
        <div className="home-section-title__container">
            <div className="home-section-title__icon">
                <svg
                    viewBox="0 0 40 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="5.5" cy="5.5" r="3.5" fill="#FF0000" />
                    <path
                        d="M0 18C0 18 3.2618 4.65517 9.78541 4.5C12.7186 4.43023 14.8883 7.15244 16.388 10.17C18.1761 5.31596 21.4335 0 27.1245 0C37.5966 0 40 18 40 18H19.0558H14.4206H0Z"
                        fill="black"
                    />
                </svg>
            </div>
            <div className="home-section-title__first-title">{firstTitle}</div>
            <div className="home-section-title__second-title">
                {secondTitle}
            </div>
        </div>
    </div>
);
export default HomeSectionTitle;
