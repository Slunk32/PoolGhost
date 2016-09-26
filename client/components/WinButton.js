import React from 'react';
import { Button } from 'react-bootstrap';


const WinButton = React.createClass({
  render() {
    return (
      <div>
        <p> Win: </p>
        <Button bsStyle="primary" onClick={this.handleClick.bind(null, this)}>
          Run Out
        </Button>
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
