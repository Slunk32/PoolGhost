import React from 'react';
import { Link } from 'react-router';
import Counter from './Counter';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      I'm the photo grid
      <Counter />
      </div>
    )
  }
})



export default PhotoGrid;
