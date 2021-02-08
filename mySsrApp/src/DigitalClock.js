import React from 'react';
import styles from './DigitalClock.module.css';

const DigitalClock = (props) => {
  const date = new Date(props.time);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let session = 'AM';
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  const time = h + ':' + m + ':' + s + ' ' + session;

  return <div className={styles.clock}>{time}</div>;
};

export default DigitalClock;
