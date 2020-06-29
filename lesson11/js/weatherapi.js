const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');
        const icon = document.querySelector('img');
        // const icon = document.querySelector('#icon');

        currentTemp.textContent = jsObject.main.temp;

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const desc = jsObject.weather[0].description;

        icon.setAttribute('src', imagesrc);
        icon.setAttribute('alt', desc);

    });        