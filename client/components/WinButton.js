import React from 'react';

const WinButton = React.createClass({
  render() {
    const { incrementPlayerScore } = this.props;
    return (
      <div>
        <p> Win: </p>
        <button onClick={incrementPlayerScore}>
          Run Out
        </button>
      </div>
    )
  }
})



export default WinButton;
