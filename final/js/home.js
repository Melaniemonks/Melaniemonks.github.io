const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.37&lon=-111.80&units=imperial&appid=0ba754d783ea21b5cabc88d200305678";



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    document.querySelector('#condition').textContent = jsObject.current.weather[0].description;
    document.querySelector('#temp').innerHTML = jsObject.current.temp.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.current.humidity;
   
  

   


    

  });



  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //this line using the current-temp ID and adds the main, temperature in the JSON file
    //document.getElementById('current-temp').textContent = jsObject.main.temp;

    //const topp = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    //const desc = jsObject.weather[0].description; // note how we reference the weather array
    //document.getElementsByClassName('topp').textContent = topp; // informational specification only
    //document.getElementById('icon').setAttribute('src', topp); // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;
    

    //Makes the list array 5
    const threeDayForecast = jsObject.daily.filter( forecast => forecast.temp['day']);
    

    console.log(threeDayForecast);

    threeDayForecast.forEach(x => {
      let d = new Date(x.dt * 1000);

      let topp = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
      let desc = x.weather[0].description;


      document.getElementById(`day${day+1}`).innerHTML = week [d.getDay()];
      document.getElementById(`forecast${day+1}`).innerHTML = x.temp.day;
      
      document.getElementById(`icon${day+1}`).setAttribute('src', topp);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;

    });

  });
