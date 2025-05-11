import React, { useState } from 'react';

import Heading from '../atoms/Heading';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsFlipped((prev) => !prev); // Toggle flip state
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleButtonClick} // Flip the card on click
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-image-container">
            <img className="card-image" src={imageUrl} alt="Card" />
          </div>
          <div className="card-content">
            <Heading level={1}>{title}</Heading>
            <p className="card-description">{description}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-content">
            <p>More details about {title}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
