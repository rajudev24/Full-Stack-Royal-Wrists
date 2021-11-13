import * as React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
 
const Product = (props) => {
    const {_id, productName, img, price, productDetails } = props.product;
    return (
        <div class="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div class ="card-body">
            <h5 class ="card-title">{productName}</h5>
            <p class ="card-text">{productDetails} </p>
            <h4>Price: ${price}</h4>
            </div>
            <div class =" mb-3">
            <Link to={`/orders/${_id}`}>
            <button className='order-btn'>Order Now</button>
            </Link>
            </div>
        </div>

    );
};

export default Product;