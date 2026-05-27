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

function renderDetails(detailsArr) {
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
    }
  });
}

export { renderDetails };
