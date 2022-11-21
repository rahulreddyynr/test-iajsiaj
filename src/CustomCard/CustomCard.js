import React, { useState } from 'react';
import './CustomCard.css';

const Card = ({ title, auther, Desc }) => {
  return (
    <div>
      <span>{title}</span>
      <span>{auther}</span>
    </div>
  );
};

export default Card;
