function buttonClicked() {
    var country = document.getElementById("serchData").value; //get the searched value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9fd7a449d055dba26a982a3220f32aa2`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("country").innerHTML = "Country: " + data.name;
            document.getElementById("desc").innerHTML = "Weather Description: " + data.weather[0].description;
            document.getElementById("tempK").innerHTML = "Temperature: " + data.main.temp + " Kelvin";
            document.getElementById("tempMin").innerHTML = "Temperature Min: " + data.main.temp_min + " Kelvin";
            document.getElementById("tempMax").innerHTML = "Temperature Max: " + data.main.temp_max + " Kelvin";
            document.getElementById("coord").innerHTML = "Coordinate: " + data.coord.lon + " , " + data.coord.lat;
            document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity;
            document.getElementById("speed").innerHTML = "Wind Speed: " + data.wind.speed;
            var sunriseTimestamp = data.sys.sunrise * 1000;
            var sunsetTimestamp = data.sys.sunset * 1000;
            var sunriseDate = new Date(sunriseTimestamp);
            var sunsetDate = new Date(sunsetTimestamp);
            var sunriseTime = sunriseDate.toLocaleTimeString();
            var sunsetTime = sunsetDate.toLocaleTimeString();
            document.getElementById("sunrise").innerHTML = "Sunrise: " + sunriseTime;
            document.getElementById("sunset").innerHTML = "Sunset: " + sunsetTime;
            
            var celcius = data.main.temp - 273.15;
            document.getElementById("tempC").innerHTML = "Temperature: " + celcius.toFixed(2) + " Celsius";
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}
