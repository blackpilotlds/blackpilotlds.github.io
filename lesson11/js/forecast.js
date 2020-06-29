const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiUrlWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeather').textContent = jsObject.weather[0].main;
        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        document.getElementById('HUM').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;
    }); 

const apiUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiUrlForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

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

const apiUrlFishHaven = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(apiUrlFishHaven)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('eventFH0').textContent = jsObject.towns[1].events[0];
        document.getElementById('eventFH1').textContent = jsObject.towns[1].events[1];
        document.getElementById('eventFH2').textContent = jsObject.towns[1].events[2];
        document.getElementById('eventFH3').textContent = jsObject.towns[1].events[3];
    });

const apiUrlPreston = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(apiUrlPreston)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('eventP0').textContent = jsObject.towns[4].events[0];
        document.getElementById('eventP1').textContent = jsObject.towns[4].events[1];
        document.getElementById('eventP2').textContent = jsObject.towns[4].events[2];
    });

const apiUrlSoda = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(apiUrlSoda)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('eventS0').textContent = jsObject.towns[5].events[0];
        document.getElementById('eventS1').textContent = jsObject.towns[5].events[1];
        document.getElementById('eventS2').textContent = jsObject.towns[5].events[2];
    });


