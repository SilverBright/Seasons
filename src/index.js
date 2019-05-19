import React from 'react';
import ReactDOM from 'react-dom';

// Class Component

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
    // first argument - success callback
    (position) => console.log(position),
    // second argument
    (error) => console.log(error)
  );

  return (
    <div>Latitude: </div>
    );
  }
}


// Functional Component

// const App = () => {
//   // built in geolocation function (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
//   window.navigator.geolocation.getCurrentPosition(
//     // first argument - success callback
//     (position) => console.log(position),
//     // second argument
//     (error) => console.log(error)
//   );

//   return (
//      <div>Latitude: </div>
//   );
// }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);