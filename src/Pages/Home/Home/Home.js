import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BannerBottom from '../BannerBottom/BannerBottom';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <HomeReview></HomeReview>
            <BannerBottom></BannerBottom>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;