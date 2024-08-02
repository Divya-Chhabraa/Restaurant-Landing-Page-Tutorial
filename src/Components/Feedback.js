import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import './Feedback.css';  

const Feedback = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (review.split(' ').length > 100) {
            setError('Review must be 100 words or less.');
            return;
        }
        setError('');

        try {
            const response = await axios.post('http://localhost:8081/feedback', {
                name,
                rating,
                review
            });
            console.log('Feedback submitted:', response.data);
            setSuccess('Feedback submitted successfully!');
            setName('');
            setRating(0);
            setReview('');
        } catch (error) {
            console.error('Error submitting feedback:', error.response ? error.response.data : error.message);
            setError('An error occurred while submitting your feedback.');
        }
        window.location.href="http://localhost:3000/startpage";
    };

    return (
        <div>
            <h1 className='feedh1'>Connect with Us! 🤝</h1>
            <div className="feedback-form">
            <h2>Share your experience</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="input-group">
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="rating">
                    <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        changeRating={handleRatingChange}
                        numberOfStars={5}
                        name='rating'
                        starDimension="50px"
                        starSpacing="5px"
                    />
                </div>
                <div className="review">
                    <textarea
                        value={review}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                        rows="5"
                        maxLength="500"
                        required
                    />
                </div>
                <div className='button-container'>
                <button id="feedbackbutton" type="submit">Submit</button>
                </div>
                
                {success && <p className="success">{success}</p>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
        </div>
        
    );
};

export default Feedback;
