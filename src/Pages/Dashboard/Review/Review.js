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
        
    }


    const handleOnSubmit = e => {
        const reviews ={
            ...review,
            displayName: user.name,
        }
        fetch('https://shrouded-savannah-73194.herokuapp.com/reviews',{
            method: 'POST',
            headers :{
                    'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Thanks for your review!')
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h3>Please review our products</h3>

            <form onSubmit={handleOnSubmit}>
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
                    required
                        id="outlined-multiline-static"
                        label="Please add your review"
                        multiline rows={4}
                        name='review'
                        type='text'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                    required
                        id="outlined-disabled"
                        label="Put rating out of 5"
                        name='rating'
                        type='number'
                        onBlur={handleOnBlur}
                    />
                    <Button type='submit' variant="contained">Submit</Button>
                </div>
            </form>
        </div>

    );
};

export default Review;