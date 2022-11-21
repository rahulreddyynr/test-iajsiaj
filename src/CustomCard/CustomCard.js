import React, { useState } from 'react';
import defaultClass from './CustomCard.css';

const Card = ({ title, auther, Desc }) => {
  return (
    <div className={defaultClass.Conatiner}>
      <span>{title}</span>
      <span>{auther}</span>
    </div>
  );
};

export default Card;
