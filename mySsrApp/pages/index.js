//const rootElement = document.getElementById('app');
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello World';

import React from 'react';

// const myReactElement = React.createElement(
//   'h1',
//   { className: 'orange' },
//   'Hello World from React'
// );

const Index = function (props) {
  const [currentTime, setCurrentTimeWin] = React.useState(props.time);

  const tick = () => {
    setCurrentTimeWin(() => {
      return new Date().toLocaleString();
    });
  };

  React.useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return React.createElement(
    'h1',
    { className: 'orange' },
    'Hello form Functional React at ' + currentTime
  );
};

// Next frame work takes care of rendering, so we do not need ReactDOM Render, method
// ReactDOM.render(
//   //myReactElement,
//   React.createElement(Hello, { time: new Date().toLocaleString() }, null),
//   document.getElementById('app')
// );

// rootElement.appendChild(myElement);

export default Index;
