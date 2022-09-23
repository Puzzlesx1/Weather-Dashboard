//set variables//
var button = document.getElementById("button");
var city = document.getElementById("city");
var tempInput = document.getElementById("temp");
var windInput = document.getElementById("wind");
var humidInput = document.getElementById("humid");
var cityDate = document.getElementById("cityName");
var searches = [];

button.addEventListener('click',getWeather)


function getWeather() {
var cityName = city.value

var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=b4071a725cdccd56d8b70a432022d346`
fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    var lon = data[0].lon
    var lat = data[0].lat
    var url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4071a725cdccd56d8b70a432022d346&units=imperial`
    fetch(url2).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);

        var name = data.name;
        var date = data.dt;
        var temp = data.main.temp;
        var wind = data.wind.speed;



        cityDate.innerHTML += name + " (" + dayjs(date * 1000).format("MM/DD/YYYY") + ") ".append(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>`);
        tempInput.innerHTML += temp +" °F";
        windInput.innerHTML += wind +" mph";
        humidInput.innerHTML += humidity +" %";
    
    })
})
}

localStorage.setItem