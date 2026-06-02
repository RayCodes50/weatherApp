import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData, getWeatherData } from "./weatherState.js";
import {
  createHourly,
  createForecast,
  forecastWeeklyData,
  renderForecastSvg,
} from "./weatherDom.js";
import { renderDetails, currentTemperature } from "./weatherDetailsRender.js";
import { renderMainSvg, renderHourlySvg } from "./renderSvg.js";
let units = "UK";
const weatherApi = await getWeather("london", units);

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

  const forecastCards = createForecast(weatherApi);
  forecastCards.forEach((card) => {
    forecastList.appendChild(card);
  });
}
// render current temperature min and max
const tempEl = document.getElementById("weatherSum");
currentTemperature(tempEl, weatherApi);

// changes arr that forcast is created from, i took different aproach here
// and do not want to rebuild the entire thing
// instead i will update arr with fetched data
forecastWeeklyData(weatherApi);
// render DOM
renderHourly();
renderForecast();
const forecastList = document.querySelector(".weather__forecast-list");

renderForecastSvg(forecastList);

setWeatherData(weatherApi);
// console.log(getWeatherData().currentConditions.datetime);
