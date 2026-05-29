import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData, getWeatherData } from "./weatherState.js";
import { createHourly, createForecast } from "./weatherDom.js";
import { renderDetails } from "./weatherDetailsRender.js";
import { renderMainSvg, renderHourlySvg } from "./renderSvg.js";
let units = "UK";
const weatherApi = await getWeather("san-francisco", units);

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
renderHourly();
renderForecast();

console.log(weatherApi.days[0]);
console.log(weatherApi.currentConditions);
setWeatherData(weatherApi);
// console.log(getWeatherData().currentConditions.datetime);
