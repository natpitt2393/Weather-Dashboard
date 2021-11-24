// add an input field for city
// add a button to click(submit)
// add event listener to button
// event listener should
var cities = [];


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
                    console.log(secondData);
                    console.log(secondData.current.temp);
                    // var kelvin = 
                    // var convertKelvinToF =  9/5(K - 273) + 32;
                    currentTempLiEl.textContent = "Temperature: " + secondData.current.temp;
                    //cannot convert weather icon to img
                    currentWeatherLiEl.textContent = "Weather: " + secondData.current.weather[0].main;
                    currentHumidityLiEl.textContent = "Humidity: " + secondData.current.humidity;
                    currentWindLiEl.textContent = "Wind: " + secondData.current.wind_speed + "MPH";
                    currentUVLiEl.textContent = "UVI: " + secondData.current.uvi;
                    // currentDayLiEl.textContent = 
                })
            // -- -- --  display current weather for each city
            currentForecastSearchedCityEl.textContent = data[0].name;
            
            


        });









    // when you do this function you'll need to call the following functions: 
    // saveCityInfo();
    // convertKelvinToF();{

});

// --- display current date, current temperature,current wind, current humidity, and current uv index (for uv index you'll need to create a conditional statement showing green, yellow or red depending on whether it is favorable, moderate, or severe)
// then you'll need to display 5 day forecast 
//--- display date for each of the next 5 days, corresponding icon to show weather (will probably have to create conditional statements saying if snowy display this. This also is probably going to be done in tandem with css and awesome fonts. Remember to link awesome font). 5 day temperatures, wind, and humidity 
// save results to local storage-- this will happen when you search for each individual city
// function getCurrentWeatherData(cityName) {

//     // later on in the function you'll need to replace some of the url string with the one you'll need once you get the lat and lon


//     fetch(requestURL)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data);
//         })
// }

function displayCurrentWeatherData() {

}

function getFiveDayForecast() {

}

function displayFiveDayForecast() {

}

function saveCityInfo() {
    //have to use localStorage with set item method
}

// function convertKelvinToF() {

// }

function submitHandler() {


}





//This is how you call the api for 5 day forecast. Remember you have to set the count to 5
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key} cnt-stands for count and you will be setting the variable of count to 5



//this is the data you'll need to display along with the weather icon (have to figure that out)--this is all from the onecall api//will need to use another api call for the 5 day forecast because this is not included in onecall
//data.daily.temp.day
//data.daily.humidity
//data.daily.wind_speed
//data.current.uvi



//for all temperature values you will have to convert from Kelvin to Celsius