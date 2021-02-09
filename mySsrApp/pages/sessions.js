import React from 'react';
import axios from 'axios';

const Session = function (props) {
  let sessionsData = props.sessionsData;

  return (
    <div>
      {props.hasErrored}
      <ul>
        {sessionsData.map((session) => {
          return (
            <li key={session.id}>
              {' '}
              {session.id} {session.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Session.getInitialProps = () => {
  let sessions = axios
    .get('http://localhost:4000/sessions')
    .then((response) => {
      return {
        hasErrored: 'false',
        sessionsData: response.data,
        time: new Date().toLocaleString(),
      };
    })
    .catch(() => {
      return {
        hasErrored: 'false',
        sessionsData: error.message,
        time: new Date().toLocaleString(),
      };
    });

  return sessions;
};

export default Session;
