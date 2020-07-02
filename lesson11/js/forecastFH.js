const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiUrlWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeatherFH').textContent = jsObject.weather[0].main;
        document.getElementById('currentTempFH').textContent = jsObject.main.temp;
        document.getElementById('HUMFH').textContent = jsObject.main.humidity;
        document.getElementById('speedFH').textContent = jsObject.wind.speed;
    }); 

const apiUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
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
                            document.getElementById(`tempFH${days+ 1}`).innerHTML = `${forecast.main.temp.toFixed(0)}`;
                            document.getElementById(`dayFH${days+ 1}`).textContent = week[d.getDay()];
                            // document.getElementById(`iconFH${days+ 1}`).setAttribute('src', imgage);
                            document.getElementById(`iconFH${days+ 1}`).setAttribute('alt', desc);
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

var t = document.getElementById('currentTempFH').textContent;
var s = document.getElementById('speedFH').textContent;

if ( t <=50 && s >3 ) {
    var ttp     = Math.pow(s,0.16);
    var formula = 35.74 + 0.6215 * t - 35.75 * ttp + 0.4275 * t * ttp;
    var answer  = formula.toFixed(0);
    document.getElementById('windChillFH').innerHTML      = answer + "&#176;F";
} else {
    document.getElementById('windChillFH').textContent    = "N/A";
}