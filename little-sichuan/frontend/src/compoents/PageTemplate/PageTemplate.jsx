import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './PageTemplate.scss';

const PageTemplate = ({ children }) => {
    return (
        <div className="page">
            <div className="page__container">
                <div className="page__header">
                    <Header />
                </div>
                <div className="page__main-content">{children}</div>
                <div className="page__footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PageTemplate;
