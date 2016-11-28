import React from 'react'
import fetchVideos from './actions'

class Search extends React.Component {

    constructor(props) {
      super(props)
      // this.handleClick = this.handleClick.bind(this)
      this.state = {searchTerm: ""}
    }

    handleClick(event) {
      // console.log(event.target.value)
      // let searchTerm = event.target.value
      debugger
      event.preventDefault()
      // debugger
      fetchVideos(this.state.searchTerm)
      // debugger
    }

    handleChange() {
      // event.preventDefault()
      // this.setState({searchTerm: event.target.value})
      this.setState({searchTerm: event.target.value}, function () {
        console.log(this.state.value);
      });
      // this.handleClick(event)
      debugger
      // console.log(event.target.value)
    }

    render () {
      return (
        <form >
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <input type="submit" onSubmit={this.handleClick.bind(this)}/>
        </form>
      )
    }

}

module.exports = Search
