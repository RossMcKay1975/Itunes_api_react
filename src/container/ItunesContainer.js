import React, { Component } from 'react'
// import ItunesList from '../components/ItunesList'


class ItunesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Itunes: [],
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url) 
      .then(res => res.json())
      .then(data => this.setState({Itunes: data.feed.entry}))
      
  }

render() {
    if (this.state.Itunes.length === 0) return null 
    return<p>{this.state.Itunes[0].title.label}</p>
}

}

export default ItunesContainer
