import React from 'react';
import ReactDOM from 'react-dom';

// Class Component

class App extends React.Component {
  // Delete constructor function, babel will still compile constructor method
  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    // console.log('Component rendered to screen');
    window.navigator.geolocation.getCurrentPosition(
      // position is a callback function
      position => this.setState({ lat: position.coords.latitude }),
       // Update the state (updating) by using setState
      err => this.setState({ errorMessage: err.message })
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
    }
  }
    
  ReactDOM.render(<App />,
    document.querySelector('#root')
  );

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

