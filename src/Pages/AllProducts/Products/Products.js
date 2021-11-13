import React, { useEffect, useState } from 'react';
import Product from '../Product.js/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://shrouded-savannah-73194.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='mt-5 pt-5'>Our Watches</h1>
            <div className='products-section'>
                {
                    products.map(product => <Product
                    key = {product._id}
                    product = {product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;