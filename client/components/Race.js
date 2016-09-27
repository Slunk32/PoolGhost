import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

const Race = React.createClass({
    getInitialState() {
      return {
        value: ''
      };
    },

    getValidationState() {
      const race = this.state.value;
      if (!isNaN(parseFloat(race)) && isFinite(race) && race > 0) return 'success';
      else if (race < 0 || race.length > 0) return 'error';
    },

    handleChange(e) {
      this.setState({ value: e.target.value });
    },

    handleSubmit(e) {
      const race = parseInt(this.state.value);
      if (!isNaN(parseFloat(race)) && isFinite(race) && race > 0) {
        e.preventDefault();
        this.props.setRace(race);
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
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock> - The race number must be a number greater than 0 (common races are 5, 7, or 9). </HelpBlock>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <Button onClick={this.handleSubmit} className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
        </form>
      );
    }
})

export default Race;
