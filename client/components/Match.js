import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import MissButton from './MissButton';
import Race from './Race';


const Match = React.createClass({
  render() {
    return (
      <div>
        I'm the main page. This is where the menu will live
        <Counter who={'Ghost'} score={this.props.ghostScore} />
        <Counter who={'Player'} score={this.props.playerScore} />
        <MissButton {...this.props} />
        <Race race={this.props.race} setRace={this.props.setRace} />
      </div>
    )
  }
})



export default Match;
