import React from 'react';
import './Button.css';

export const Button = ({ value }) => {
  return (
    <div className='button'>
      <button>{value}</button>
    </div>
  );
};
