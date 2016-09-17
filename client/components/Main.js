import React from 'react';
import { Link } from 'react-router';
import NavbarInstance from './Nav';

const Main = React.createClass({
  render() {
    return (
      <div>
      <NavbarInstance />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})



export default Main;
