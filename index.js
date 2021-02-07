const rootElement = document.getElementById('app');
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello World';

const myReactElement = React.createElement(
  'h1',
  { className: 'orange' },
  'Hello World from React'
);

ReactDOM.render(myReactElement, document.getElementById('app'));

// rootElement.appendChild(myElement);
