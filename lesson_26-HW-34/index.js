const container = document.getElementById("container");
const weatherC = document.getElementsByClassName("weatherC");
const listCity = document.getElementsByClassName("list-city");

const date = document.querySelector('.date');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const visibility = document.querySelector('.visibility');
const description  = document.querySelector('.description ');

[...listCity].forEach((city) => {
  city.addEventListener("click", weatherCity);
});


function weatherCity(ev) {

  const getWeather = fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ev.target.innerText}&%C3%A7=metric=units&APPID=5d066958a60d315387d9492393935c19`
  );

  getWeather.then((response) => {
      return response.json();
    }).then((data) => {
      [...weatherC].forEach((el) => el.remove());
      let dateNow = new Date();

      const imgUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      date.innerText = dateNow.toLocaleString();
      city.innerText = ev.target.innerText;
      description.innerText = data.weather[0].description;
      temp.innerHTML = `<img src="${imgUrl}"></img><span class='tempNow'>${Math.round(data.main.temp - 273)}&deg;</span>`;
      windSpeed.innerHTML = `<span>Wind: </span><span class='wind-direction' style='transform: rotate(${data.wind.deg-225}deg)'><span  class="icon-compass"></span></span> <span>${data.wind.speed} m/s</span>`;
      humidity.innerText = `Bологість: ${data.main.humidity}%`;
      pressure.innerText = `Тиск: ${data.main.pressure} hPa`;
      visibility.innerText = `Видимість: ${data.visibility/1000} km`;

      return data;
    });
}
