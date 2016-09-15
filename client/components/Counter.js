import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { score, incrementScore, who } = this.props;
    return (
      <p>
          Clicked: {score} times
        <button onClick={incrementScore.bind(null, who)}>
          Add One
        </button>
      </p>
    )
  }
})



export default Counter;
