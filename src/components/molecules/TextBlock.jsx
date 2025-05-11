import React from 'react';
import Heading from '../atoms/Heading';
import Subheading from '../atoms/Subheading';
import Paragraph from '../atoms/Paragraph';
import './TextBlock.css';

const TextBlock = ({ headingText, subheadingText, paragraphText }) => (
  <div className="text-block">
    <Heading text={headingText} />
    <Subheading text={subheadingText} />
    <Paragraph text={paragraphText} />
  </div>
);

export default TextBlock;
