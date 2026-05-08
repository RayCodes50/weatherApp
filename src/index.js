import "./styles.css";

const x = 5;
console.log("Webpack starter running");

import clearDay from "@meteocons/svg/fill/clear-day.svg";

const img = document.createElement("img");
img.src = clearDay;
img.width = 100;
img.height = 100;
img.alt = "Clear day";
document.body.appendChild(img);
