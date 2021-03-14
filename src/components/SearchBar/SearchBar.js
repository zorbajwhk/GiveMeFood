import React from 'react';
import './SearchBar.css';
import config from '../../util/config';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    // this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleLocationTranslation = this.handleLocationTranslation.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);

    this.sortByOptions = {
      'おすすめ順': 'best_match',
      '評価順': 'rating',
      '口コミ順': 'review_count'
    };

  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleLocationTranslation(ogLocation){
    fetch(`https://google-translate20.p.rapidapi.com/translate?text=${ogLocation}&tl=en&sl=ja`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": config['x-rapidapi-key'],
        "x-rapidapi-host": config['x-rapidapi-host']
      }
    })
    .then(response => {
          return response.json();
        }).then(jsonResponse => {
          const translation = jsonResponse.data.translation
          console.log(translation);
          this.setState({location: translation});
          this.handleSearch();
        });
  }


  triggerSearch(event){
    const location = this.state.location
    if(!/^[a-zA-Z ]+$/.test(location)){
      this.handleLocationTranslation(location);
      event.preventDefault();
    }else{
    this.handleSearch();
    event.preventDefault();
    };
  }

  handleSearch(){
      this.props.searchYelp(this.state.location, this.state.sortBy);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="どの辺のお店をお探したいですか？" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.triggerSearch} onKeyDown>レッツゴー!</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;