import React from 'react';

const Race = React.createClass({
  render() {
    const { race } = this.props;
    return (
      <p>
          Race to: { race }
      </p>
    )
  }
})



export default Race;
