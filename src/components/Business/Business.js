import React from 'react';
import BusinessImage from '../BusinessImage/BusinessImage';
import './Business.css';


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <BusinessImage business={this.props.business}/>
          <div className="Business___information">
            <h2>{this.props.business.name}</h2>
            <p>{this.props.business.area}</p>
            <h3>{this.props.business.slogen}</h3>
          </div>
      </div>
    );
  }
}

export default Business;