const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiUrlWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeatherSS').textContent = jsObject.weather[0].main;
        document.getElementById('currentTempSS').textContent = jsObject.main.temp;
        document.getElementById('HUMSS').textContent = jsObject.main.humidity;
        document.getElementById('speedSS').textContent = jsObject.wind.speed;
    }); 

const apiUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
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
                            document.getElementById(`tempSS${days+ 1}`).innerHTML = `${forecast.main.temp.toFixed(0)}`;
                            document.getElementById(`daySS${days+ 1}`).textContent = week[d.getDay()];
                            // document.getElementById(`iconSS${days+ 1}`).setAttribute('src', imgage);
                            document.getElementById(`iconSS${days+ 1}`).setAttribute('alt', desc);
                days++;
                });
    });

const apiUrlSoda = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(apiUrlSoda)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('eventS0').textContent = jsObject.towns[5].events[0];
        document.getElementById('eventS1').textContent = jsObject.towns[5].events[1];
        document.getElementById('eventS2').textContent = jsObject.towns[5].events[2];
    });

var t = document.getElementById('currentTempSS').textContent;
var s = document.getElementById('speedSS').textContent;

if ( t <=50 && s >3 ) {
    var ttp     = Math.pow(s,0.16);
    var formula = 35.74 + 0.6215 * t - 35.75 * ttp + 0.4275 * t * ttp;
    var answer  = formula.toFixed(0);
    document.getElementById('windChillSS').innerHTML      = answer + "&#176;F";
} else {
    document.getElementById('windChillSS').textContent    = "N/A";
}    

