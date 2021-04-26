import React from 'react';
import './BusinessDetails.css';
import BusinessDetailPageIcons from "../BusinessDetailPageIcons/BusinessDetailPageIcons"

class BusinessDetails extends React.Component{
    render(){
        return(
            <div className="detailPage">
                <div className="detailPage___image">
                    <img className="detailPage___image___media" src={this.props.business.img.imgPc} alt={this.props.business.name} />
                </div>
                <div className="detailPage___info">
                        <div className="detailPage___info___header">
                            <h2>{this.props.business.name}</h2>
                            <h3>{this.props.business.genre} </h3>
                            <h3>{this.props.business.genreDescription}</h3>
                        </div>

                        <BusinessDetailPageIcons features={this.props.business.have}/>
                        
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
                                <dt>店舗メッセージ</dt>
                                {
                                    !this.props.business.shopMemo && 
                                    <dd>よこそう！</dd> 
                                }
                                <dd>{this.props.business.shopMemo}</dd>
                            </dl>
                        </div>
                        
                        <div className="detailPage___info___access">
                            <h2>アクセス</h2>
                            <dl>
                                <dd>{this.props.business.geolocation.access}</dd>
                                <dt>住所</dt>
                                <dd>
                                    <p>{this.props.business.geolocation.address} <br/> <a target="_blank" rel="noopener noreferrer" href={this.props.business.geolocation.googleUrl}>(Google Mapsを開ける)</a></p>
                                </dd>
                            </dl>
                        </div>
                </div>
            </div>
        );
    }
}

export default BusinessDetails;