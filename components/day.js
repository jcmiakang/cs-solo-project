import React from 'react';
import Entry from './entry.js';

const Days = ({getpoem}) => {
  const days = [];
  for (let i = 1; i < 31; i++) {
    days.push(<Entry key={i} aprilDate={i} getpoem={getpoem} />);
  }
  return <div className='entry'>{days}</div>;
};

export default Days;
