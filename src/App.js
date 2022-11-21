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
      {Data.map((item) => {
        return (
          <CustomCard
            title={item.title}
            auther={item.author}
            Desc={item.Desi}
          />
        );
      })}
    </div>
  );
}
