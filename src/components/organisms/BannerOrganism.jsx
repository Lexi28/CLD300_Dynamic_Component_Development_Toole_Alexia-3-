import React from 'react';
import ImageAtom from '../atoms/ImageAtom';
import TextBlockMolecule from '../molecules/TextBlockMolecule';
import './BannerOrganism.css';



const BannerOrganism = ({ imageSrc, imageAlt, heading, subheading, buttonText1, buttonText2, onButtonClick1, onButtonClick2 }) => {
  return (
    <div className="banner-organism">
      <ImageAtom src={imageSrc} alt={imageAlt} />
      <TextBlockMolecule 
        heading={heading} 
        subheading={subheading} 
        buttonText1={buttonText1} 
        buttonText2={buttonText2} 
        onButtonClick1={onButtonClick1} 
        onButtonClick2={onButtonClick2} 
      />
    </div>
  );
};

export default BannerOrganism;
