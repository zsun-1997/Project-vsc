import Button from '../../compoents/Button/Button';
import './Home.scss';

const Home = () => {
    const clickHandler = () => {
        // eslint-disable-next-line no-undef
        window.alert('Clicked button');
    };
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__header">Home Page</div>
                <div className="home__button">
                    <Button onClick={clickHandler} />
                </div>
            </div>
        </div>
    );
};

export default Home;
