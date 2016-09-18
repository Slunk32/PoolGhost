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
        <Race {...this.props} />
        <Counter who={'Ghost'} score={this.props.ghostScore} />
        <Counter who={'Player'} score={this.props.playerScore} />
        <WinButton incrementPlayerScore={this.props.incrementPlayerScore} />
        <MissButton {...this.props} />
      </div>
    )
  }
})



export default Match;
