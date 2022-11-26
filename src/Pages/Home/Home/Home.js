import React from 'react';
import Banner from '../Banner/Banner';
import BannerPage from '../BannerPage/BannerPage';
import Carousel from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';
import HomeCard from '../HomeCard/HomeCard';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <BannerPage></BannerPage>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;