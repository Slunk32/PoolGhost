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
          <Counter who={'Ghost'} score={this.props.ghostScore} />
          <div className="spacer"> : </div>
          <Counter who={'Player'} score={this.props.playerScore} />
        </div>
        <hr/>
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
