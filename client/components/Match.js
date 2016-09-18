import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import MissButton from './MissButton';
import Race from './Race';
import WinButton from './WinButton.js';


const Match = React.createClass({
  render() {
    return (
      <div>
        <Counter who={'Ghost'} score={this.props.ghostScore} />
        <Counter who={'Player'} score={this.props.playerScore} />
        <WinButton incrementPlayerScore={this.props.incrementPlayerScore} />
        <MissButton {...this.props} />
        <Race {...this.props} />
      </div>
    )
  }
})



export default Match;
