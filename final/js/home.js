const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.37&lon=-111.80&units=imperial&appid=0ba754d783ea21b5cabc88d200305678";



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    document.querySelector('#condition').textContent = jsObject.current.weather[0].description;
    document.querySelector('#temp').innerHTML = jsObject.current.temp.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.current.humidity;
   
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.current.weather[0].description;  // note how we reference the weather array
      // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);



    

  });


