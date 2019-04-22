import React from 'react';
// import PointsList from './PointsList';
// import PointInput from './PointInput';
import './styles/index.css';

// class RouteEditor extends Component {
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return this.props.titles.toString() !== nextProps.titles.toString();
//   // }

//   render() {
//     return (
//       <div className='route-editor'>
//       </div>
//     )
//   }
// }

function RouteEditor(props) {
  return (
    <div className='route-editor'>
      {props.children}
    </div>
  )
}

export default RouteEditor;
