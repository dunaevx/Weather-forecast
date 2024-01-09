// let Key = ce822fbd27b54e0c8b394753240701

// http://api.weatherapi.com/v1/current.json?key=ce822fbd27b54e0c8b394753240701&q=London

const dashoffsetOne = (100 - 50) / 100 * 307;  // чилсо 50 заменится на переменную
        document.documentElement.style.setProperty('--custom-dashoffset-One', dashoffsetOne);
const dashoffsetSec = (100 - 85) / 100 * 307; // чилсо 85 заменится на переменную
        document.documentElement.style.setProperty('--custom-dashoffset-Sec', dashoffsetSec);

const timeCircleOne = 1000/50;  // чилсо 50 заменится на переменную
const timeCircleSec = 1000/85;  // чилсо 85 заменится на переменную

document.addEventListener('DOMContentLoaded', () => {
  let num1 = document.getElementById('number1');
  let counter1 = 0;

  setInterval(()=>{
    if(counter1 === 50){  // чилсо 50 заменится на переменную
      clearInterval()
    }else{
      counter1 += 1;
      num1.innerHTML = counter1 + "%";
    }

  }, timeCircleOne)

});

document.addEventListener('DOMContentLoaded', () => {
  let num2 = document.getElementById('number2');
  let counter2 = 0;

  setInterval(()=>{
    if(counter2 === 85){  // чилсо 85 заменится на переменную
      clearInterval()
    }else{
      counter2 += 1;
      num2.innerHTML = counter2 + "%";
    }

  }, timeCircleSec)

});