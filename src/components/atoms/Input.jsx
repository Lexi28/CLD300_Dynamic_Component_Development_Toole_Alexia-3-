import React from 'react';
import './Input.css';

const Input = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className="input" />
  
);

export default Input;
