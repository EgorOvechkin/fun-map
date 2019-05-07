import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

function getAppWithPoints(length) {
  const points = [];

  for (let i = 1; i <= length; i++) {
    points.push({title: `point_${i}`, coordinates: [10 * i + i, 10 * i + i]});
  }

  const wrapper = shallow(<App />);
  wrapper.setState({points});

  return wrapper;
}

function getTitles(points) {
  return points.map(point => point.title).join(', ');
}

function getCoordinates(points) {
  return points.map(point => point.coordinates);
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('moves point', () => {
  const wrapper = getAppWithPoints(3);
  let points = wrapper.state('points');
  let titles = getTitles(points);
  let coordinates = getCoordinates(points);

  expect(points.length).toBe(3);
  expect(titles).toBe('point_1, point_2, point_3');
  expect(coordinates).toMatchObject([[11,11], [22,22], [33,33]]);

  wrapper.instance().movePoint({oldIndex: 0, newIndex: 1});

  points = wrapper.state('points');
  titles = getTitles(points);
  coordinates = getCoordinates(points);
  expect(points.length).toBe(3);
  expect(titles).toBe('point_2, point_1, point_3');
  expect(coordinates).toMatchObject([[22,22], [11,11], [33,33]]);
});

it('sets point coordinates', () => {
  const wrapper = getAppWithPoints(2);
  const newCoordinates = [33,33];
  let points = wrapper.state('points');
  let coordinates = getCoordinates(points);

  expect(coordinates).toMatchObject([[11,11], [22,22]]);

  wrapper.instance().setPointCoordinates(1, newCoordinates);

  points = wrapper.state('points');
  coordinates = getCoordinates(points);
  expect(coordinates).toMatchObject([[11,11], newCoordinates]);
});

it('adds point', () => {
  const wrapper = getAppWithPoints(1);
  const center = [55,55];
  const getCenter = jest.fn().mockReturnValue(center);
  const mapInstance = jest.fn().mockReturnValue({getCenter});


  wrapper.instance().map = mapInstance();
  wrapper.instance().addPoint('new_point');
  const points = wrapper.state('points');
  const coordinates = getCoordinates(points);
  const titles = getTitles(points);

  expect(getCenter.mock.calls.length).toBe(1);
  expect(titles).toBe('point_1, new_point');
  expect(coordinates).toMatchObject([[11,11], center]);
});

it('deletes point', () => {
  const wrapper = getAppWithPoints(2);
  wrapper.instance().deletePoint(1);

  const points = wrapper.state('points');
  const coordinates = getCoordinates(points);
  const titles = getTitles(points);

  expect(titles).toBe('point_1');
  expect(coordinates).toMatchObject([[11,11]]);
});
