import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData } from "./weatherState.js";
import {
  createHourly,
  createForecast,
  forecastWeeklyData,
  renderForecastSvg,
} from "./weatherDom.js";
import { renderDetails, currentTemperature } from "./weatherDetailsRender.js";
import { renderMainSvg, renderHourlySvg } from "./renderSvg.js";
import { initialRender } from "./initialRender.js";

let units = "UK";
let DEFAULT_LOCATION = "manchester";
const content = document.querySelector("#app");

initialRender(content, units);
let weatherApi = await getWeather(DEFAULT_LOCATION, units);

// set value of units
// const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
const unitInputs = document.querySelectorAll('input[name="unit"]');
unitInputs.forEach((input) => {
  input.addEventListener("click", async () => {
    units = input.value;
    console.log(units);
    content.innerHTML = "";
    initialRender(content, units);
    weatherApi = await getWeather(DEFAULT_LOCATION, units);
    loadPage(weatherApi, units);
    //hello world
  });
});
const searchInp = document.querySelector(".search_inp");

searchInp.addEventListener("blur", async () => {
  const location = searchInp.value.trim();
  if (!location) return;
  DEFAULT_LOCATION = location;
  console.log(DEFAULT_LOCATION);
  content.innerHTML = "";
  initialRender(content, units);
  weatherApi = await getWeather(location, units);
  loadPage(weatherApi, units);
});
console.log(DEFAULT_LOCATION);

loadPage(weatherApi);
function loadPage(weatherApi, units) {
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

    const forecastCards = createForecast(units);
    forecastCards.forEach((card) => {
      forecastList.appendChild(card);
    });
  }
  // render current temperature min and max
  const tempEl = document.getElementById("weatherSum");
  currentTemperature(tempEl, weatherApi, units);

  // changes arr that forcast is created from, i took different aproach here
  // and do not want to rebuild the entire thing
  // instead i will update arr with fetched data
  forecastWeeklyData(weatherApi, units);
  // render DOM
  renderHourly();
  renderForecast();
  const forecastList = document.querySelector(".weather__forecast-list");

  renderForecastSvg(forecastList);

  setWeatherData(weatherApi);
  // console.log(getWeatherData().currentConditions.datetime);
}
