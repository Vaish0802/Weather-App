const apiKey = "e1d229c2e755badbcf12bf75ed231287";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
//after clicking search button it should pass city information to checkWeather
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  //declares asynchronous function
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //fetch is used to make HTTP request to API.
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json(); //response body into javascript object.
    // data is  used to store the parsed JSON data,contains information

    document.querySelector(".city").innerHTML = data.name;
    //innerHTML set or get the HTML content of an element.
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    //Weather conditions
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value); //will take the city name it will pass the city name in the checkWeather which will get added in the API which will give information of particular city
});
