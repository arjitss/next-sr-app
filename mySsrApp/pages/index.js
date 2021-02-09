import React, { useEffect, useState } from 'react';
import DigitalClock from '../src/DigitalClock';

const Index = function (props) {
  const [currentTime, setCurrentTimeWin] = useState(
    props.time // new Date().toLocaleString()
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

Index.getInitialProps = function () {
  // return {
  //   time: new Date().toLocaleString(),
  // };

  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve({
        time: new Date().toLocaleString(),
      });
    }, 3000);
  });
};

export default Index;
