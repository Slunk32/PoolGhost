import React from 'react';


const WinButton = React.createClass({
  render() {
    return (
      <div>
        <p> Win: </p>
        <button onClick={this.handleClick.bind(null, this)}>
          Run Out
        </button>
      </div>
    )
  },

  handleClick() {
    const { race, playerScore } = this.props;

    if (playerScore + 1 === race) {
      this.props.playerWins();
    }
    else {
      this.props.incrementPlayerScore();
    }
  }
})



export default WinButton;
