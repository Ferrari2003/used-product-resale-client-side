import React from 'react';
import Banner from '../Banner/Banner';
import BannerPage from '../BannerPage/BannerPage';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BannerPage></BannerPage>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;