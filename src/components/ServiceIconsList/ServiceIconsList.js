import React from "react";
import './ServiceIconsList.css';
import ServiceIcons from '../ServiceIcons/ServiceIcons'
import ServiceIconsArray from "../../util/ServiceIconsArray"

class ServiceIconsList extends React.Component{
    render() {
        return (
          <div className="ServiceIconsList">
            <h3 className="titlebox">絞り込み検索</h3>
            {
                ServiceIconsArray.map(icon =>{
                    return <ServiceIcons key={icon.id} icons={icon} handleFiltersChange={this.props.handleFiltersChange}/>
                })
            }
        </div>
      );
    }
  }

export default ServiceIconsList;