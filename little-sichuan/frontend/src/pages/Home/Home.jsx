import Button from '../../compoents/Button/Button';
import './Home.scss';
import { useState, useEffect } from 'react';
import HomeSectionTitle from '../../compoents/HomeSectionTitle/HomeSectionTitle';
import FeaturedProductCard from '../../compoents/FeaturedProductCard/FeaturedProductCard';
import axios from 'axios';
import CategorizedProductCard from '../../compoents/CategorizedProductCard/CategorizedProductCard';
const Home = () => {
    const clickHandler = () => {
        // eslint-disable-next-line no-undef
        //window.alert('Clicked button');
    };
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categorizedProducts, setCategorizedProducts] = useState([]);
    useEffect(() => {
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
        const fetchData = async () => {
            const productsData = await axios(config)
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            productsData.forEach(async (item) => {
                //console.log(item.isfeatured);
                if (item.isfeatured) {
                    tmpFeaturedProducts.push(item);
                } else if (!tmpCategorizedProducts[item.type]) {
                    tmpCategorizedProducts[item.type] = [item];
                } else {
                    tmpCategorizedProducts[item.type].push(item);
                }
                await setFeaturedProducts(tmpFeaturedProducts);
                await setCategorizedProducts(tmpCategorizedProducts);
            });
        };
        fetchData();
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
                            <div className="home__section-content home__section-content--featured">
                                {featuredProducts &&
                                    featuredProducts.length > 0 &&
                                    featuredProducts.map((item, index) => {
                                        return (
                                            <FeaturedProductCard
                                                key={`${item.name}__${index}`}
                                                title={item.name}
                                                image={item.image}
                                                price={item.price}
                                            />
                                        );
                                    })}
                            </div>
                            <div className="home__section-title">
                                <HomeSectionTitle
                                    firstTitle="Cold Dishes"
                                    secondTitle="冷盘"
                                />
                            </div>
                            <div className="home__section-content home__section-content--categorized">
                                {categorizedProducts['Cold Dishes'] &&
                                    categorizedProducts['Cold Dishes'].length >
                                        0 &&
                                    categorizedProducts['Cold Dishes'].map(
                                        (item, index) => {
                                            return (
                                                <CategorizedProductCard
                                                    key={`${item.name}__${index}`}
                                                    title={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                />
                                            );
                                        }
                                    )}
                            </div>
                            <div className="home__section-title">
                                <HomeSectionTitle
                                    firstTitle="Dumplings"
                                    secondTitle="饺子"
                                />
                            </div>
                            <div className="home__section-content home__section-content--categorized">
                                {categorizedProducts['Dumplings'] &&
                                    categorizedProducts['Dumplings'].length >
                                        0 &&
                                    categorizedProducts['Dumplings'].map(
                                        (item, index) => {
                                            return (
                                                <CategorizedProductCard
                                                    key={`${item.name}__${index}`}
                                                    title={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                />
                                            );
                                        }
                                    )}
                            </div>
                            <div className="home__section-title">
                                <HomeSectionTitle
                                    firstTitle="Feast Zone"
                                    secondTitle="主菜"
                                />
                            </div>
                            <div className="home__section-content home__section-content--categorized">
                                {categorizedProducts['Feast Zone'] &&
                                    categorizedProducts['Feast Zone'].length >
                                        0 &&
                                    categorizedProducts['Feast Zone'].map(
                                        (item, index) => {
                                            return (
                                                <CategorizedProductCard
                                                    key={`${item.name}__${index}`}
                                                    title={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                />
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
