import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData, getWeatherData } from "./weatherState.js";
//import svg this way
// import clearDay from "@meteocons/svg/fill/clear-day.svg";

// const weatherSum = document.getElementById("weatherSum");
// the way to implement svg
let units = "US";
const result = await getWeather("MaNchESTER", units);
console.log(result);
setWeatherData(result);
console.log(getWeatherData().currentConditions);

// // console.log(result.currentConditions);

// const img = document.createElement("img");
// img.src = clearDay;
// img.width = 180;
// img.height = 180;
// img.alt = "Clear day";
// weatherSum.appendChild(img);
// end
