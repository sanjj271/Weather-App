const apiKey = "8c4e958d941595aa7b2b22e1e2a6071e"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;
        weatherInfo.innerHTML = `<h2>${name}</h2>
                                        <p>Temperature: ${temperature}°C</p>
                                        <p>Weather: ${description}</p>`;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        weatherInfo.innerHTML = "<p>City not found</p>";
      });
  }
});
