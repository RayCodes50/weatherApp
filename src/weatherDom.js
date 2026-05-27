const hourlyData = [
  {
    time: "3 AM",
    temp: "12",
    icon: "clear-night",
  },
  {
    time: "4 AM",
    temp: "11",
    icon: "clear-night",
  },
  {
    time: "5 AM",
    temp: "10",
    icon: "clear-night",
  },
  {
    time: "6 AM",
    temp: "9",
    icon: "clear-night",
  },
  {
    time: "7 AM",
    temp: "10",
    icon: "clear-night",
  },
  {
    time: "8 AM",
    temp: "12",
    icon: "clear-night",
  },
  {
    time: "9 AM",
    temp: "15",
    icon: "clear-night",
  },
  {
    time: "10 AM",
    temp: "18",
    icon: "clear-night",
  },
];
const weeklyData = [
  {
    day: "Thu",
    date: "07 May",
    minTemp: "23.5",
    maxTemp: "39",
    icon: "clear-day",
  },
  {
    day: "Fri",
    date: "08 May",
    minTemp: "21",
    maxTemp: "34",
    icon: "partly-cloudy-day",
  },
  {
    day: "Sat",
    date: "09 May",
    minTemp: "19",
    maxTemp: "29",
    icon: "rain",
  },
];
// const weatherDetails = {
//   rainChance: 87,
//   wind: 4,
//   sunrise: "07:00 AM",
//   sunset: "08:02 PM",
//   uvIndex: 10.8,
//   pressure: 1007,
//   humidity: 64,
//   gusts: 7.8,
// };
function createHourly() {
  return hourlyData.map((hour) => {
    const li = document.createElement("li");
    li.classList.add("weather__hourly-item");
    li.innerHTML = `<p class="weather__hourly-time">${hour.time}</p>
                    <p class="weather__hourly-temp">${hour.temp}&deg;</p>

                    <div class="weather__hourly-svg" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 128 128"
                      >
                        <g id="clear-day__clear-day">
                          <g id="clear-day__Sun">
                            <circle
                              id="clear-day__Core"
                              cx="64"
                              cy="64"
                              r="19.5"
                              fill="url(#clear-day__paint0_linear_1802_5186)"
                              stroke="#f8af18"
                            />
                            <g id="clear-day__Rays">
                              <path
                                fill="#f8af18"
                                d="M61 19a3 3 0 1 1 6 0v14a3 3 0 0 1-6 0zM93.699 30.059A3 3 0 1 1 97.94 34.3l-9.9 9.9a3 3 0 1 1-4.242-4.243zM109 61a3 3 0 1 1 0 6H95a3 3 0 1 1 0-6zM97.941 93.699a3 3 0 1 1-4.243 4.242l-9.899-9.9a3 3 0 1 1 4.243-4.242zM61 95a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0zM39.958 83.799a3 3 0 1 1 4.243 4.243l-9.9 9.9a3 3 0 1 1-4.242-4.243zM33 61a3 3 0 1 1 0 6H19a3 3 0 0 1 0-6zM44.201 39.958a3 3 0 1 1-4.243 4.243l-9.9-9.9a3 3 0 1 1 4.243-4.242z"
                              />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="clear-day__paint0_linear_1802_5186"
                            x1="64"
                            x2="64"
                            y1="44"
                            y2="84"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fbbf24" />
                            <stop offset="1" stop-color="#f8af18" />
                          </linearGradient>
                        </defs>
                      </svg>
                      </div>`;
    return li;
  });
}
function createForecast() {
  return weeklyData.map((day) => {
    const li = document.createElement("li");
    li.classList.add("weather__forecast-item");
    li.innerHTML = `<div class="weather__forecast-svg" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 128 128"
                >
                  <g id="clear-day__clear-day">
                    <g id="clear-day__Sun">
                      <circle
                        id="clear-day__Core"
                        cx="64"
                        cy="64"
                        r="19.5"
                        fill="url(#clear-day__paint0_linear_1802_5186)"
                        stroke="#f8af18"
                      />
                      <g id="clear-day__Rays">
                        <path
                          fill="#f8af18"
                          d="M61 19a3 3 0 1 1 6 0v14a3 3 0 0 1-6 0zM93.699 30.059A3 3 0 1 1 97.94 34.3l-9.9 9.9a3 3 0 1 1-4.242-4.243zM109 61a3 3 0 1 1 0 6H95a3 3 0 1 1 0-6zM97.941 93.699a3 3 0 1 1-4.243 4.242l-9.899-9.9a3 3 0 1 1 4.243-4.242zM61 95a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0zM39.958 83.799a3 3 0 1 1 4.243 4.243l-9.9 9.9a3 3 0 1 1-4.242-4.243zM33 61a3 3 0 1 1 0 6H19a3 3 0 0 1 0-6zM44.201 39.958a3 3 0 1 1-4.243 4.243l-9.9-9.9a3 3 0 1 1 4.243-4.242z"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="clear-day__paint0_linear_1802_5186"
                      x1="64"
                      x2="64"
                      y1="44"
                      y2="84"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fbbf24" />
                      <stop offset="1" stop-color="#f8af18" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="weather__forecast-details">
                <p class="weather__forecast-day">${day.day}</p>
                <p class="weather__forecast-date">${day.date}</p>
                <div class="weather__forecast-temps">
                  <div class="weather__forecast-temp">
                    <span class="weather__forecast-value">${day.minTemp}&deg;</span>
                    <span class="weather__forecast-label">min</span>
                  </div>
                  <div class="weather__forecast-temp">
                    <span class="weather__forecast-value">${day.maxTemp}&deg;</span>
                    <span class="weather__forecast-label">max</span>
                  </div>
                </div>
              </div>`;
    return li;
  });
}

export { createHourly, createForecast };
