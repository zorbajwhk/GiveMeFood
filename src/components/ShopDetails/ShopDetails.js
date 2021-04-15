import React from 'react';
import './ShopDetails.css';


class ShopDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="detailPage">
                <div className="detailPage___wrapper">
                    <div className="detailPage___image">
                    <img src={this.props.business.imgMobile} alt={this.props.business.name} />
                    </div>
                    <div className="detailPage___info">
                        <h2>{this.props.business.name}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopDetails;