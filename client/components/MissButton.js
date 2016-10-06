import React from 'react';
import { Button } from 'react-bootstrap';

/* Compare random number to difficulty value based upon set difficulty
and current ball to determin if the ghost won */

function calculateMiss(missedBall) {

  const { race, playerScore, ghostScore, difficulty } = this.props;

// easy [10% - 40%], medium [30% - 90%], hard [50-100%]

  const difficultyValues = [
    /* 1 ball */ [10, 25, 50],
    /* 2 ball */ [15, 30, 60],
    /* 3 ball */ [20, 35, 70],
    /* 4 ball */ [20, 40, 80],
    /* 5 ball */ [25, 45, 85],
    /* 6 ball */ [30, 50, 90],
    /* 7 ball */ [30, 60, 100],
    /* 8 ball */ [35, 70, 100],
    /* 9 ball */ [40, 85, 100]
  ]

  let randomNum = Math.floor(Math.random() * 100 + 1);

  let difficultyValue = difficultyValues[missedBall]
  let difficultyCheck = difficultyValue[difficulty]


  console.log('Player Roll: ' + randomNum , 'Ghost Roll: ' + difficultyCheck)

  if (ghostScore + 1 === race) {
    this.props.ghostWins();
  }
  else if (randomNum < difficultyCheck) {
    this.props.setBanner1(false);
    this.props.setBanner2(false);
    this.props.setBanner3(true);
    setTimeout(() => {
      this.props.setBanner3(false);
    }, 5000);
    this.props.incrementGhostScore();
  }
  else {
    this.props.setBanner1(false);
    this.props.setBanner3(false);
    this.props.setBanner2(true);
    setTimeout(() => {
      this.props.setBanner2(false);
    }, 5000);
  }
}


const MissButton = React.createClass({
  render() {
    return (
    <div className="float_center_buttons">
      <div className="div_background_butons">
        {this.renderButtons()}
      </div>
    </div>
    )
  },

  renderButton(val, index) {
    return (
      <Button id={'b' + (index + 1)} className="buttons" bsStyle="primary" bsSize="small" key={index} onClick={calculateMiss.bind(this, index)}>
        <span className="circle">{index + 1}</span>
      </Button>
  )
},


  renderButtons() {
    return [0,1,2,3,4,5,6,7,8].map(this.renderButton)
  }

})



export default MissButton;
