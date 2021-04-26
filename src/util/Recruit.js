//Grab data from Recruit web API and convert to JSON.
import apiKeys from "./config";
const proxyURL = "https://small-art-ab11.zjw-cors-anywhere.workers.dev/?";

const Recruit ={
    
    search(parameters){
        const filters = `&lat=${parameters.latitude}`+
                         `&lng=${parameters.longitude}`+
                         `&range=${parameters.range}`+
                         `&free_drink=${parameters.AllYouCanDrink}`+
                         `&free_food=${parameters.AllYouCanEat}`+
                         `&barrier_free=${parameters.BarrierFree}`+
                         `&course=${parameters.Course}`+
                         `&card=${parameters.CreditCard}`+
                         `&child=${parameters.Family}`+
                         `&show=${parameters.Live}`+
                         `&lunch=${parameters.Lunch}`+
                         `&midnight_meal=${parameters.Midnight}`+
                         `&parking=${parameters.Parking}`+
                         `&pet=${parameters.Pet}`+
                         `&private_room=${parameters.PrivateRoom}`+
                         `&charter=${parameters.Rent}`+
                         `&wifi=${parameters.Wifi}`

        const fetchURL = `${proxyURL}http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKeys.recruitAPI}${filters}&count=100&format=json`;

        return fetch(fetchURL)
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.results.shop){
                return jsonResponse.results.shop.map(shops => ({
                    id: shops.id,
                    name: shops.name,
                    genre: shops.genre.name,
                    genreDescription: shops.genre.catch,
                    slogen: shops.catch,
                    shopMemo: shops.shop_detail_memo,
                    
                    img:{
                    imgPc: shops.photo.pc.l,
                    imgMobile: shops.photo.mobile.l,
                    },

                    capacity: shops.capacity,
                    openTime: shops.open,
                    dayOff: shops.close,
                    url: shops.urls.pc,
                    budget: shops.budget.name,
                    budgetAvg: shops.budget.average,
                    budgetMemo: shops.budget_memo,

                    have: {
                        card: shops.card,
                        parking: shops.parking,
                        lunch: shops.lunch,
                        midnight: shops.midnight,
                        wifi: shops.wifi,
                        course: shops.course,
                        allYouCanDrink: shops.free_drink,
                        allYouCanEat: shops.free_food,
                        privateRoom: shops.private_room,
                        rent: shops.charter,
                        barrierFree: shops.barrier_free,
                        show: shops.show,
                        petFriendly: shops.pet,
                        childFriendly: shops.child,
                    },

                    geolocation:{
                        latitude: shops.lat,
                        longitude: shops.lng,
                        city: shops.large_area.name,
                        area: shops.middle_area.name,
                        address: shops.address,
                        station: shops.station_name,
                        access: shops.access,
                        mobileAccess: shops.mobile_access,
                        googleUrl: `https://www.google.com/maps/search/?api=1&query=${shops.name}+${shops.address}`,
                    }
                }));
            }
        })
        .catch(error => console.log(error));
    }

}

export default Recruit;