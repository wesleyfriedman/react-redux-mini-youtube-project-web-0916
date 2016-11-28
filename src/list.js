import React from 'react';
import fetchVideos from './actions';

class List extends React.Component {

    constructor(props) {
      super(props)
      // this.state = {searchTerm: ''}
      // this.loadVideo = this.loadVideo.bind(this)
      // this.handleChange = this.handleChange.bind(this)
    }


  //  loadVideo(searchTerm) {
  //    this.props.dispatch(fetchVideos(searchTerm))
  //  }

    render () {
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vzSfnduxNDg" frameborder="0" allowfullscreen></iframe>
        </div>
      )
    }

}

module.exports = List
