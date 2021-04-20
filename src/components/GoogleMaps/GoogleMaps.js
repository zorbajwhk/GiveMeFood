import React from 'react'
import apiKeys from "../../util/config";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends React.Component{
  constructor(props){
    super(props);

    this.state={
      address: "",
      latitude: "",
      longitude: "",
    }

    this.setLatitude = this.setLatitude.bind(this);
    this.setLongitude = this.setLongitude.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  setLatitude(latitude){
    this.setState({latitude: latitude})
  };

  setLongitude(longitude){
    this.setState({longitude: longitude})
  };

  setAddress(address){
    this.setState({address:address})
  };

  render(){
    this.setAddress(this.props.business.address);
    this.setLatitude(this.props.business.latitude);
    this.setLongitude(this.props.business.longitude);

    

    return(
        <div className="GoogleMaps">
        <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{
        lat: this.state.latitude,
        lng: this.state.longitude,
        }}
        style={{width: "300px", height: "300px"}}
        />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (`${apiKeys.googleMapsAPI}`)
 })(GoogleMaps);