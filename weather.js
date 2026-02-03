let API="a5f297a4380545f59af140928250209"


function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const weather = data.current_weather;
            document.getElementById("weather").innerText =
                `${weather.temperature} °C | ${weather.windspeed} km/h wind`;
        });
}

navigator.geolocation.getCurrentPosition(
    pos => getWeather(pos.coords.latitude, pos.coords.longitude),
    () => alert("allow kr humtiye")
);
