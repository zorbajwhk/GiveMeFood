import React from 'react';
import './BusinessDetailPageIcons.css';
import ServiceIconsArray from "../../util/ServiceIconsArray"


//Show the icon representing the service, if it's available. 
class BusinessDetailPageIcons extends React.Component{
    render(){
        return(
            <div className="detailPage___icons">
                {
                    this.props.features.allYouCanDrink === "あり" &&
                    <img src={ServiceIconsArray[0].src} alt={ServiceIconsArray[0].alt}/>
                }
                {
                    this.props.features.allYouCanEat === "あり" &&
                    <img src={ServiceIconsArray[1].src} alt={ServiceIconsArray[1].alt}/>
                }
                {
                    this.props.features.barrierFree === "あり" &&
                    <img src={ServiceIconsArray[2].src} alt={ServiceIconsArray[2].alt}/>
                }
                {
                    this.props.features.course === "あり" &&
                    <img src={ServiceIconsArray[3].src} alt={ServiceIconsArray[3].alt}/>
                }
                {
                    this.props.features.card === "利用可" &&
                    <img src={ServiceIconsArray[4].src} alt={ServiceIconsArray[4].alt}/>
                }
                {
                    this.props.features.childFriendly === "お子様連れ歓迎" &&
                    <img src={ServiceIconsArray[5].src} alt={ServiceIconsArray[5].alt}/>
                }
                {
                    this.props.features.show === "あり" &&
                    <img src={ServiceIconsArray[6].src} alt={ServiceIconsArray[6].alt}/>
                }
                {
                    this.props.features.lunch === "あり" &&
                    <img src={ServiceIconsArray[7].src} alt={ServiceIconsArray[7].alt}/>
                }
                {
                    this.props.features.midnight === "営業している" &&
                    <img src={ServiceIconsArray[8].src} alt={ServiceIconsArray[8].alt}/>
                }                
                {
                    this.props.features.parking === "あり" &&
                    <img src={ServiceIconsArray[9].src} alt={ServiceIconsArray[9].alt}/>
                }
                {
                    this.props.features.petFriendly === "可" &&
                    <img src={ServiceIconsArray[10].src} alt={ServiceIconsArray[10].alt}/>
                }
                {
                    this.props.features.privateRoom !== "なし" &&
                    <img src={ServiceIconsArray[11].src} alt={ServiceIconsArray[11].alt}/>
                }
                {
                    this.props.features.rent !== "なし" &&
                    <img src={ServiceIconsArray[12].src} alt={ServiceIconsArray[12].alt}/>
                }
                {
                    this.props.features.wifi === "あり" &&
                    <img src={ServiceIconsArray[13].src} alt={ServiceIconsArray[13].alt}/>
                }
            </div>
        );
    }
}

export default BusinessDetailPageIcons;