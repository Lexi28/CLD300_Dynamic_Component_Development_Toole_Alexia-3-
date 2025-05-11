import React from 'react';
import Heading from '../atoms/Heading';
import Subheading from '../atoms/Subheading';
import Button from '../atoms/Button';
import './TextBlockMolecule.css';

const TextBlockMolecule = ({ heading, subheading, buttonText1, buttonText2, onButtonClick1, onButtonClick2 }) => {
  return (
    <div className="text-block-molecule">
         <div className="text">
      <Heading level={1}>{heading}</Heading>
      <Subheading text={subheading} />
      <div className="button-container">
        <Button onClick={onButtonClick1}>{buttonText1}</Button>
        </div>
      </div>
    </div>
  );
};

export default TextBlockMolecule;



