import React, { Component, useState } from 'react';

const Entry = ({ getpoem, aprilDate }) => {
  return (
    <button className='button' onClick={(e) => getpoem(aprilDate)}>
      April {aprilDate}
    </button>
  );
};

export default Entry;
