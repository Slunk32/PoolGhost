import React from 'react';

const Notification = React.createClass({

  render() {
    return (
      <div>
        {this.renderNotification()}
      </div>
    )
  },

  renderNotification() {
    if (this.props.banner) {
      return (
        <div className="notification-box">
          <span className="banner">
            Nice out!
          </span>
        </div>
      )
    }
  }

})



export default Notification;
