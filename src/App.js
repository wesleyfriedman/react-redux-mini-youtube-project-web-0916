import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Search from './search';
import List from './list';
import fetchVideos from './actions';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchVideos("pizza"))
  }

  render() {
    return (
      <div className="App">
        <Search />
        <List />
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
