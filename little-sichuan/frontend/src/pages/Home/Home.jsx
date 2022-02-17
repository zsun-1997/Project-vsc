import Button from '../../compoents/Button/Button';
import './Home.scss';
import { useState } from 'react';
import HomeSectionTitle from '../../compoents/HomeSectionTitle/HomeSectionTitle';
const Home = () => {
    const clickHandler = () => {
        // eslint-disable-next-line no-undef
        //window.alert('Clicked button');
    };
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__hero">
                    <div className="home__hero-container">
                        <div className="home__hero-title-box">
                            <div className="home__hero-title">
                                Authentic home style sichuanese food
                            </div>
                            <div className="home__hero-subtitle">
                                open everyday from 11am to 10pm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__content">
                    <div className="home__content-container">
                        <div className="home__feature-sction">
                            <div className="home__section-title">
                                <HomeSectionTitle
                                    firstTitle="Best sellers"
                                    secondTitle="热卖推荐"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
