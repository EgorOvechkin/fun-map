import React, { Component } from 'react';
import PointsList from './PointsList';

class RouteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: ''
    };
  }

  render() {
    return (
      <div>
        < input type="text" onChange={event => this.handleChange(event)} onKeyDown={event => this.keyPress(event)} />
        < PointsList titles={this.props.titles} onSortEnd={this.props.movePoint} />
      </div>
    )
  }

  handleChange(event) {
    this.setState({pointTitle: event.target.value.trim()})
  }

  keyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }
    // console.log(this.state.pointTitle.trim())
    this.props.onEnter(this.state.pointTitle);
    this.setState({pointTitle: ''});
    event.target.value = '';
  }
}

export default RouteEditor;
