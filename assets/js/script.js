// add an input field for city-DONE (in html)
// add a button to click(submit)-DONE (in html) 
// add event listener to button
// event listener should
// -- get the input from the input box
// -- use city to create the url string
// -- use the url string to make a call to the coords api w/ city name
// -- -- once you have lat and lon
// -- -- set request URL variable // create another url string
// -- -- create a call to the oneweather api
// -- -- --  fetch response and data
// -- -- --  display current weather for each city

console.log("I am working!");

$("#search-btn").on("click", fetchWeatherData);

// --- display current date, current temperature,current wind, current humidity, and current uv index (for uv index you'll need to create a conditional statement showing green, yellow or red depending on whether it is favorable, moderate, or severe)
// then you'll need to display 5 day forecast 
//--- display date for each of the next 5 days, corresponding icon to show weather (will probably have to create conditional statements saying if snowy display this. This also is probably going to be done in tandem with css and awesome fonts. Remember to link awesome font). 5 day temperatures, wind, and humidity 
// save results to local storage-- this will happen when you search for each individual city
var mainRequestURL = "https://api.openweathermap.org/data/2.5/onecall?appid=674f3c35b53255930ed3d3a7177a78b6&";
function fetchWeatherData(cityName) {
    var requestURL = "https://api.openweathermap.org/geo/1.0/direct?appid=674f3c35b53255930ed3d3a7177a78b6&";
    // later on in the function you'll need to replace some of the url string with the one you'll need once you get the lat and lon
    console.log(cityName);
    var cityName;
    requestURL += "q=" + cityName;
    console.log(requestURL)
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
           
        })
        .then(function (data) {
            console.log(data);
            
            

        })
};

function displayCurrentWeatherData() {

}

function display5DayForecast() {
    
}


fetchWeatherData("Atlanta");
console.log("I am at this function");