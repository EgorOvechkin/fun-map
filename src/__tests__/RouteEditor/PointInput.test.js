import React from 'react';
import ReactDOM from 'react-dom';
import PointInput from '../../components/RouteEditor/PointInput';
import {shallow} from 'enzyme';


describe('onBlur', () => {
  it('changes isValid from false to true', () => {
    const wrapper = shallow(<PointInput />);
    wrapper.simulate('focus');
    wrapper.setState({isValid: false});
    wrapper.simulate('blur');
    expect(wrapper.state('isValid')).toBeTruthy();
  })

  it(`doesn't change isValid when it is true`, () => {
    const wrapper = shallow(<PointInput />)
    wrapper.setState({isValid: true});
    wrapper.simulate('focus')
    wrapper.simulate('blur')
    expect(wrapper.state('isValid')).toBeTruthy();
  })
})

describe('handleChange', () => {
  const wrapper = shallow(<PointInput />);

  it('saves input value when value is not empty', () => {
    const newValue = 'point title';

    wrapper.simulate('change', {target: {value: newValue}});
    expect(wrapper.state('pointTitle')).toBe(newValue);
  })

  describe('when isValid is false and new value is empty string', () => {
    it(`sets isValid as false and pointTitle as ''`, () => {
      const newValue = '   ';
      wrapper.setState({isValid: false, pointTitle: 'old point title'});

      wrapper.simulate('change', {target: {value: newValue}});
      expect(wrapper.state('isValid')).toBeFalsy();
      expect(wrapper.state('pointTitle')).toBe('');
    })
  })

  describe('when isValid is false and new value is not empty string', () => {
    it('sets isValid as true and saves new value', () => {
      const newValue = 'new point title';
      wrapper.setState({isValid: false, pointTitle: 'old point title'});

      wrapper.simulate('change', {target: {value: newValue}});
      expect(wrapper.state('isValid')).toBeTruthy();
      expect(wrapper.state('pointTitle')).toBe(newValue);
    })
  })

  describe('when isValid is true', () => {
    it('saves new value', () => {
      const newValue = 'new point title';
      wrapper.setState({isValid: true, pointTitle: 'old point title'});

      wrapper.simulate('change', {target: {value: newValue}});
      expect(wrapper.state('isValid')).toBeTruthy();
      expect(wrapper.state('pointTitle')).toBe(newValue);
    })
  })
})

describe('keyPress', () => {

})