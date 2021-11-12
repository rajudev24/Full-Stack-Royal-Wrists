import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://shrouded-savannah-73194.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id =>{
        const url = `http://localhost:5000/products/${id}`
        fetch(url,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Successfully Deleted the product! ');
                const remainingOrders = products.filter(product => product._id !== id)
                setProducts(remainingOrders);
              }
        })
            
    }

    return (
        <div>
            <h2>Total {products.length} products </h2>
            <div className='products-section'>
                {
                    products.map(product => <div
                        class="card"
                        key={product._id}
                    >
                        <img src={product.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.productName}</h5>
                            <p class="card-text">{product.productDetails} </p>
                            <h4>Price: ${product.price}</h4>
                        </div>
                        <div class=" mb-3">
                            <button onClick={()=>handleDelete(product._id)} className='order-btn'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;