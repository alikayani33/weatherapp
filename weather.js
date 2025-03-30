/*const apiKey="e8bddd0866052e8fe5d49080df6874bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=e8bddd0866052e8fe5d49080df6874bc&units=metric";

async function checkWeather() {

const response = await fetch (apiUrl + apiKey);
let data = await response.json();
console.log(data)
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1);
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;


}
checkWeather();*/
const apiKey = "e8bddd0866052e8fe5d49080df6874bc";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl =   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();
    
    console.log(data);
    
    // Display data on the webpage
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".feelslike").innerHTML = Math.round(data.main.feels_like) + "°c";
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



/*const apiKey = "e8bddd0866052e8fe5d49080df6874bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);  // Append city and API key
    const data = await response.json();
    
    console.log(data);
    
    // Display data on the webpage
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".feelslike").innerHTML = Math.round(data.main.feels_like) + "°C";
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();  // Get the city name and remove surrounding spaces
    if (city) {
        checkWeather(city);  // Fetch weather data for the entered city
    } else {
        alert("Please enter a city name.");
    }
});
*/





