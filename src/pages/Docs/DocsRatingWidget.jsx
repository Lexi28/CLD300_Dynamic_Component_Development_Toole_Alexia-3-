import RatingWidget from '../../components/organisms/RatingWidget';
import Star from '../../components/atoms/Star';
import styles from './docs.module.scss';
import Codeblock from '/src/components/Codeblock/Codeblock';

const DocsRatingWidget = () => {
  const snippet1 = `
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
  `;

  const snippet2 = `
  const RatingStars = ({ onStarClick, rating }) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={\`star \${rating >= star ? 'selected' : ''}\`}
            onClick={() => onStarClick(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  `;

  return (
    <>
      <h4>Rating Widget</h4>

      <p>
        The RatingWidget component is a dynamic user feedback tool that allows
        users to rate their experience and provides immediate acknowledgment of
        their input. After a rating is submitted, a popup appears, thanking the
        user for their feedback and offering additional information or actions.
        The popup enhances user engagement by making the feedback process feel
        rewarding.
      </p>

      <hr />

      <p>Examples of the rating widget:</p>

      <div className={styles.example}>
        <RatingWidget></RatingWidget>
      </div>

      <p>Code snippet for the component:</p>

      <Codeblock snippet={snippet1} />

      <p>Additional snippet for the star rating component:</p>

      <div className={styles.example}>
        <Star></Star>
      </div>

      <Codeblock snippet={snippet2} />
    </>
  );
};

export default DocsRatingWidget;
