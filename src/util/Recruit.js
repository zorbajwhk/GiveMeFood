import apiKeys from "./config";
const proxyURL = "https://small-art-ab11.zjw-cors-anywhere.workers.dev/?";

const Recruit ={
    
    search(latitude, longitude, range){
        return fetch(`${proxyURL}http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKeys.recruitAPI}&lat=${latitude}&lng=${longitude}&range=${range}&count=40&format=json`)
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            console.log(jsonResponse.results.shop);
            if(jsonResponse.results.shop){
                return jsonResponse.results.shop.map(shops => ({
                    id: shops.id,
                    name: shops.name,
                    slogen: shops.catch,
                    card: shops.card,
                    imgPc: shops.photo.pc.l,
                    imgMobile: shops.photo.mobile.l,
                    city: shops.large_area.name,
                    area: shops.middle_area.name,
                    address: shops.address,
                    station: shops.station_name,
                    access: shops.access,
                    budget: shops.budget.name,
                    openTime: shops.open,
                    dayOff: shops.close,
                    url: shops.urls.pc,
                    googleURL: `https://www.google.com/maps/search/?api=1&query=${shops.name}+${shops.address}`,
                }));
            }})
        .catch(error => console.log(error));
    }

}

export default Recruit;