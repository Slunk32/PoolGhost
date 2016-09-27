import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import MissButton from './MissButton';
import Race from './Race';
import WinButton from './WinButton.js';


const Match = React.createClass({
  render() {
    return (
      <div className="match-main">
        <div className="match-div">
        <Race {...this.props} />
        <Counter who={'Ghost'} score={this.props.ghostScore} />
        <Counter who={'Player'} score={this.props.playerScore} />
        <WinButton {...this.props} />
        <MissButton {...this.props} />
        </div>
      </div>
    )
  }
})



export default Match;
