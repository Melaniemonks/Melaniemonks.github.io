const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=41aad7e86df21cc463e072f37de54050";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });