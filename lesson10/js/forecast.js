const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeather').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('currentTemp').textContent = jsObject.list[0].main.temp;
        document.getElementById('HUM').textContent = jsObject.list[0].main.humidity;
        document.getElementById('speed').textContent = jsObject.list[0].wind.speed;

            const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
            // console.log(fiveDayForecast);
            const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                let days = 0;
                    fiveDayForecast.forEach(forecast => {
                        let d = new Date(forecast.dt_txt);
                        let imgage = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
                        let desc = forecast.weather[0].description;
                            document.getElementById(`temp${days+ 1}`).innerHTML = `${forecast.main.temp.toFixed(0)}`;
                            document.getElementById(`day${days+ 1}`).textContent = week[d.getDay()];
                            document.getElementById(`icon${days+ 1}`).setAttribute('src', imgage);
                            document.getElementById(`icon${days+ 1}`).setAttribute('alt', desc);
                days++;
                });
    });