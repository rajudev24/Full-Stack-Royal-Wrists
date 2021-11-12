import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://shrouded-savannah-73194.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>THis is profucts {products.slice(0, 6).length} </h1>
            <div className='products-section'>
                {
                    products.slice(0, 6).map(product => <HomeProduct
                    key = {product._id}
                    product = {product}
                    ></HomeProduct>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;