// src/components/molecules/FooterLinks.js
import React from 'react';
import FooterLink from '../atoms/FooterLink';
import './FooterLinks.css';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <FooterLink href="#about">About</FooterLink>
      <FooterLink href="#terms">Terms of Service</FooterLink>
      <FooterLink href="#privacy">Privacy Policy</FooterLink>
      <FooterLink href="#contact">Contact Us</FooterLink>
    </div>
  );
};

export default FooterLinks;
