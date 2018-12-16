import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: ''
    };
  }

  render() {
    return (
      < input type="text" onChange={event => this.handleChange(event)} onKeyDown={event => this.keyPress(event)} />
    )
  }

  handleChange(event) {
    this.state = {
      pointTitle: event.target.value
    }
  }

  keyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }
    // console.log(this.state.pointTitle.trim())
    this.props.onEnter(this.state.pointTitle.trim());
    this.state = {
      pointTitle: ''
    };
    event.target.value = '';
  }
}

export default Input;
