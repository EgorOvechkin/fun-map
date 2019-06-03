import React from 'react';
import SortablePoint from '../../components/RouteEditor/SortablePoint';
import {mount, shallow} from 'enzyme';


it('renders delete icon', () => {
  const wrapper = mount(<SortablePoint index={1} />);
  expect(wrapper.find('svg.point-delete-button').length).toBe(1);
});

it('renders title', () => {
  const title = 'Point';
  const wrapper = shallow(<SortablePoint index={1} title={title} />);
  expect(wrapper.text()).toBe(title);
});

