let inputbox = document.getElementById("inputbox");
let searchbtn = document.getElementById("searchbtn");
let cityname = document.getElementById("cityname");
let temp = document.getElementById("temp");
let condition = document.getElementById("condition");
let windspeed = document.getElementById("windspeed");
let FeelsLike = document.getElementById("FeelsLike");
let Humidity = document.getElementById("Humidity");
let Pressure = document.getElementById("Pressure");
let Visibility = document.getElementById("Visibility");
let UVIndex = document.getElementById("UVIndex");
let weatherimg = document.getElementById("weather_icon");

searchbtn.addEventListener("click", function () {
  let city = inputbox.value;
  cityname.innerHTML = city;

  try {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2269b86370aa82b7d58fb85eafc88c9`
    )
      .then((res) => res.json())
      .then((data) => {
        
        if (data.weather[0].main == "Clear") {
          weatherimg.src = "ClearWeather.jpeg";
        }
        else if (data.weather[0].main == "Smoke") {
          weatherimg.src = "SmokeWeather.png";
        }
        else if (data.weather[0].main == "Haze") {
          weatherimg.src = "HazeWeather.webp";
        }
        else if (data.weather[0].main == "Clouds") {
          weatherimg.src = "Cloudweather.webp";
        }
        else if (data.weather[0].main == "Mist") {
          weatherimg.src = "MistWeather.jpeg";
        }
        
        cityname.innerHTML = data.name + ", " + data.sys.country;
        temp.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        condition.innerHTML = data.weather[0].main;
        windspeed.innerHTML = data.wind.speed + " m/s";
        FeelsLike.innerHTML = Math.round(data.main.feels_like - 273.15) + "°C";
        Humidity.innerHTML = data.main.humidity + " %";
        Pressure.innerHTML = data.main.pressure + " hPa";
        Visibility.innerHTML = data.visibility / 1000 + " km";
        UVIndex.innerHTML = "N/A";

      });
  } catch (err) {
    alert("City not found");
  }
});
