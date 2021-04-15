import React from 'react';
import './BusinessImage.css';


class BusinessImage extends React.Component{
    constructor(props){
        super(props);

        this.src = this.props.src;
        this.alt = this.props.alt;
        
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
                <img className="normal" src={this.src} alt={this.alt} onClick={this.onClickHandeler}/>
                
                {this.state.isOpen && (
                    <dialog className="dialog" open>
                    <span className="close" onClick={this.onClickHandeler}>&times;</span>
                    <img className="popup" src={this.src} alt={this.alt} onClick={this.onClickHandeler}/>
                    </dialog>
                )}

            </div>
        );
    }
}

export default BusinessImage;