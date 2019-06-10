import React from 'react';
import App from '../components/App';
import {shallow} from 'enzyme';
import {generatePoints} from 'helpers';

function getAppWithPoints(length) {
  const points = generatePoints(length);
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

it('renders the app', () => {
  const wrapper = getAppWithPoints(3);
  expect(wrapper).toMatchSnapshot();
});

it('moves point', () => {
  const wrapper = getAppWithPoints(3);
  let points = wrapper.state('points');
  let titles = getTitles(points);
  let coordinates = getCoordinates(points);

  expect(points.length).toBe(3);
  expect(titles).toBe('Point 1, Point 2, Point 3');
  expect(coordinates).toMatchObject([[11,11], [22,22], [33,33]]);

  wrapper.instance().movePoint({oldIndex: 0, newIndex: 1});

  points = wrapper.state('points');
  titles = getTitles(points);
  coordinates = getCoordinates(points);
  expect(points.length).toBe(3);
  expect(titles).toBe('Point 2, Point 1, Point 3');
  expect(coordinates).toMatchObject([[22,22], [11,11], [33,33]]);
});

it('sets map ref', () => {
  const wrapper = getAppWithPoints(3);
  const ref = {offsetHeight: 100};

  wrapper.instance().setMapRef(ref);
  expect(wrapper.instance().map).toMatchObject(ref);
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
  wrapper.instance().addPoint('New point');
  const points = wrapper.state('points');
  const coordinates = getCoordinates(points);
  const titles = getTitles(points);

  expect(getCenter.mock.calls.length).toBe(1);
  expect(titles).toBe('Point 1, New point');
  expect(coordinates).toMatchObject([[11,11], center]);
});

it('deletes point', () => {
  const wrapper = getAppWithPoints(2);
  wrapper.instance().deletePoint(1);

  const points = wrapper.state('points');
  const coordinates = getCoordinates(points);
  const titles = getTitles(points);

  expect(titles).toBe('Point 1');
  expect(coordinates).toMatchObject([[11,11]]);
});
