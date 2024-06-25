const apikey = "72f1b829c57877982aa3ed4c91b4257e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchInput = document.querySelector("#nav-section input");
let searchBtn = document.querySelector("#nav-section button");
let photo = document.querySelector("#img-1");

async function checkWeather(city) {
    try {
        let raw = await fetch(`${apiurl}${city}&appid=${apikey}`);
        if (!raw.ok) {
            throw new Error('City not found');
        }
        let ans = await raw.json();

        console.log(ans);

        document.querySelector("#city").innerHTML = ans.name;

        document.querySelector("#temp").innerHTML = Math.round(ans.main.temp) + "°C";

        document.querySelector("#humidity").innerHTML = ans.main.humidity + "%";

        document.querySelector("#wind-speed").innerHTML = ans.wind.speed + " km/h";

        switch (ans.weather[0].main) {
            case "Mist":
                photo.src = "./images-1/mist.png";
                break;
            case "Rain":
                photo.src = "./images-1/rain.png";
                break;
            case "Clear":
                photo.src = "./images-1/clear.png";
                break;
            case "Clouds":
                photo.src = "./images-1/clouds.png";
                break;
            case "Drizzle":
                photo.src = "./images-1/drizzle.png";
                break;
            case "Humidity":
                photo.src = "./images-1/humidity.png";
                break;
            case "Snow":
                photo.src = "./images-1/snow.png";
                break;
            case "Wind":
                photo.src = "./images-1/wind.png";
                break;
            case "Haze":
                photo.src = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=2048x2048&w=is&k=20&c=cCOvNPeMW0rmwOpC9EDhiIo48OaiZ3uld_tEoniRLkE=";
                break;
            default:
                photo.src = "https://tse1.mm.bing.net/th?id=OIP.Da4cW1PHpCx8ju8FsRD_HwHaHz&pid=Api&P=0&h=180";
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert("City not found. Please enter a valid city name.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});


