import React from 'react';
import './SearchBar.css';
import ServiceIconsList from "../ServiceIconsList/ServiceIconsList";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      range: '3',
      AllYouCanDrink: '0',
      AllYouCanEat: '0',
      BarrierFree: '0',
      Course: '0',
      CreditCard: '0',
      Family:'0',
      Live:'0',
      Lunch:'0',
      Midnight:'0',
      Parking:'0',
      Pet:'0',
      PrivateRoom:'0',
      Rent:'0',
      Wifi:'0',
    };

    this.rangeOptions = {
      "1000M": "3",
      "2000M": "4",
      "3000M": "5"
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
    this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    // this.componentDidMount = this.componentDidMount(this);
  };

  //Check if Location is workiing
  // componentDidMount() {
  //   if ("geolocation" in navigator) {
  //     console.log("Available");
  //   } else {
  //     console.log("Not Available");
  //   }
  // };

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

  handleFiltersChange(id, state){
    this.setState({[id]:state});
  };

  //Handle changes ^^^
  
  //HandleSearch
  handleSearch(){
    if (!navigator.geolocation){
      console.log("Geolocation is not supported by your browser");
      return;
    };

    navigator.geolocation.getCurrentPosition(response => {
      this.handleLatitudeChange(response.coords.latitude);
      this.handleLongitudeChange(response.coords.longitude);
      this.props.searchRecruit({...this.state});
    });
  };
  //HandleSearch ^^^

  render(){
    // this.componentDidMount;

    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <h2>検索範囲を選んでください</h2>
          <ul>
            {this.renderRangeOptions()}
          </ul>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>検索</button>
        </div>
        <ServiceIconsList handleFiltersChange={this.handleFiltersChange}/>
      </div>
    );
  }
};

export default SearchBar;