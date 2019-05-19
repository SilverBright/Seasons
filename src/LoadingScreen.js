import React from 'react';

const LoadingScreen = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

LoadingScreen.defaultProps = {
  message: 'Loading...'
}

export default LoadingScreen;