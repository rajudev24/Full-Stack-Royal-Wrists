import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './BannerBottom.css'

const BannerBottom = () => {
    const history = useHistory()
    const handlleShopNow = ()=>{
        history.push('/products')
    }
    return (
        <div className='bottom-banner'>
            <div className='baner-details'>
            <h1>THE CLASSIC MEN ISSUE</h1>
            <p>Our sustainable commitment is reflected in everything we do.</p>
            <p>Our way of reinventing materials and a new approach to.</p>
            <Button className='shop-btn' onClick={handlleShopNow} variant='contained'>SHOP NOW</Button>
            </div>

        </div>
    );
};

export default BannerBottom;