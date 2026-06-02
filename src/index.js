import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData, getWeatherData } from "./weatherState.js";
import { createHourly, createForecast } from "./weatherDom.js";
import { renderDetails, currentTemperature } from "./weatherDetailsRender.js";
import { renderMainSvg, renderHourlySvg } from "./renderSvg.js";
let units = "UK";
const weatherApi = await getWeather("manchester", units);

//renders main svg
const mainSvg = document.querySelector(".weather__header-svg");
renderMainSvg(mainSvg, weatherApi);

// renders current weather details svg
const weatherList = document.querySelectorAll(".weather__list-item");
renderDetails(weatherList, weatherApi);

function renderHourly() {
  const hourlyList = document.querySelector(".weather__hourly-list");
  hourlyList.innerHTML = "";

  const hourlyCards = createHourly();
  hourlyCards.forEach((card) => {
    hourlyList.appendChild(card);
  });

  renderHourlySvg(hourlyCards, weatherApi, units);
}

function renderForecast() {
  const forecastList = document.querySelector(".weather__forecast-list");
  forecastList.innerHTML = "";

  const forecastCards = createForecast();
  forecastCards.forEach((card) => {
    forecastList.appendChild(card);
  });
}
// render current temperature min and max
const tempEl = document.getElementById("weatherSum");
currentTemperature(tempEl, weatherApi);

// render DOM
renderHourly();
renderForecast();

console.log(weatherApi);
console.log(weatherApi.days);
console.log(weatherApi.currentConditions);
setWeatherData(weatherApi);
// console.log(getWeatherData().currentConditions.datetime);
