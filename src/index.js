import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // if true
    (position) => console.log(position),
    // if false
    (error) => console.log(error)
  );

  return <div>Hi there!</div>;
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);