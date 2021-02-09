import React, { useEffect, useState } from 'react';
import DigitalClock from '../src/DigitalClock';
import axios from 'axios';

const Index = function (props) {
  const [currentTime, setCurrentTimeWin] = useState(
    props.time // new Date().toLocaleString()
  );

  const [speakersData, setSpeakersData] = useState({
    hasErrored: props.hasErrored,
    message: props.message,
    speakersData: props.speakersData,
  });

  const tick = () => {
    setCurrentTimeWin(() => {
      return new Date().toLocaleString();
    });
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return (
    <>
      <h1>
        <DigitalClock time={currentTime} />
      </h1>
      <ul>
        {speakersData.speakersData.map((speaker) => {
          return (
            <li key={speaker.id}>
              {speaker.firstName} hrllo {speaker.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

Index.getInitialProps = function () {
  let speakers = axios
    .get('http://localhost:4000/speakers')
    .then((response) => {
      return {
        hasErrored: 'false',
        speakersData: response.data,
        time: new Date().toLocaleString(),
      };
    })
    .catch(() => {
      return {
        hasErrored: 'false',
        speakersData: error.message,
        time: new Date().toLocaleString(),
      };
    });

  return speakers;

  // return {
  //   time: new Date().toLocaleString(),
  // };

  // return new Promise((resolve, reject) => {
  //   setInterval(() => {
  //     resolve({
  //       time: new Date().toLocaleString(),
  //     });
  //   }, 3000);
  // });
};

export default Index;
