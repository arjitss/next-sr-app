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
  return React.createElement(
    'h1',
    { className: 'orange' },
    'Hello form Functional React at '
  );
};

ReactDOM.render(
  //myReactElement,
  React.createElement(Hello, {}, null),
  document.getElementById('app')
);

// rootElement.appendChild(myElement);
