let weatherData = null;
function setWeatherData(data) {
  weatherData = data;
}
function getWeatherData() {
  return weatherData;
}
export { setWeatherData, getWeatherData };
