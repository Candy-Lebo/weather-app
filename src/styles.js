/*
let cities = [
  { cityName: "Johannesburg", temperature: 20.5, humidity: 50 },
  { cityName: "Pretoria", temperature: 25.7, humidity: 55 },
  { cityName: "Durban", temperature: 26.5, humidity: 80 },
  { cityName: "Bloemfontein", temperature: 28.3, humidity: 40 },
];
cities.forEach(function (city) {
  city.temperature = Math.round(city.temperature);
});
function roundHumidityToPercentage(city) {
  city.humidity = Math.round(city.humidity) + "%";
}
cities.forEach(roundHumidityToPercentage);
function roundTemperatureToCelsius(city) {
  city.temperature = Math.round(city.temperature) + "°C";
}
cities.forEach(roundTemperatureToCelsius);
*/
function changeCity(event) {
  event.preventDefault();
  let cityName = document.getElementById("searchText").value;
  document.getElementById("header").textContent = cityName;
  localStorage.setItem("cityName", cityName);
  let apiKey = "d16o0bac623209b4t258c7fb95687e4f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.textContent = `${temperature}`;
}

document.querySelector("button").addEventListener("click", changeCity);

/**cities.forEach(function (city) {
  if (city.cityName === cityName) {
    alert(
      `It is currently ${city.temperature} degrees with a humidity of ${city.humidity} in ${city.cityName}`
    );
    found = true;
  }
});

if (!found) {
  alert(
    `Sorry, we don't know the weather for ${cityName}. Try going to https://www.google.com/search?q=weather+${cityName}`
  );
}
**/
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayOfWeek = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");
let currentTime = `${dayOfWeek} ${hours}:${minutes}`;

document.getElementById(`dateAndTime`).innerHTML = currentTime;
