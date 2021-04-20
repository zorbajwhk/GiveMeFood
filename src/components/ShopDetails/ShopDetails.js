import React from 'react';
import './ShopDetails.css';
// import GoogleMaps from "../GoogleMaps/GoogleMaps"

class ShopDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="detailPage">
                <div className="detailPage___image">
                    <img className="detailPage___image___media" src={this.props.business.imgPc} alt={this.props.business.name} />
                </div>
                <div className="detailPage___info">
                        <div className="detailPage___info___header">
                            <h2>{this.props.business.name}</h2>
                            <h3>{this.props.business.genre} </h3>
                            <h3>{this.props.business.genreDescription}</h3>
                        </div>
                        
                        <div className="detailPage___info___details">
                            <dl>
                                <dt>総席数</dt>
                                <dd>{this.props.business.capacity}</dd>
                                <dt>営業時間</dt>
                                <dd>{this.props.business.openTime}</dd>
                                <dt>休日情報</dt>
                                <dd>{this.props.business.dayOff}</dd>
                                <dt>ディナー予算</dt>
                                <dd>{this.props.business.budget} (平均予算{this.props.business.budgetAvg}) <br/> {this.props.business.budgetMemo}</dd>
                                <dd></dd>
                                <dt>クレジットカードの利用可否</dt>
                                <dd>{this.props.business.card}</dd>
                                <dd>{this.props.business.shopMemo}</dd>
                            </dl>
                        </div>
                        
                        <div className="detailPage___info___access">
                            <dl>
                                <dt>アクセス</dt>
                                <dd>{this.props.business.access}</dd>
                                <dt>住所</dt>
                                <dd>
                                    <a target="_blank" rel="noopener noreferrer" href={this.props.business.googleUrl}>
                                    <p>{this.props.business.address} <br/>(クリックするとGoogle Mapsを開ける)</p>
                                    </a>
                                </dd>
                            </dl>
                        </div>
                </div>
            </div>
        );
    }
}

export default ShopDetails;