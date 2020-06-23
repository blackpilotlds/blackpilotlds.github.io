// const apiURL = 'api.openweathermap.org/data/2.5/weather?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d';
fetch('api.openweathermap.org/data/2.5/weather?id=5604473&appid=756a0fad857ea7b6497b499e83b10f9d')
    .then(response => response.json())
    .then(jsObject => console.log(jsObject));
        // document.getElementById('current-temp').textContent = jsObject.main.temp;
