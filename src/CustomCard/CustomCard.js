import React, { useState } from 'react';
import './CustomCard.css';

const Card = ({ title, auther, Desc }) => {
  return (
    <div className={'Conatiner'}>
      <span>{title}</span>
      <span>{auther}</span>
    </div>
  );
};

export default Card;
