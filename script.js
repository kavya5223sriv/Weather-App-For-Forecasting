const apiKey = "58d30f4bfe7a21c1757a8b71698840eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = cloud.jpg;
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = clear.png;
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = drizzle.png;
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = humidity.png;
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = mist.png;
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = rain.png;
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = wind3.png;
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

// checkWeather();