import React, { PureComponent } from 'react';
import './styles/PointInput.css'

class RouteEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  render() {
    return (
      <input className='point-input' type="text" onChange={this.handleChange} onKeyDown={this.keyPress} placeholder={'Название точки маршрута'}/>
    );
  }

  handleChange(event) {
    this.setState({pointTitle: event.target.value.trim()});
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
