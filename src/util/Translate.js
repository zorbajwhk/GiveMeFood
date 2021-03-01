import config from './config';

const Google = {
  translate (userInput) {
    return fetch("https://google-translate20.p.rapidapi.com/translate", {
      "method": "POST",
      "headers": {
        "content-type": config['content-type'],
        "x-rapidapi-key": config['x-rapidapi-key'],
        "x-rapidapi-host": config['x-rapidapi-host']
      },
      "body": {
        "text": userInput,
        "tl": "en",
        "sl": "ja"
      }
    })
    .then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.translate){
        return jsonResponse.translation;
      }
    })
    .catch(err => {
      console.error(err);
    });
  }
}
  


export default Google;