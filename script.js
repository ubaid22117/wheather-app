document.getElementById('search-btn').addEventListener('click', getWeather);
async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'd908ce321c594b00d237e5f4348b35fd'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.getElementById('temperature-info').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity-info').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-info').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        alert(error.message);
    }
}
