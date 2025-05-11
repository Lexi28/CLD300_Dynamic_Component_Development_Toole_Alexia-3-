import React from 'react';
import Star from '../atoms/Star';
import './Rating.css';

const Rating = ({ rating, onStarClick }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => onStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
