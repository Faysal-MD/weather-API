const getWeatherData = city => {
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f950fd317613a29fceb09e562f35da0f';
    const url = `${apiBase}?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUi(data))
}
const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('input-city').value;
    getWeatherData(inputCity);
});
const updateUi = data => {
    document.getElementById('city').innerText = data.name || "Location Unknown!";
    document.getElementById('temp').innerText = Math.round(data.main.temp-273.15);
    document.getElementById('weather').innerText = data.weather[0].main;
    document.getElementById('input-city').value = "";
    document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); 
}
getWeatherData('Demra');