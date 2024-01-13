// let Key = ce822fbd27b54e0c8b394753240701
window.onload = () =>{
  preloader.classList.add('preloader--hidden')
  proc1();
  proc2();
}
// http://api.weatherapi.com/v1/current.json?key=ce822fbd27b54e0c8b394753240701&q=London
const btnView = document.getElementById('btn_view');
// const apiKey = 'ce822fbd27b54e0c8b394753240701'; 
// const url = 'http:api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}';

btnView.addEventListener('click', (e) => {
  const city = document.getElementById('input-city').value.trim();
  const apiKey = 'ce822fbd27b54e0c8b394753240701';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Обработка полученных данных
      console.log(data.location.name);
      console.log(data.location.country);
      console.log(data.current.cloud);
      let cloud = data.current.cloud;
      console.log(data.current.humidity);
      let humidity = data.current.humidity;
      console.log(data.current.temp_c);
      console.log(data.current.condition.text);
      
      //  данные для отображения информации о погоде на веб-странице
      let nameCity = document.getElementById('name-city');
      let nameCountry = document.getElementById('name-country');
      let cTemp = document.getElementById('c-temp');
      let valueText = document.getElementById('value-text');
      let imgWeather = document.querySelector('.img-weather');

      imgWeather.src = data.current.condition.icon;
      nameCity.textContent = data.location.name;
      nameCountry.textContent = data.location.country;
      cTemp.textContent = Math.floor(data.current.temp_c) + '℃';
      valueText.textContent = data.current.condition.text;

      const dashoffsetOne = (100 - humidity) / 100 * 307; 
      document.documentElement.style.setProperty('--custom-dashoffset-One', dashoffsetOne);
      const timeCircleOne = 1000/humidity; 

      const dashoffsetSec = (100 - cloud) / 100 * 307; 
      document.documentElement.style.setProperty('--custom-dashoffset-Sec', dashoffsetSec);
      const timeCircleSec = 1000/cloud;

      proc1(humidity, timeCircleOne);
      proc2(cloud, timeCircleSec);
    })
    .catch(error => {
      alert('Ошибка при получении данных о погоде:', error);
    });
});



function proc1(humidity, timeCircleOne){

  let num1 = document.getElementById('number1');
  let counter1 = 0;

  let interval1 = setInterval(()=>{
    if(counter1 === humidity){  // чилсо 50 заменится на переменную
      clearInterval()
    }else if(counter1 <= humidity){
      counter1 += 1;
      num1.innerHTML = counter1 + "%";
    }

  }, timeCircleOne)

  let circleOneElement = document.querySelector('.circle1');
  circleOneElement.style.animation = 'anim1 1s linear forwards';

}

function proc2(cloud, timeCircleSec){

  let num2 = document.getElementById('number2');
  let counter2 = 0;

  setInterval(()=>{
    if(counter2 === cloud){  // чилсо 85 заменится на переменную
      clearInterval()
      
    }else if(counter2 <= cloud){
      counter2 += 1;
      num2.innerHTML = counter2 + "%";
    }

  }, timeCircleSec)

  let circleTwoElement = document.querySelector('.circle2');
  circleTwoElement.style.animation = 'anim2 1s linear forwards';
  
};