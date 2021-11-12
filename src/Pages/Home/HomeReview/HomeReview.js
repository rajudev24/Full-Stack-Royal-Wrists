import React, {useState, useEffect} from 'react';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://shrouded-savannah-73194.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h3>total review {reviews.length} Items </h3>
        </div>
    );
};

export default HomeReview;