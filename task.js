let request = require("request");

let apiKey = "4ad9126a1f97c33e5930db5297993398";

console.log(apiKey);

 

let city = "jakarta";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" +  [city] +  "&units=imperial&appid=" +  [apiKey];

console.log(url);

 

request(url, function (err, response, body) {

  if (err) {

    console.log("error:", error);

  } else {

    let weather = JSON.parse(body);

    let message = "Now " + [weather.main.temp] + " degree Fahrenheit in " + [weather.name];

    console.log(message);

  }

});