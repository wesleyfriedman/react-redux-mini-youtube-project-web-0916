import React from 'react'
import fetchVideos from './actions'

class Search extends React.Component {

    constructor(props) {
      super(props)
      this.state = {searchTerm: ''}
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({searchTerm: event.target.value})
    }

    handleClick(event) {
      event.preventDefault()
      debugger
      fetchVideos(this.state.searchTerm)
    }

    render () {
      return (
        <form onSubmit={this.handleClick}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      )
    }

}

module.exports = Search
