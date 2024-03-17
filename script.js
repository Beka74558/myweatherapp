document.addEventListener("DOMContentLoaded", function() {
    fetchWeather();
});

function fetchWeather() {
    const apiKey = '6345fc697478722f2d2d4415b021b7e0';
    const city = 'Worthing';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function updateWeather(data) {
    document.querySelector('.temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.querySelector('.pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
    //document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    //document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
}