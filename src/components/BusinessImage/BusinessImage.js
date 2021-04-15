import React from 'react';
import './BusinessImage.css';
import ShopDetails from '../ShopDetails/ShopDetails';


class BusinessImage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            "isOpen": false,
        }

        this.onClickHandeler = this.onClickHandeler.bind(this);
    }

    onClickHandeler(event){
        if(this.state.isOpen === false){
            this.setState({isOpen: true});
            return;
        }else{
            this.setState({isOpen: false});
            return;
        }
    }

    render(){
        return(
            <div className="BusinessImage">
                <img className="list" src={this.props.business.imgPc} alt={this.props.business.name} onClick={this.onClickHandeler}/>
                
                {this.state.isOpen && (
                    <dialog className="dialog" open>
                    <span className="close" onClick={this.onClickHandeler}>&times;</span>
                    <ShopDetails business={this.props.business} />
                    </dialog>
                )}

            </div>
        );
    }
}

export default BusinessImage;