import React from 'react';
import './style.css';
import CustomCard from './CustomCard/CustomCard';

export default function App() {
  const Data = [
    { author: 'rahul', title: 'left top', Desi: 'some dummy test' },
    { author: 'rahul1', title: 'left top', Desi: 'some dummy test' },
    { author: 'rahul2', title: 'left top', Desi: 'some dummy test' },
    { author: 'rahul3', title: 'left top', Desi: 'some dummy test' },
    { author: 'rahul4', title: 'left top', Desi: 'some dummy test' },
  ];

  return (
    <div>
      <h1>Hello Infy !</h1>
      <CustomCard />
    </div>
  );
}
