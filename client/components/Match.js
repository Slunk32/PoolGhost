import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';

// presentational

const Match = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      I'm the main page. This is where the menu will live
      <Counter who={'Ghost'} {...this.props}/>
      <Counter who={'Player'} {...this.props}/>
      </div>
    )
  }
})



export default Match;
