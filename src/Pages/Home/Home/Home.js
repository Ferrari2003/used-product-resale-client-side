import React from 'react';
import Banner from '../Banner/Banner';
import BannerPage from '../BannerPage/BannerPage';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BannerPage></BannerPage>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;