const rootElement = document.getElementById('app');
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello World';

const myReactElement = React.createElement(
  'h1',
  { className: 'orange' },
  'Hello World from React'
);

const Hello = function (props) {
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

ReactDOM.render(
  //myReactElement,
  React.createElement(Hello, { time: new Date().toLocaleString() }, null),
  document.getElementById('app')
);

// rootElement.appendChild(myElement);
