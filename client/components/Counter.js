import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { ghostScore, playerScore, incrementScore, who } = this.props;
    return (
      <p>
          {who} score: {who === 'Ghost' ? ghostScore : playerScore}
        <button onClick={incrementScore.bind(null, who)}>
          Add One
        </button>
      </p>
    )
  }
})



export default Counter;
