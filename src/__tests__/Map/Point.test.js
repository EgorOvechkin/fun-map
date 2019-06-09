import React from 'react';
import Point from '../../components/Map/Point';
import {shallow} from 'enzyme';

let onDragProperty;
const coordinates = [55, 44];
const target = {
  geometry: {
    getCoordinates: jest.fn().mockReturnValue(coordinates)
  }
};
const eventGetter = jest.fn().mockImplementation(arg => {
  if(arg === 'target') { return target; }
});
const event = {
  get: eventGetter
};

const wrapper = shallow(<Point />);
beforeEach(() => {
  onDragProperty = jest.fn();
  wrapper.setProps({onDrag: onDragProperty});
});

it('renders Point', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('onDrag method', () => {
  it('calls onDrag property', () => {
    wrapper.instance().onDrag(event);
    expect(onDragProperty.mock.calls.length).toBe(1);
  });
});

describe('on drag event', () => {
  it('calls onDrag property and sends coordinates', () => {
    wrapper.simulate('drag', event);

    expect(onDragProperty.mock.calls.length).toBe(1);
    expect(onDragProperty.mock.calls[0][0]).toMatchObject(coordinates);
  });
});

