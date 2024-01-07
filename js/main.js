// let Key = ce822fbd27b54e0c8b394753240701

// http://api.weatherapi.com/v1/current.json?key=ce822fbd27b54e0c8b394753240701&q=London


document.addEventListener('DOMContentLoaded', () => {
  let num1 = document.getElementById('number1');
  let counter1 = 0;

  setInterval(()=>{
    if(counter1 === 65){
      clearInterval()
    }else{
      counter1 += 1;
      num1.innerHTML = counter1 + "%";
    }

  }, 15)

});

document.addEventListener('DOMContentLoaded', () => {
  let num2 = document.getElementById('number2');
  let counter2 = 0;

  setInterval(()=>{
    if(counter2 === 85){
      clearInterval()
    }else{
      counter2 += 1;
      num2.innerHTML = counter2 + "%";
    }

  }, 12)

});