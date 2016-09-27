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
          {this.renderCurrentGame()}
        </div>
      </div>
    )
  },

  renderCurrentGame() {
    if (this.props.race != 0) {
      return (
      <div>
        <div className="race-div">
          <Counter who={'Player'} score={this.props.playerScore} />
          <div className="spacer"> : </div>
          <Counter who={'Ghost'} score={this.props.ghostScore} />
        </div>
        <hr/>
        <div className="race-status">
          Race to: {this.props.race}
        </div>
        <div className="difficulty-status">
          Difficulty: {this.props.difficulty}
        </div>
        <WinButton {...this.props} />
        <MissButton {...this.props} />
      </div>
      )
    }
    else {
      return (
        <div>
          <Race {...this.props} />
        </div>
      )
    }
  }

})



export default Match;
