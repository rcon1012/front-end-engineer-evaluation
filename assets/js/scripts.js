// Set the value to your Dark Sky key
var darkSkyKey = "3c7073ec0325a2012814237b1ce10048";
var proxy = 'https://cors-anywhere.herokuapp.com/';

// Initialize time and location
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date();
document.querySelector("#current-date").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
document.querySelector("#current-time").innerHTML = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

$(document).ready(function() {
    // Initialize forecast with Pittsburgh weather
    getWeatherData(40.4406, 79.9959);

    document.getElementById('search-btn').addEventListener('click', function(event) {
        var coordinates = document.querySelector("#weather-input").value.split(",", 2);
        var lat = coordinates[0].trim();
        var lng = coordinates[1].trim();
        getWeatherData(lat, lng);
    });
});

function getWeatherData(lat, lng) {
    // Mapping of darksky icons to font awesome icons
    var forecastIconMap = [["clear-day", "fa-sun"], ["clear-night", "fa-moon"], ["rain", "fa-cloud-showers-heavy"], 
    ["snow", "fa-cloud-snow"], ["sleet", "fa-cloud-sleet"], ["wind", "fa-wind"], ["fog, fa-fog"], 
    ["cloudy", "fa-clouds"], ["partly-cloudy-day", "fa-cloud-sun"], ["partly-cloudy-night", "fa-clouds-moon"]];

    $.ajax({
        url: proxy + "https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + lng,
        method: "GET",
        success: function(data) {
            // Note: not going to worry about updating the location, date, and time information since we are only working with latitude and longitude 
            // (maybe assume all coordinates are in Pittsburgh area)
            document.querySelector("#current-temp").innerHTML = Math.round(data.currently.temperature) + "&deg";
            document.querySelector("#current-weather").innerHTML = data.currently.summary;
            document.querySelector("#current-summary").innerHTML = data.daily.summary;

            // Update forecast
            var highsLows = $(".high-low-container");
            for(var i = 0; i < 5; i++) {
                $(highsLows[i]).find(".temp-high").text(Math.round(data.daily.data[i].temperatureMax) + String.fromCharCode(176));
                $(highsLows[i]).find(".temp-low").text(Math.round(data.daily.data[i].temperatureMin) + String.fromCharCode(176));
                $(highsLows[i]).find(".fas").attr("class", "fas fa-3x " + forecastIconMap.find(function(element) {
                    return element[0] === data.daily.data[i].icon;
                })[1]);
            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus + ": " + errorThrown);
        }
    });
}