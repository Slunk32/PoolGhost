import React from 'react';
import { Button } from 'react-bootstrap';


const WinButton = React.createClass({
  render() {
    return (
      <div className="win-button">
        <Button bsStyle="primary" onClick={this.handleClick.bind(null, this)}>
          Player Win
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
