import React, { useEffect, useState } from 'react';
import DigitalClock from '../src/DigitalClock';

const Index = function () {
  const [currentTime, setCurrentTimeWin] = useState(
    new Date().toLocaleString()
  );

  const tick = () => {
    setCurrentTimeWin(() => {
      return new Date().toLocaleString();
    });
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return (
    <h1>
      <DigitalClock time={currentTime} />
    </h1>
  );
};

export default Index;
