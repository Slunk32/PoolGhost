import React from 'react';

const Notification = React.createClass({

  render() {
    return (
      <div>
        {this.renderPlayerWinNotification()}
        {this.renderMissNotification()}
        {this.renderGhostWinNotification()}
      </div>
    )
  },

  renderPlayerWinNotification() {
    if (this.props.banner1) {
      return (
        <div className="notification-box">
          <span className="banner">
            Nice out! Start the next rack.
          </span>
        </div>
      )
    }
  },

  renderMissNotification() {
    if (this.props.banner2) {
      return (
        <div className="notification-box">
          <span className="banner">
            The ghost missed! Continue with ball in hand.
          </span>
        </div>
      )
    }
  },

  renderGhostWinNotification() {
    if (this.props.banner3) {
      return (
        <div className="notification-box">
          <span className="banner">
            The ghost ran out! Start the next rack.
          </span>
        </div>
      )
    }
  }

})



export default Notification;
