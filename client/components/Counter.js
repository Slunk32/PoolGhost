import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { who, score, handler } = this.props;
    return (
      <p>
          {who} score: {score}
      </p>
    )
  }
})



export default Counter;
