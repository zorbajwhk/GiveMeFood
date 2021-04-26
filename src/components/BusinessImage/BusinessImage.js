import React from 'react';
import './BusinessImage.css';
import BusinessDetails from '../BusinessDetails/BusinessDetails';


class BusinessImage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            "isOpen": false,
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event){
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
                <img className="list" src={this.props.business.img.imgPc} alt={this.props.business.name} onClick={this.onClickHandler}/>
                
                {this.state.isOpen && (
                    <dialog className="dialog" open>
                    <span className="close" onClick={this.onClickHandler}>&times;</span>
                    <BusinessDetails business={this.props.business} />
                    </dialog>
                )}

            </div>
        );
    }
}

export default BusinessImage;