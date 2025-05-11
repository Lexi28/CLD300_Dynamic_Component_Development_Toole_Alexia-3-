// src/components/atoms/Logo.js
import React from 'react';
import './Logo.css';

const Logo = ({ text }) => {
  return (
    <div className="logo">
      <span>{text}</span>
    </div>
  );
};

export default Logo;
