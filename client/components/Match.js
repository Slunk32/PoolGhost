import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import MissButton from './MissButton';

// presentational

const Match = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      I'm the main page. This is where the menu will live
      <Counter who={'Ghost'} score={this.props.ghostScore} handler={this.props.incrementGhostScore}/>
      <Counter who={'Player'} score={this.props.playerScore} handler={this.props.incrementPlayerScore}/>
      <MissButton {...this.props} />
      </div>
    )
  }
})



export default Match;
