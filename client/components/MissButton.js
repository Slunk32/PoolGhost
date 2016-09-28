import React from 'react';
import { Button } from 'react-bootstrap';

/* Compare random number to difficulty value based upon set difficulty
and current ball to determin if the ghost won */

function calculateMiss(missedBall) {

  const { race, playerScore, ghostScore, difficulty } = this.props;

  const difficultyValues = [
    /* 1 ball */ [20, 30, 50],
    /* 2 ball */ [25, 35, 60],
    /* 3 ball */ [30, 40, 70],
    /* 4 ball */ [33, 45, 80],
    /* 5 ball */ [35, 50, 90],
    /* 6 ball */ [40, 55, 95],
    /* 7 ball */ [45, 65, 100],
    /* 8 ball */ [55, 80, 100],
    /* 9 ball */ [70, 90, 100]
  ]

  let randomNum = Math.floor(Math.random() * 100 + 1);

  let difficultyValue = difficultyValues[missedBall]
  let difficultyCheck = difficultyValue[difficulty]


  console.log('roll: ' + randomNum , 'difficulty: ' + difficultyCheck)

  if (ghostScore + 1 === race) {
    this.props.ghostWins();
  }
  else if (randomNum < difficultyCheck) {
    console.log('GhostScore: ' + ghostScore + ', Race: '  + race);
    this.props.setBanner3(true);
    setTimeout(() => {
      this.props.setBanner3(false);
    }, 5000);
    this.props.incrementGhostScore();
  }
  else {
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
