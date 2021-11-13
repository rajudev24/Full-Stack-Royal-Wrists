import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Order.css'
import { TextField, Button, CircularProgress,} from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { padding } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';


const Orders = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([])
    const {loading, user } = useAuth();
    const [getOrder, setGetOrder] = useState({})
    const history = useHistory();

    useEffect(() => {
        const url = `https://shrouded-savannah-73194.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    
    
    const HandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...getOrder };
        newOrder[field] = value;
        setGetOrder(newOrder);
       console.log(newOrder)
    }

    const handleOrder = (e) => {
        const orderInfo = {
            ...getOrder,
            name: user?.displayName,
            email: user?.email,
            productName: order?.productName,
            price: order?.price,
            status: 'Pending',
        }
        fetch('https://shrouded-savannah-73194.herokuapp.com/orders', {
            method: 'POST',
            headers :{
                    'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                
                alert('Succesfully complete your order!');
                <CircularProgress></CircularProgress>
                history.push('/dashboard/myorders')
            }
        })

        e.preventDefault();
    }




    return (
        <div>
            <Navigation></Navigation>
            <div className='order-section'>
            <div class="card">
                <img src={order.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{order.productName}</h5>
                    <p class="card-text">{order.productDetails} </p>
                    <h4>Price: ${order.price}</h4>
                </div>
            </div>
            <div>
                <h2>Complete Your Order!</h2>
                {order?.price && user?.email && <form onSubmit={handleOrder}>
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label='Your Name'
                    name='name'
                    defaultValue={user?.displayName}
                    // onBlur={HandleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label="Your Email"
                    name='email'
                    defaultValue={user?.email}
                    type='email'
                    // onBlur={HandleOnBlur}
                    variant="outlined" />
                    <TextField
                    className='field'
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-password-input"
                    label="Product Name"
                    name='productName'
                    defaultValue={order.productName}
                    // onBlur={HandleOnBlur}
                />
                {
                    order?.price &&
                    <TextField
                    className='field'
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-password-input"
                    label="Product Price"
                    name='price'
                    defaultValue={order.price}
                    // onBlur={HandleOnBlur}
                />
                }
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label='address'
                    name='address'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label='state'
                    name='state'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label='country'
                    name='country'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    id="outlined-basic"
                    label='number'
                    name='number'
                    type='number'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                
                <Button
                    sx={{ width: "50%", m: 1 }}
                    style={{
                        backgroundColor:'green',
                        color: 'white',
                        padding:'10px',
                        fontSize: '20px'
                    }}
                    type='submit'
                    variant="Outlined">Order</Button>
                    

            </form>}
            </div>
        </div>
        </div>
    );
};

export default Orders;