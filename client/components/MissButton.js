import React from 'react';

// function that needs difficulty, missed ball

// % of win
// [[30, 50 90], [40, 60 95], [40, 70 100], [40, 80 100], [40, 60 100], [40, 60 100], [40, 60 100], [40, 60 100]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9] map over this and build a button for each one

function isMiss(ball) {

  const scales = [[30, 50, 90], [40, 60, 95], [40, 60, 100], [40, 60, 100], [40, 60, 100], [40, 60, 100], [98, 99, 100], [99, 100, 100]]
  // const balls = new Array(9)
  let scale = scales[ball]
  let difficulty = scale[this.props.difficulty]
  let roll = Math.floor(Math.random() * 100 + 1);
  console.log('roll: ' + roll , 'difficulty: ' + difficulty)

  if (roll < difficulty) {
    this.props.incrementGhostScore();
  } else {
    alert('shoot again');
  }

}


const MissButton = React.createClass({
  render() {
    return (
    <div>
      {[0,1,2,3,4,5,6,7,8].map((val, index) => {
        return <button key={index} onClick={isMiss.bind(this, index)}>
          {index + 1}
        </button>
      })}
    </div>
    )
  }
})



export default MissButton;
