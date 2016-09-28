import React from 'react';
import { Link } from 'react-router';
import NavbarInstance from './Nav';
import Notification from './Notification';

const Main = React.createClass({
  render() {
    return (
      <div>
        <NavbarInstance />
        <Notification {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})



export default Main;
