import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './Form.css';

const Form = ({ buttonText, onButtonClick }) => (
  <div className="form">
    <Input type="email" placeholder="Enter your email" />
    <Button onClick={onButtonClick}>{buttonText}</Button>
  </div>
);

export default Form;
