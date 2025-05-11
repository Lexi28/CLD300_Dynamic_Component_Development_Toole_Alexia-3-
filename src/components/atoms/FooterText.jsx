// src/components/atoms/FooterText.js
import React from 'react';
import './FooterText.css';

const FooterText = ({ children }) => {
  return <p className="footer-text">{children}</p>;
};

export default FooterText;
