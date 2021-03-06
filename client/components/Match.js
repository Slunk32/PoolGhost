import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import MissButton from './MissButton';
import Race from './Race';
import WinButton from './WinButton.js';

const Home = React.createClass({
  render() {
    return (
      <div className="match-main">
        <div className="match-div">
          {this.renderCurrentGame()}
        </div>
      </div>
    )
  },

  translateDifficulty() {
    if (this.props.difficulty === 0) {
      return 'Easy';
    }
    else if (this.props.difficulty === 1) {
      return 'Medium';
    }
    else if (this.props.difficulty === 2) {
      return 'Hard';
    }
    else {
      return 'Error';
    }
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
          Difficulty: {this.translateDifficulty()}
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



export default Home;
