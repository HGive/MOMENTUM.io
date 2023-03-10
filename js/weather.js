const API_KEY = "843625cc0898439bc2844cb16690347a";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            const weather = document.querySelector("#weather span:first-child");
            const temper = document.querySelector("#second");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            temper.innerText = "temp:"+data.main.temp;
            weather.innerText = data.weather[0].main;
        })
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);