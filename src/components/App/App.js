import React from 'react';
import './App.css';
import logo from './logo.png';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Recruit from '../../util/Recruit';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchRecruit = this.searchRecruit.bind(this);
  }


  searchRecruit(latitude, longitude, range) {
    Recruit.search(latitude, longitude, range)
    .then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">

        <div className="header">
          <a href="./">
            <img src={logo} alt="GiveMeCoffee Logo"/>
            </a>
        </div>
        
        <div className="body">
          <SearchBar searchRecruit={this.searchRecruit} businesses={this.state.businesses} />
          <BusinessList businesses={this.state.businesses} />
        </div>
      
        <div className="footer">
          <small><a target="_black" rel="noopener noreferrer nofollow" href="https://github.com/zorbajwhk/GiveMeFood">GiveME<span role="img" aria-label="Food">🍽</span></a> v1.0.0 | Made with <span role="img" aria-label="ハート">❤️</span></small>
          <small>Copyright © <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/in/zorbajobswong/">Zorba Jobs Wong</a>, All Rights Reserved.</small>
        </div>

      </div>
    );
  }
}

export default App;