


const apikey = "72f1b829c57877982aa3ed4c91b4257e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchInput = document.querySelector("#nav-section input");
let searchBtn = document.querySelector("#nav-section button");
let photo = document.querySelector("#img-1");


async function checkWeather(city) {

    let raw = await fetch(`${apiurl}${city}&appid=${apikey}`);
    let ans = await raw.json();

    console.log(ans);

    document.querySelector("#city").innerHTML = ans.name;

    document.querySelector("#temp").innerHTML = Math.round(ans.main.temp) + "°C";

    document.querySelector("#humidity").innerHTML = ans.main.humidity + "%";

    document.querySelector("#wind-speed").innerHTML = ans.wind.speed + " km/h";
    
    if(ans.weather[0].main == "Mist"){
        photo.src = "./images-1/mist.png";
    }
    if(ans.weather[0].main == "Rain"){
        photo.src = "./images-1/rain.png";
    }
    if(ans.weather[0].main == "Clear"){
        photo.src = "./images-1/clear.png";
    }
    if(ans.weather[0].main == "Clouds"){
        photo.src = "./images-1/clouds.png";
    }
    if(ans.weather[0].main == "Drizzle"){
        photo.src = "./images-1/drizzle.png";
    }
    if(ans.weather[0].main == "Humidity"){
        photo.src = "./images-1/humidity.png";
    }
    if(ans.weather[0].main == "Rain"){
        photo.src = "./images-1/rain.png";
    }
    if(ans.weather[0].main == "Snow"){
        photo.src = "./images-1/snow.png";
    }
    if(ans.weather[0].main == "Wind"){
        photo.src = "./images-1/wind.png";
    }
    if(ans.weather[0].main == "Haze"){
        photo.src = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=2048x2048&w=is&k=20&c=cCOvNPeMW0rmwOpC9EDhiIo48OaiZ3uld_tEoniRLkE=";
    }
    

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});
