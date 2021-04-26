import React from 'react';
import './ServiceIcons.css';


class ServiceIcons extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            "isClicked": false,
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event){
        const id = this.props.icons.id;
        
        if(this.state.isClicked === false){
            this.setState({isClicked: true});
            this.props.handleFiltersChange(id, "1");
            return;
        }else{
            this.setState({isClicked: false});
            this.props.handleFiltersChange(id, "0");
            return;
        }
    }
    

    render(){
        let icon;
        if(!this.state.isClicked){
            icon = <img id={this.props.icons.id} src={this.props.icons.src} alt={this.props.icons.alt} />
        }else{
            icon = <img className="isClicked" id={this.props.icons.id} src={this.props.icons.src} alt={this.props.icons.alt} />
        }

        return(
            <div className="ServiceIcons" onClick={this.onClickHandler}>
                {icon}
            </div>
        );
    }
}

export default ServiceIcons;