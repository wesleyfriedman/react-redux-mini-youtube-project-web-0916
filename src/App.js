import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Search from './search';
import fetchVideos from './actions';

class App extends Component {
  // constructor(props) {
  //   super(props)
    // this.fetchVideos = this.fetchVideos.bind(this)
  // }
  componentWillMount() {
    this.props.dispatch(fetchVideos("pizza"))
  }
  render() {
    return (
      <div className="App">
        <Search />
        <div> {this.fetchVideos}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({videos: state.videos})
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
