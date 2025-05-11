import React from 'react';
import './Star.css';

const Star = ({ filled }) => (
  <span className={`star ${filled ? 'filled' : ''}`}>&#9733;</span>
);

export default Star;
