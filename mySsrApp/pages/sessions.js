import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Session = function (props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!props.isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);

  let sessionsData = props.sessionsData;
  return isLoading ? (
    <div>` waiting for Data`</div>
  ) : (
    <div>
      {props.hasErrored}
      <ul>
        {sessionsData.map((session) => {
          return (
            <Link
              href={{
                pathname: '/session',
                query: {
                  sessionId: session.id,
                },
              }}
              as={`/session/${session.id}`}
              key={session.id + 'A'}
            >
              <a key={session.id + 'B'}>
                <li key={session.id}>
                  {' '}
                  {session.id} {session.title}
                </li>
              </a>
            </Link>
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
        isLoading: false,
      };
    })
    .catch(() => {
      return {
        hasErrored: 'false',
        sessionsData: error.message,
        time: new Date().toLocaleString(),
        isLoading: false,
      };
    });

  return sessions;
};

export default Session;
