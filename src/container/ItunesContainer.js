import React from 'react'
import ItunesList from '../components/ItunesList'
import ItunesDetail from '../components/ItunesDetail'

class CountryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Itunes: [],
    
    this.handleCountrySelected = this.handleCountrySelected.bind(this)
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({ countries: countries }))
      .catch(err => console.error(err))
  }
}
