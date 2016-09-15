import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';

// presentational

const Match = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      I'm the main page. This is where the menu will live
      <Counter who={'ghost'} {...this.props}/>
      <Counter who={'player'} {...this.props}/>
      </div>
    )
  }
})



export default Match;
