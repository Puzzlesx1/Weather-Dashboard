var button = document.getElementById("button");
var city = document.getElementById("city");

button.addEventListener('click',getWeather)

function getWeather() {
var cityName = city.value

var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=a60c04584e3194d68bf2d0b0e4139e9e`
fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    var lon = data[0].lon
    var lat = data[0].lat
    var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=a60c04584e3194d68bf2d0b0e4139e9e`
    fetch(url2).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);

        var temp = data.current.temp;
    
    })
})
}