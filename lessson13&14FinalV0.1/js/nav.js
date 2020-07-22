/* #region  NAVIGATION BAR */

// navigation
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false); // end for navigation

/* #endregion */

/* #region  WEATHER */

// STARTS WEATHER
const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiUrlWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('aboutWeather').textContent = jsObject.weather[0].main;
        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        document.getElementById('HUM').textContent = jsObject.main.humidity;
    }); // ENDS WEATHER

// FIVE DAY FORECAST STARTS
const apiUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
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
    }); // FIVE DAY FORECAST ENDS

/* #endregion */

/* #region  LAZY LOAD */

// Progressive loading images
// https://mdn.github.io/pwa-examples/js13kpwa/
var imagesToLoad = document.querySelectorAll('img[data-src]');
var loadImages = function (image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = function () {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (items, observer) {
        items.forEach(function (item) {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach(function (img) {
        observer.observe(img);
    });
}
else {
    imagesToLoad.forEach(function (img) {
        loadImages(img);
    });
}

/* #endregion */

/* #region  LAST TIME UPDATED DATE */

document.getElementById("lastUpdated").innerHTML = formatAMPM();

function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear(); /*+' '+hours+':'+minutes+ampm;*/
}

/* #endregion */