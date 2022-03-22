import axios from 'axios';
import { useState, useEffect } from 'react';

import './Home.scss';
import HomeSectionTitle from '../../compoents/HomeSectionTitle/HomeSectionTitle';
import FeaturedProductCard from '../../compoents/FeaturedProductCard/FeaturedProductCard';
import CategorizedProductCard from '../../compoents/CategorizedProductCard/CategorizedProductCard';
import PRODUCT_TYPE from '../../utils/enum.utils.ts';
const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categorizedProducts, setCategorizedProducts] = useState([]);
    useEffect(() => {
        const tmpFeaturedProducts = [];
        const tmpCategorizedProducts = {};
        var config = {
            method: 'get',
            url: 'http://ec2-35-182-70-15.ca-central-1.compute.amazonaws.com/api/product',
            headers: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
                'Content-Type': 'application/json'
            }
        };
        const fetchData = async () => {
            const productsData = await axios(config)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            productsData.forEach(async (item) => {
                if (item.isfeatured) {
                    tmpFeaturedProducts.push(item);
                } else if (!tmpCategorizedProducts[item.type]) {
                    tmpCategorizedProducts[item.type] = [item];
                } else {
                    tmpCategorizedProducts[item.type].push(item);
                }
            });
            setFeaturedProducts(tmpFeaturedProducts);
            setCategorizedProducts(tmpCategorizedProducts);
            // Object.entries(tmpCategorizedProducts).forEach((item) =>
            //     console.log(item)
            // );
        };
        fetchData();
    }, []);
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__hero">
                    <div className="home__hero-container">
                        <div className="home__hero-title-box">
                            <div className="home__hero-title">
                                Authentic Home Style Sichuanese Food
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
                                <div className="home__section-content-container">
                                    {featuredProducts &&
                                        featuredProducts.length > 0 &&
                                        featuredProducts.map((item, index) => {
                                            return (
                                                <FeaturedProductCard
                                                    key={`${item.name}__${index}`}
                                                    id={item.id}
                                                    title={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                    description={
                                                        item.description
                                                    }
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                            {Object.entries(categorizedProducts) &&
                                Object.entries(categorizedProducts).length >
                                    0 &&
                                Object.entries(categorizedProducts).map(
                                    (entry, index) =>
                                        entry[1] &&
                                        entry[1].length > 0 && (
                                            <div key={`${entry[0]} --${index}`}>
                                                <div className="home__section-title">
                                                    <HomeSectionTitle
                                                        firstTitle={entry[0]}
                                                        secondTitle={
                                                            PRODUCT_TYPE[
                                                                entry[0]
                                                            ]
                                                        }
                                                    />
                                                </div>
                                                <div className="home__section-content home__section-content--categorized">
                                                    <div className="home__section-content-container">
                                                        {entry[1].map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => {
                                                                return (
                                                                    <CategorizedProductCard
                                                                        key={`${item.name}__${itemIndex}`}
                                                                        id={
                                                                            item.id
                                                                        }
                                                                        title={
                                                                            item.name
                                                                        }
                                                                        image={
                                                                            item.image
                                                                        }
                                                                        price={
                                                                            item.price
                                                                        }
                                                                        description={
                                                                            item.description
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
