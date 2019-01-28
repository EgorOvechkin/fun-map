import React, { Component } from 'react';

class RouteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: ''
    };
  }

  render() {
    return (
      <input type="text" onChange={event => this.handleChange(event)} onKeyDown={event => this.keyPress(event)} />
    )
  }

  handleChange(event) {
    this.setState({pointTitle: event.target.value.trim()})
  }

  keyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    this.props.addPoint(this.state.pointTitle);
    this.setState({pointTitle: ''});
    event.target.value = '';
  }
}

export default RouteEditor;
