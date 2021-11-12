import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
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
        </div>
    );
};

export default Home;