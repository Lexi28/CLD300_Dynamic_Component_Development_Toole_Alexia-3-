import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Rating from '../molecules/Rating';
import './RatingWidget.css';

const RatingWidget = ({ headingText, paragraphText }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="rating-widget">
      <Heading level={1}>{headingText}</Heading>
      <Rating rating={0} onStarClick={handleStarClick} />{' '}
      {/* Pass the handleStarClick function */}
      <Paragraph text={paragraphText} />
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img
              src="https://i.gifer.com/origin/4e/4e1f6963ba68ae421e44e5c46f54ffb0_w200.gif"
              className="popup-image"
            />
            <span className="popup-message">
              Thank you for leaving a {selectedRating} star rating!
            </span>
            <span className="popup-message2">
              We appreciate your feedback. Your rating helps us improve our
              service and provide you with the best experience possible. Please
              let us know if you have any additional comments or suggestions!
            </span>
            <a href="#more-info" className="popup-cta">
              More Info
            </a>
            <button className="close-btn" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingWidget;
