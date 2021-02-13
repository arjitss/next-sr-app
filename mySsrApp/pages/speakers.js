import React, { useEffect, useState } from 'react';
import DigitalClock from '../src/DigitalClock';
import axios from 'axios';
import Link from 'next/link';

const Speakers = function (props) {
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
      return new Date().toISOString();
    });
  };

  useEffect(() => {
    const val = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(val);
    };
  }, []);

  return (
    <>
      <h1>
        <DigitalClock time={currentTime} />
      </h1>
      <ul>
        <Link href="/sessions">
          <a>Sessions</a>
        </Link>
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

Speakers.getInitialProps = function () {
  let speakers = axios
    .get('http://localhost:4000/speakers')
    .then((response) => {
      return {
        hasErrored: 'false',
        speakersData: response.data,
        time: new Date().toISOString(),
      };
    })
    .catch(() => {
      return {
        hasErrored: 'false',
        speakersData: error.message,
        time: new Date().toISOString(),
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

export default Speakers;
