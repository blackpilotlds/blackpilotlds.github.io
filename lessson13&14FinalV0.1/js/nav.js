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
