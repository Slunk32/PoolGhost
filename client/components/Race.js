import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

const Race = React.createClass({
    getInitialState() {
      return {
        value: '',
        difficulty: 1
      };
    },

    getValidationState() {
      const race = this.state.value;
      if (!isNaN(parseFloat(race)) && isFinite(race) && race % 1 == 0 && race > 0) return 'success';
      else if (race < 0 || race.length > 0) return 'error';
    },

    handleRaceChange(e) {
      this.setState({
        value: e.target.value
      });
    },

    handleDifficultyChange(e) {
      this.setState({
        difficulty: e.target.value
      });
    },

    handleSubmit(e) {
      const race = parseInt(this.state.value);
      const difficulty = parseInt(this.state.difficulty);
      if (!isNaN(parseFloat(race)) && isFinite(race) && race > 0) {
        e.preventDefault();
        console.log(this.state);
        this.props.setRace(race);
        this.props.setDifficulty(difficulty);
      }
      else {
        e.preventDefault();
        this.refs.raceForm.reset();
      }
  },

    render() {
      return (
        <form ref="raceForm">
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Race:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter Race"
              onChange={this.handleRaceChange}
            />
            <FormControl.Feedback />
            <HelpBlock> Race must be a number greater than 0 (common races in tournaments are 3, 5, 7, or 9). </HelpBlock>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Difficulty:</ControlLabel>
            <FormControl componentClass="select" value={this.state.difficulty} onChange={this.handleDifficultyChange}>
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
            </FormControl>
            <HelpBlock> Difficulty determines how likely the ghost will run out on a miss. </HelpBlock>
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary" bsSize="large" block className="raceButton" type="submit">Start Match</Button>
        </form>
      );
    }
})

export default Race;
