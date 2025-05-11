import React from 'react';
import TextBlock from '../molecules/TextBlock';
import Form from '../molecules/Form';
import './SignUpOrganism.css';

const SignUpOrganism = ({
  headingText,
  subheadingText,
  paragraphText,
 
  buttonText,
}) => {
  const handleSignup = () => {
   
  };

  return (
    <div className="signup-organism">
      <TextBlock
        subheadingText={subheadingText}
        paragraphText={paragraphText}
      />
      <Form buttonText={buttonText} onButtonClick={handleSignup} />
    </div>
  );
};

export default SignUpOrganism;
