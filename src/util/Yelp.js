import config from './config';

const apiKey = config.yelpAPI; // Insert API key here.

const Yelp = {
  search(location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=${location}&sort_by=${sortBy}&limit=40`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    }).then(response => {
       // console.log(response.json());
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          googleURL: `https://www.google.com/maps/search/?api=1&query=${business.name}+${business.location.address1}%20${business.location.address2}`,
          yelpURL: business.url,
        }));
      }
    });
  }
};

export default Yelp;
