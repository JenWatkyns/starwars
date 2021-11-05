import React from 'react';
import './css/button.css';

/**
 * This component is a button
 *
 * @param {string} passes through the text displayed on the button
 * @param {string} passes through a className
 * @param {func} passes through an onClick function
 */

const Button = ({ text, className = '', onClick = () => {} }) => (
  <button className={`btn ${className}`} onClick={onClick} type="button">
    {text}
  </button>
);

export default Button;
