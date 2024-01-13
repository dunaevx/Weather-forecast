// let Key = ce822fbd27b54e0c8b394753240701

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
      console.log(data.current.humidity);
      console.log(data.current.temp_c);
      console.log(data.current.condition.text);
      
      //  данные для отображения информации о погоде на веб-странице
      let nameCity = document.getElementById('name-city');
      let nameCountry = document.getElementById('name-country');
      let cTemp = document.getElementById('c-temp');
      let valueText = document.getElementById('value-text');

      nameCity.textContent = data.location.name;
      nameCountry.textContent = data.location.country;
      cTemp.textContent = data.current.temp_c + '℃';
      valueText.textContent = data.current.condition.text;
    })
    .catch(error => {
      console.error('Ошибка при получении данных о погоде:', error);
    });
});


let humidity = 15;
let cloud = 85;

const dashoffsetOne = (100 - humidity) / 100 * 307;  // чилсо 50 заменится на переменную
        document.documentElement.style.setProperty('--custom-dashoffset-One', dashoffsetOne);
const dashoffsetSec = (100 - cloud) / 100 * 307; // чилсо 85 заменится на переменную
        document.documentElement.style.setProperty('--custom-dashoffset-Sec', dashoffsetSec);

const timeCircleOne = 1000/humidity;  // чилсо 50 заменится на переменную
const timeCircleSec = 1000/cloud;  // чилсо 85 заменится на переменную

window.onload = () =>{
  preloader.classList.add('preloader--hidden')
  proc1();
  proc2();
}

function proc1(){
  let num1 = document.getElementById('number1');
  let counter1 = 0;

  setInterval(()=>{
    if(counter1 === humidity){  // чилсо 50 заменится на переменную
      clearInterval()
    }else{
      counter1 += 1;
      num1.innerHTML = counter1 + "%";
    }

  }, timeCircleOne)

  let circleOneElement = document.querySelector('.circle1');
  circleOneElement.style.animation = 'anim1 1s linear forwards';

}

function proc2(){
  let num2 = document.getElementById('number2');
  let counter2 = 0;

  setInterval(()=>{
    if(counter2 === cloud){  // чилсо 85 заменится на переменную
      clearInterval()
    }else{
      counter2 += 1;
      num2.innerHTML = counter2 + "%";
    }

  }, timeCircleSec)

  let circleTwoElement = document.querySelector('.circle2');
  circleTwoElement.style.animation = 'anim2 1s linear forwards';
  
};