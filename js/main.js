const API_KEY = `db2fa62724cfa7054d8877fb555d09cd`;
const searchTemperature = () => {
    const searchInput = document.getElementById('search-city');
    const searchCity = searchInput.value;


    searchInput.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCityTemperature(data))
}
const setSearchText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayCityTemperature = (temperature) => {
    setSearchText('city', temperature.name);
    setSearchText('temp', temperature.main.temp);
    setSearchText('weather', temperature.weather[0].main);
    //Set Weather Icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}