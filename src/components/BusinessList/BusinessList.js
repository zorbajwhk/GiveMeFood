import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {/* Show no result text when array is 0 */}
        {
          this.props.noResults == true &&
          <h2>お店情報は見つかりませんでした</h2>
        }
        {/* Map array from Recuit API call */}
        {
          this.props.noResults == false &&
            this.props.businesses.map(business => {
              return <Business business={business} key={business.id} />
            })
        }
      </div>
    );
  }
}

export default BusinessList;