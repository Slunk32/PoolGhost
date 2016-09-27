import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { who, score } = this.props;
    return (
      <div className="score">
          {score}
      </div>
    )
  }
})



export default Counter;
