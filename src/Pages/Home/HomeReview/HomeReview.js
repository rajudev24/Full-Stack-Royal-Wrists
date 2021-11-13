import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import './HomeReview.css'

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-savannah-73194.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <h3 className='mt-5 pt-5'>Review by our cutomers </h3>

            <div className='customer-review'>
                {
                    reviews.map(review => <div
                        key={review._id}
                        className='review-details'
                    >
                        <h4>{review.displayName} </h4>
                        <h5>{review.review} </h5>
                        <small>Rating: </small>
                        <Rating
                            readonly
                            initialRating={review.rating}
                            emptySymbol="far fa-star raitng "
                            fullSymbol="fas fa-star raitng "
                        ></Rating>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeReview;