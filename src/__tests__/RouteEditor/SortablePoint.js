import React from 'react';
import SortablePoint from '../../components/RouteEditor/SortablePoint';
import {shallow} from 'enzyme';

it('renders point title', () => {
  const wrapper = shallow(<SortablePoint index={1} title={'Point'} />);

  expect(wrapper.html()).toMatch(/<svg.*>.*<\/svg>/);
  expect(wrapper.find('.point-delete-button').length).toBe(1);
});

