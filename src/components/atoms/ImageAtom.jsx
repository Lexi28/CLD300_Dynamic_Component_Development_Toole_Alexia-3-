import React from 'react';
import './ImageAtom.css';

const ImageAtom = ({ src, alt }) => {
  return <img className="image-atom" src={src} alt={alt} />;
};

export default ImageAtom;
