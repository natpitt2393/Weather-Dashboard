if (!localStorage.getItem("Searched Cities")) {
    localStorage.setItem("Searched Cities", JSON.stringify([]));
}


var pastSearchedEl = document.querySelector("#Past-Searched-Cities");
var listOfSearchedCitiesEl = document.getElementById("List-Of-Searched-Cities");
var currentForecastSearchedCityEl = document.getElementById("Current-Forecast-Searched-City");
var forecastInfoEl = document.querySelector("#Forecast-Info");
var currentTempLiEl = document.querySelector("#current-temp");
var currentWeatherLiEl = document.querySelector("#current-weather");
var currentHumidityLiEl = document.querySelector("#current-humidity");
var currentWindLiEl = document.querySelector("#current-wind");
var currentUVLiEl = document.querySelector("#current-uv");
var currentDayLiEl = document.querySelector("#current-day");


var searchBtnEl = document.querySelector("#search-btn");


console.log("I am working!");

searchBtnEl.addEventListener("click", function () {
    // -- get the input from the input box
    var inputCityEl = document.querySelector("#City-Name");
    var cityValue = inputCityEl.value

    var cities = JSON.parse(localStorage.getItem("Searched Cities"))

    cities.push(cityValue)
    localStorage.setItem("Searched Cities", JSON.stringify(cities))


    listOfSearchedCitiesEl.textContent = JSON.parse(localStorage.getItem("Searched Cities"));

    console.log(cityValue);
    // -- use city to create the url string
    var requestURL = "https://api.openweathermap.org/geo/1.0/direct?appid=674f3c35b53255930ed3d3a7177a78b6&";
    requestURL += "q=" + cityValue;
    console.log(requestURL)
    // -- use the url string to make a call to the coords api w/ city name
    fetch(requestURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            // this is where I do all the crap
            // -- -- once you have lat and lon
            // -- -- set request URL variable // create another url string
            var longitude = data[0].lon;
            var latitude = data[0].lat;
            console.log(longitude);
            console.log(latitude);
            var mainRequestURL = "https://api.openweathermap.org/data/2.5/onecall?appid=674f3c35b53255930ed3d3a7177a78b6&";
            mainRequestURL += "lat=" + latitude + "&lon=" + longitude;
            console.log(mainRequestURL);
            // -- -- create a call to the oneweather api
            // -- -- --  fetch response and data
            fetch(mainRequestURL)
                .then(function (secondResponse) {
                    return secondResponse.json()
                })
                .then(function (secondData) {
                    // got the current weather data added it to the DOM
                    console.log(secondData);
                    console.log(secondData.current.temp);
                    var tempAsKelvin = secondData.current.temp;
                    var tempAsF = Math.floor(9 / 5 * (tempAsKelvin - 273) + 32);
                    currentTempLiEl.textContent = "Temperature: " + tempAsF;
                    //cannot convert weather icon to img
                    currentWeatherLiEl.textContent = "Weather: " + secondData.current.weather[0].main;
                    currentHumidityLiEl.textContent = "Humidity: " + secondData.current.humidity + "%";
                    currentWindLiEl.textContent = "Wind: " + secondData.current.wind_speed + "MPH";
                    currentUVLiEl.textContent = "UVI: " + secondData.current.uvi;
                    currentDayLiEl.textContent = moment().format('MMMM Do YYYY');

                    // for each of the next 5 days in the future weather array
                    for (var i = 0; i < 5; i++) {
                        let apiData = secondData.daily[i+1];
                        let timestamp = moment.unix(apiData.dt).format('dddd l');
                        let dayEl = document.querySelector("#date" + i);
                        dayEl.textContent = timestamp;
                        // var dateEl = $("<li class= 'day'>").text();
                        // getting the tempature & converting to f
                        var tempAsF2 = Math.floor(9 / 5 * (apiData.temp.day - 273) + 32);
                        // reach into the html and grab the temp slot for the day you're on
                        var tempEl = document.querySelector('#temp' + i);
                        // put the data into the tempature element
                        tempEl.textContent = tempAsF2;
                        var weatherEl = document.querySelector("#weather" + i);
                        weatherEl.textContent = apiData.weather[0].main;
                        var humidityEl = document.querySelector("#humidity" + i);
                        humidityEl.textContent = apiData.humidity;
                        var windEl = document.querySelector("#wind" + i);
                        windEl.textContent = apiData.wind_speed;
                        


                    }

                })
            // -- -- --  display current weather for each city
            currentForecastSearchedCityEl.textContent = data[0].name;
            
            


        });




});







