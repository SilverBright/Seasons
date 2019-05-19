import React from 'react';
import ReactDOM from 'react-dom';

// Class Component

class App extends React.Component {
  // Now that we have a class component we can include state
  // We need to initialize our state object. To do that we use constructor
  // calling the constructor function OVERRIDES React's basic built-in construction functionality
  constructor(props) {
    // we must then reference the parent function by using super(props) so that we still get React's constructor functionality
    // not calling super(props) will render an error
    super(props);

    // this.state = { key: value }
    // This is only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      // position is a callback function
      position => {
        // Update the state (updating) by using setState
        this.setState({ lat: position.coords.latitude });
      },
      // second argument/callback
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // Render method must always exist in every component
  render() {
      if (this.state.errorMessage) {
        return <div>Error: {this.state.errorMessage}</div>;
      }

      if (this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>;
      }

      return <div>loading...</div>;
    };
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

ReactDOM.render(<App />,
  document.querySelector('#root')
);