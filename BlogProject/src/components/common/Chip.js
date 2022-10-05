import React from 'react'
import './chip_style.css';

const Chip = ({label}) => {
  return (
    <div>
        <p className='chip'>{label}</p>
    </div>
  );
};

export default Chip;