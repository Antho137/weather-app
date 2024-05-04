const apiKey = '302a5d6a373969c85272f0a5a0b2555c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const inputLocal = document.getElementById('input-local');
const searchBtn = document.getElementById('search-btn');
const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');


searchBtn.addEventListener('click', () => {
    const location = inputLocal.value;

	if (location) {
        fetchWeather(location);
	}
    
    inputLocal.value = '';	
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationEl.textContent = data.name;
            temperatureEl.textContent = `${Math.round(data.main.temp)} ºC`;
            descriptionEl.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}