import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { who, score } = this.props;
    return (
      <div>
        <div className="counter-who"> {who} </div>
        <div className="score">
            {score}
        </div>
      </div>
    )
  }
})



export default Counter;
