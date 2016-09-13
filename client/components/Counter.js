import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    return (
      <p>
        Clicked: 0 times
        {' '}
        <button>
          Add One
        </button>
      </p>
    )
  }
})



export default Counter;
