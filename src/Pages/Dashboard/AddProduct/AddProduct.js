import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        newProduct[field] = value;
        setAddProduct(newProduct);
        console.log(newProduct);
    }

    const handleOnSubmit = e => {
        const product = {
            ...addProduct
        }
        fetch('https://shrouded-savannah-73194.herokuapp.com/products',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added product')
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Add a Product</h2>

            <form onSubmit={handleOnSubmit}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    margin: '0 auto',
                    marginTop: '20px'
                }}>
                    <TextField
                        style={{
                            marginBottom: '10px'
                        }}
                        required
                        id="outlined-basic"
                        label="Product name"
                        name='productName'
                        variant="outlined"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        style={{
                            marginBottom: '10px'
                        }}
                        id="outlined-multiline-static"
                        label="Product description"
                        multiline rows={4}
                        name='productDetails'
                        type='text'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                    style={{
                        marginBottom: '10px'
                    }}
                        required
                        id="outlined-basic"
                        label="Product price"
                        name='price'
                        type='number'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                    style={{
                        marginBottom: '10px'
                    }}
                        required
                        id="outlined-basic"
                        label='Input product image link'
                        name='img'
                        type='text'
                        onBlur={handleOnBlur}
                    />
                    <Button type='submit' variant="contained">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;