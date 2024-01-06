// Проверяем поддержку геолокации в браузере
if (navigator.geolocation) {
    // Запрашиваем геолокацию
    navigator.geolocation.getCurrentPosition(
      // Функция обратного вызова при успешном получении координат
      function(position) {
        console.log(position)
      },
      // Функция обратного вызова при ошибке
      function(error) {
        console.error(`Ошибка получения геолокации: ${error.message}`);
      }
    );
  } else {
    console.log("Геолокация не поддерживается в вашем браузере.");
  }
  