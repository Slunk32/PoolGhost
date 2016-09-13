import React from 'React';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    const { score } = this.props;
    return (
      <p>
        Clicked: {score} times
        {' '}
        <button>
          Add One
        </button>
      </p>
    )
  }
})



export default Counter;
