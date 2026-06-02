import rain from "@meteocons/svg/fill/rain.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import sunUp from "@meteocons/svg/fill/sunrise.svg";
import sunDown from "@meteocons/svg/fill/moonrise.svg";
import uvIndex from "@meteocons/svg/fill/uv-index.svg";
import pressure from "@meteocons/svg/fill/barometer.svg";
import humidity from "@meteocons/svg/fill/humidity.svg";
import gusts from "@meteocons/svg/fill/wind-alert.svg";

const svgObj = {
  rain,
  wind,
  sunUp,
  sunDown,
  uvIndex,
  pressure,
  humidity,
  gusts,
};

function renderDetails(detailsArr, weather) {
  const current = weather.currentConditions;
  const weatherVars = {
    rain: current.precipprob,
    wind: current.windspeed,
    sunUp: current.sunrise.slice(0, 5),
    sunDown: current.sunset.slice(0, 5),
    uvIndex: current.uvindex,
    pressure: current.pressure,
    humidity: current.humidity,
    gusts: current.windgust,
  };
  let cards = [];
  detailsArr.forEach((el) => {
    const elVal = el.dataset.weather;
    if (elVal in svgObj) {
      const img = document.createElement("img");
      img.src = svgObj[elVal];
      img.width = 50;
      img.height = 50;
      img.alt = elVal;
      cards.push(el.querySelector(".weather__list-svg").appendChild(img));
      el.querySelector(".weather__val").innerHTML = `${weatherVars[elVal]}`;
    }
  });
}
//renders current temperatures and conditions
function currentTemperature(el, weather) {
  const tempCurrEl = document.querySelector(".weather__temp");
  const tempMaxEl = document.querySelector(".weather__temp-max");
  const tempMinEl = document.querySelector(".weather__temp-min");
  const conditionsEl = document.querySelector(".weather__condition");
  const tempFeelEl = document.querySelector(".weather__feels");
  const day = weather.currentConditions;
  const tempCurr = day.temp;
  const tempMax = weather.days[0].tempmax;
  console.log(weather.days[0]);
  const tempMin = weather.days[0].tempmin;
  const tempFeel = day.feelslike;
  const conditions = day.conditions;

  tempCurrEl.innerHTML = `${tempCurr}&deg;`;
  tempMinEl.innerHTML = `${tempMin}&deg;`;
  tempMaxEl.innerHTML = `${tempMax}&deg;`;
  conditionsEl.innerHTML = `${conditions}`;
  tempFeelEl.innerHTML = `Feels like: ${tempFeel}&deg;`;

  console.log(el);
  console.log(tempCurr, tempMax, tempMin, tempFeel, conditions);
}

export { renderDetails, currentTemperature };
