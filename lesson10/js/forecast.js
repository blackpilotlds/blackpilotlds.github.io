const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeather').textContent = jsObject.list[0].weather[0].description;
        // document.getElementById('currentTemp').textContent = jsObject.list[6].main.temp.toFixed(0);
        // document.getElementById('HUM').textContent = jsObject.list[0].main.humidity;
        // document.getElementById('speed').textContent = jsObject.list[0].wind.speed;

        // const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        // const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // let days = 0;
        // forecast.forEach(fiveDayForecast => {
        //     let d = new Date(fiveDayForecast.dt_txt);
        //     document.getElementById(`temp${i + 1}`).innerHTML = `${fiveDayForecast.main.temp.toFixed(0)}&deg;F`;
        //     document.getElementById(`day${i + 1}`).textContent = week[d.getDay()];
        //     const imagesrc = `https://openweathermap.org/img/wn/${fiveDayForecast.weather[0].icon}@2x.png`;
        //     const desc = fiveDayForecast.weather[0].description;
        //     document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
        //     document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
        //     days++;
        // });

    });