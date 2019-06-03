import React from 'react';
import PointTitle from '../../components/RouteEditor/PointTitle';
import {shallow, mount} from 'enzyme';

it('renders point title', () => {
  const wrapper = shallow(<PointTitle index={1} title={'Point'} />);
  expect(wrapper).toMatchSnapshot();
});

describe('when delete icon has been clicked', () => {
  it('calls deletePoint', () => {
    const deletePoint = jest.fn();
    const index = 1;
    const wrapper = mount(<PointTitle index={index} title={'Point'} deletePoint={deletePoint}/>);

    wrapper.find('svg.point-delete-button').simulate('click');

    expect(deletePoint.mock.calls.length).toBe(1);
    expect(deletePoint.mock.calls[0][0]).toBe(index);
  });
});
