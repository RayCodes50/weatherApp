import snow from "@meteocons/svg/fill/snow.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import fog from "@meteocons/svg/fill/fog.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import cloudy from "@meteocons/svg/fill/cloudy.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import partlyCloudyNight from "@meteocons/svg/fill/partly-cloudy-night.svg";
import clearDay from "@meteocons/svg/fill/clear-day.svg";
import clearNight from "@meteocons/svg/fill/clear-night.svg";

const weatherIcons = {
  snow,
  rain,
  fog,
  wind,
  cloudy,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "clear-day": clearDay,
  "clear-night": clearNight,
};

function renderMainSvg(target, weather) {
  //toggles background behind wind
  const weatherConditions = weather.currentConditions.icon;
  if (weatherConditions == "wind") {
    target.classList.add("background__main");
  } else {
    target.classList.remove("background__main");
  }
  const elVal = weatherConditions;
  if (elVal in weatherIcons) {
    const img = document.createElement("img");
    img.src = weatherIcons[elVal];
    img.width = 180;
    img.height = 180;
    img.alt = elVal;
    target.appendChild(img);
  }
  return target;
}
function renderHourlySvg(target, weather, units) {
  console.log(weather);
  const hour = weather.currentConditions.datetime;
  const hourOnlyNum = Number(hour.slice(0, 2));
  console.log(hourOnlyNum);
  const weatherDayHours = weather.days[0].hours;
  target.forEach((el, i) => {
    // renders SVG
    const weatherType = weatherDayHours[hourOnlyNum + 1 + i].icon;
    console.log(weatherType);
    if (weatherType in weatherIcons) {
      if (weatherType === "wind") {
        el.classList.add("background__main");
      } else {
        el.classList.remove("background__main");
      }
      const targetSvg = el.querySelector(".weather__hourly-svg");
      targetSvg.innerHTML = "";
      const img = document.createElement("img");
      img.src = weatherIcons[weatherType];
      img.width = 45;
      img.height = 45;
      img.alt = weatherType;
      targetSvg.appendChild(img);
      // renders time
      const targetTime = el.querySelector(".weather__hourly-time");
      const displayHour = (hourOnlyNum + 1 + i) % 24;
      const hour12 = displayHour % 12 || 12;

      switch (units) {
        case "EU":
          targetTime.innerHTML = `${displayHour}:00`;
          break;
        case "UK":
        case "USA":
          targetTime.innerHTML = `${hour12} ${displayHour < 12 ? "AM" : "PM"}`;
          break;
        default:
          targetTime.innerHTML = `${hourOnlyNum + i}:00`;
      }
    }
  });
}

export { renderMainSvg, renderHourlySvg };
