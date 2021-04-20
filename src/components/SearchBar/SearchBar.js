import React from 'react';
import './SearchBar.css';
import Recruit from '../../util/Recruit';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      range: '1',
    };

    this.rangeOptions = {
      "300M": "1",
      "500M": "2",
      "1000M": "3",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
    this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
  };

  //Code on Range Settings
  renderRangeOptions() {
    return Object.keys(this.rangeOptions).map(rangeOption => {
      let rangeOptionValue = this.rangeOptions[rangeOption];
      return (<li className={this.getRangeClass(rangeOptionValue)}
                  key={rangeOptionValue}
                  onClick={this.handleRangeChange.bind(this, rangeOptionValue)}>
                {rangeOption}
             </li>);
    });
  }

  getRangeClass(rangeOptions) {
    if (this.state.range === rangeOptions) {
      return 'active';
    }
    return '';
  };
  //Code on Range Settings ^^^

  //Handle changes
  handleRangeChange(rangeOptions) {
    this.setState({range: rangeOptions});
  };

  handleLatitudeChange(latitude){
    this.setState({latitude: latitude});
  };

  handleLongitudeChange(longitude){
    this.setState({longitude: longitude});
  };

  //Handle changes ^^^
  
  //HandleSearch
  handleSearch(){
    navigator.geolocation.getCurrentPosition(response =>{
      this.handleLatitudeChange(response.coords.latitude);
      this.handleLongitudeChange(response.coords.longitude);
      this.props.searchRecruit(this.state.latitude, this.state.longitude, this.state.range);
    })
  };
  //HandleSearch ^^^

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <h2>自身との検索範囲を選んでください</h2>
          <ul>
            {this.renderRangeOptions()}
          </ul>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>検索スタート!</button>
        </div>
      </div>
    );
  }
};

export default SearchBar;