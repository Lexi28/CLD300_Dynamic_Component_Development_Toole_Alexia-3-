// src/components/atoms/FooterLink.js
import React from 'react';
import './FooterLink.css';

const FooterLink = ({ href, children }) => {
  return (
    <a href={href} className="footer-link">
      {children}
    </a>
  );
};

export default FooterLink;
