import React from 'react';
import { Button } from 'react-bootstrap';


const WinButton = React.createClass({
  render() {
    return (
      <div className="win-button">
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick.bind(null, this)}>
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
      this.props.setBanner2(false);
      this.props.setBanner3(false);
      this.props.setBanner1(true);
      setTimeout(() => {
        this.props.setBanner1(false);
      }, 5000);
      this.props.incrementPlayerScore();
    }
  }
})



export default WinButton;
