const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d58e26da4d9671ca99e0fbab6d30fb96";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //this line using the current-temp ID and adds the main, temperature in the JSON file
    document.getElementById('current-temp').textContent = jsObject.main.temp;  

  });

  