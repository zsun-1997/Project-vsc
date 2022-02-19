import Button from '../../compoents/Button/Button';
import './Home.scss';
import { useState, useEffect } from 'react';
import HomeSectionTitle from '../../compoents/HomeSectionTitle/HomeSectionTitle';
import FeaturedProductCard from '../../compoents/FeaturedProductCard/FeaturedProductCard';
import axios from 'axios';
const Home = () => {
    const clickHandler = () => {
        // eslint-disable-next-line no-undef
        //window.alert('Clicked button');
    };
    const [featuredProducts, setFeaturedProducts] = useState(null);
    const [categorizedProducts, setCategorizedProducts] = useState(null);
    useEffect(async () => {
        const tmpFeaturedProducts = [];
        const tmpCategorizedProducts = [];
        var config = {
            method: 'get',
            url: 'http://localhost:3000/api/product',
            headers: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
                'Content-Type': 'application/json'
            }
        };
        const productsData = await axios(config)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        productsData.forEach((item) => {
            //console.log(item.isfeatured);
            if (item.isfeatured) {
                tmpFeaturedProducts.push(item);
            } else if (!tmpCategorizedProducts[item.type]) {
                tmpCategorizedProducts[item.type] = [item];
            } else {
                tmpCategorizedProducts[item.type].push(item);
            }
            console.log(tmpFeaturedProducts);
            console.log(tmpCategorizedProducts);
        });

        setFeaturedProducts(tmpFeaturedProducts);
        setCategorizedProducts(tmpCategorizedProducts);
        console.log(featuredProducts);
        console.log(categorizedProducts);
    }, []);
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
                            <div className="home__featured-product-card">
                                {featuredProducts &&
                                    featuredProducts.length > 0 &&
                                    featuredProducts.map((item, index) => {
                                        <FeaturedProductCard
                                            key={`${item.name}__${index}`}
                                            title={item.name}
                                            image={item.image}
                                            price={item.price}
                                        />;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
