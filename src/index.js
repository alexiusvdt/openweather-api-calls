import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/weather-service.js';

// Business Logic

function getWeather(lat, lon) {
  WeatherService.getWeather(lat, lon)
    .then(function(response) {
      if (response.main) {
        printElements(response, lat, lon);
      } else {
        printError(response, lat, lon);
      }
    });
}

// UI Logic

function printElements(response, lat, lon) {
  document.querySelector('#showResponse').innerText = `Here are the weather details for ${lat}, ${lon}:\n
  The temperature is ${response.main.temp} degrees Fahrenheit, but it feels like ${response.main.feels_like}.\n
  There are winds of ${response.wind.speed} mph with gusts (if available) of up to ${response.wind.gust}.\n
  It is ${response.clouds.all}% cloudy.`;
}

function printError(error, lat, lon) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${lat}, ${lon}:\n 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const lat = document.querySelector('#lat').value;
  const lon = document.querySelector('#lon').value;
  document.querySelector('#lat').value = null;
  document.querySelector('#lon').value = null;
  getWeather(lat, lon);
}

function packageData(event) {
  event.preventDefault();
  //set all the variables to what he needs on export & send file.
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  document.querySelector('form2').addEventListener("submit", packageData);

});