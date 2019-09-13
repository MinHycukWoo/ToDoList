const weather = document.querySelector(".js-weather")

const API_KEY="60a4d846a72ac1c2c35fb0da5606c7ac";
const COORDS = "coords";

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response){
    //console.log(response);
    //console.log(response.json());
    return response.json();
}).then(function(json){
    //console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`
})
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}



function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords()
}

init()