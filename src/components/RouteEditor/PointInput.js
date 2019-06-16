import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles/PointInput.css';

class PointInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: '',
      isValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  render() {
    return (
      <input
        className={this.state.isValid ? 'point-input' : 'point-input error'}
        type="text"
        value={this.state.pointTitle}
        onBlur={this.onBlur}
        onChange={this.handleChange}
        onKeyDown={this.keyPress}
        placeholder={'Новая точка маршрута'}
      />
    );
  }

  onBlur() {
    if (!this.state.isValid) {
      this.setState({isValid: true});
    }
  }

  handleChange(event) {
    const newValue = event.target.value;

    this.setState({pointTitle: newValue});

    if (!this.state.isValid) {
      this.setState({isValid: newValue.trim() !== ''});
    }
  }

  keyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    if (!this.state.pointTitle.trim()) {
      this.setState({isValid: false, pointTitle: ''});
      return;
    }

    this.props.addPoint(this.state.pointTitle.trim());
    this.setState({pointTitle: ''});
  }
}

PointInput.propTypes = {
  addPoint: PropTypes.func
};

export default PointInput;
