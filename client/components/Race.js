import React from 'react';

const Race = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    const race = this.refs.race.value;
    this.props.setRace(race);
    this.refs.raceForm.reset();
  },

  render() {
    const { race } = this.props;
    return (
      <div>
        <p>
            Race to: { race }
        </p>
        <form ref="raceForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="race" placeholder="Set Race"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
})

export default Race;
