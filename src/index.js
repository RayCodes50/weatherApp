import "./styles.css";
import { getWeather } from "./weatherApi.js";
import { setWeatherData, getWeatherData } from "./weatherState.js";

// the way to implement svg
import clearDay from "@meteocons/svg/fill/clear-day.svg";
let units = "US";
const result = await getWeather("MaNchESTER", units);
console.log(result);
setWeatherData(result);
console.log(getWeatherData().currentConditions);

// console.log(result.currentConditions);

const img = document.createElement("img");
img.src = clearDay;
img.width = 100;
img.height = 100;
img.alt = "Clear day";
document.body.appendChild(img);
// end
