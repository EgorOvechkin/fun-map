import '../App.css';
import Loader from './Loader';
import PointInput from './RouteEditor/PointInput';
import PointList from './RouteEditor/PointList';
import React, { Component } from 'react';
import RouteEditor from './RouteEditor/RouteEditor';
import YandexMap from './Map/YandexMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.setMapRef = this.setMapRef.bind(this);
    this.setPointCoordinates = this.setPointCoordinates.bind(this);
    this.movePoint = this.movePoint.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.state = {
      isMapLoaded: false,
      points: []
    };
  }

  render() {
    const titles = this.state.points.map(point => point.title);

    // debugger

    return (
      <div className="app-container">
        {!false && <Loader message={'Загружаем карту...'}/>}
        <RouteEditor>
          <PointInput addPoint={this.addPoint} />
          <PointList titles={titles} deletePoint={this.deletePoint} onSortEnd={this.movePoint} />
        </RouteEditor>
        <YandexMap points={this.state.points} onPointDrag={this.setPointCoordinates} setMapRef={this.setMapRef} />
      </div>
    );
  }

  movePoint({oldIndex, newIndex}) {
    const array = this.state.points.slice();
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);

    this.setState({points: array});
  }

  setMapRef(mapRef) {
    this.map = mapRef;
    this.setState({isMapLoaded: Boolean(mapRef)});
  }

  setPointCoordinates(index, coordinates) {
    const points = this.state.points.slice();
    points[index].coordinates = coordinates;

    this.setState({points});
  }

  addPoint(title) {
    const point = {title, coordinates: this.map.getCenter()};

    this.setState({points: this.state.points.concat([point])});
  }

  deletePoint(index) {
    const points = this.state.points.slice();

    points.splice(index, 1);
    this.setState({points});
  }
}

export default App;
