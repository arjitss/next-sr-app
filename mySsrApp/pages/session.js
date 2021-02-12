import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

Session.propTypes = {};

function Session(props) {
  console.log(props.sessionsData.title);
  return (
    <div className="container">
      <div className="row">{props.sessionsData.title}</div>
    </div>
  );
}

Session.getInitialProps = function ({ query }) {
  console.log(query);
  let session = axios
    .get(`http://localhost:4000/sessions/${query.sessionId}`)
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
  return session;
};

export default Session;
