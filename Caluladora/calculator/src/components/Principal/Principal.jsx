import React from 'react';
import './Principal.css';
import { Button } from '../Button/Button';

export const Principal = () => {
  const values = ['AC', 'DEL', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <div className='principal'>
      <form>
        <input type="text" />
      </form>
      <div className="row">

        {values.map((value, index) => (
          <Button key={index} value={value} />
        ))}

      </div>
    </div>
  );
};