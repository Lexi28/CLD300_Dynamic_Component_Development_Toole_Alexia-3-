// src/components/organisms/Footer.js
import React from 'react';
import FooterLinks from '../molecules/FooterLinks';
import FooterText from '../atoms/FooterText';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterText>&copy; 2024 AI NFT Image Generator</FooterText>
      <FooterLinks />
      <FooterText>
        By using this site, you agree to our terms and policies.
      </FooterText>
    </footer>
  );
};

export default Footer;
