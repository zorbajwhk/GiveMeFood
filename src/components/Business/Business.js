import React from 'react';
import BusinessImage from '../BusinessImage/BusinessImage';
import './Business.css';
import SlogenRadomer from "../../util/SlogenRandomer";


class Business extends React.Component {
  render() {
        //Select a random slogen for stores without slogen inputted.
    let slogen = this.props.business.slogen !== "" ? this.props.business.slogen : SlogenRadomer();

    return (
      <div className="Business">
        <BusinessImage business={this.props.business}/>
          <div className="Business___information">
            <h2>{this.props.business.name}</h2>
            <p>{this.props.business.geolocation.mobileAccess}</p>
            <h3>{slogen}</h3>
          </div>
      </div>
    );
  }
}

export default Business;