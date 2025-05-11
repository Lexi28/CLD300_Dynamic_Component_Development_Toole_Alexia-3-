// src/components/atoms/Heading.js
import React from 'react';
import './Heading.css';

const Heading = ({ level, children }) => {
  const Tag = `h${level}`;
  return <Tag className="heading">{children}</Tag>;
};

export default Heading;
