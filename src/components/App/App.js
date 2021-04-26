import React from 'react';
import './App.css';
import logo from './logo.png';
import SearchBar from '../SearchBar/SearchBar';
import Recruit from '../../util/Recruit';
import BusinessList from "../BusinessList/BusinessList";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      noResults: false,
    };

    this.searchRecruit = this.searchRecruit.bind(this);
  }

  searchRecruit(parameters) {
    Recruit.search(parameters)
    .then(businesses => {
      if(!businesses.length){
        this.setState({noResults: true});
        this.setState({businesses: businesses});
        console.log(this.state.businesses)
        console.log(this.state.noResults)
        return
      }

      this.setState({noResults: false});
      this.setState({businesses: businesses});
      console.log(this.state.businesses)
      console.log(this.state.noResults)
    });
  }

  render() {
    return (
      <div className="App">

        <div className="header">
          <a href="./">
            <img src={logo} alt="GiveMeFood Logo"/>
            </a>
        </div>
        
        <div className="body">
          <SearchBar searchRecruit={this.searchRecruit} filters={this.state.filters} businesses={this.state.businesses} />
          <BusinessList businesses={this.state.businesses} noResults={this.state.noResults}/>
        </div>
      
        <div className="footer">
          <small><a target="_black" rel="noopener noreferrer nofollow" href="https://github.com/zorbajwhk/GiveMeFood">GiveME<span role="img" aria-label="Food">🍽</span></a> v2.0.0 | Made with <span role="img" aria-label="ハート">❤️</span></small>
          <small>Copyright © <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/in/zorbajobswong/">Zorba Jobs Wong</a>, All Rights Reserved.</small>
        </div>

      </div>
    );
  }
}

export default App;