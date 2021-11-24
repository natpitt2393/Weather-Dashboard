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



var submitBtn = document.getElementById("search-btn");

console.log("I am working!");

submitBtn.addEventListener("click", fetchWeatherData);



var apiKey = "674f3c35b53255930ed3d3a7177a78b6";
var city;
var cities = [];

function fetchWeatherData(cityName) {
   

    
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?appid=674f3c35b53255930ed3d3a7177a78b6&";
    requestURL += "q=" + cityName;
    
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
           
        })
        .then(function (data) {
            console.log(data);
            console.log(data.coord.lon);
            console.log(data.coord.lat);
            
            

        })
};


// for each fetch of a url (UV Index, 5-day forecast, current weather) you'll need to display the data afterwards
function displayCurrentWeatherData() {

}
//will need to use another api call for the 5 day forecast because this is not included in onecall
//This is how you call the api for 5 day forecast. Remember you have to set the count to 5
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key} cnt-stands for count and you will be setting the variable of count to 5
function display5DayForecast() {

}

function saveCityInfo() {
    //have to use localStorage with set item method
}