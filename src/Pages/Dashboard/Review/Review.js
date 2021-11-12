import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const [review, setReview] = useState()
    const {user} = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
        console.log(newReview);
    }

    const handleOnSubmit = e => {
        const reviews ={
            ...review,
            displayName: user.name,
        }
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers :{
                    'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
        })
        e.preventDefault();
    }

    return (
        <div>
            <h3>Please review our products</h3>

            <from onSubmit={handleOnSubmit}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    margin: '0 auto',
                    marginTop:'20px'
                }}>
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Name"
                        defaultValue={user.displayName}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Please add your review"
                        multiline rows={4}
                        name='review'
                        type='text'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-disabled"
                        label="Put rating out of 5"
                        name='rating'
                        type='number'
                        onBlur={handleOnBlur}
                    />
                    <Button type='submit' variant="contained">Submit</Button>
                </div>
            </from>
        </div>

    );
};

export default Review;