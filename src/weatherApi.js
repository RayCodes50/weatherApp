async function getWeather(location, units) {
  let value;
  let url;
  switch (units) {
    case "EU":
      value = "unitGroup=metric";
      break;
    case "UK":
      value = "unitGroup=uk";
      break;
    case "USA":
      value = "unitGroup=us";
      break;
    default:
      value = "unitGroup=metric";
  }
  url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?${value}&key=53KZA4LWB8GV5REAEKBLN9T59`;
  console.log(url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return await response.json();
}

export { getWeather };
