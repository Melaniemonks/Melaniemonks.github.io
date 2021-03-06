let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
    document.querySelector('#pancake').style.display = 'block';
}


function toggleMenu() {

    document.getElementById("navo").classList.toggle("navigation");
}


const apiURLP = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=d58e26da4d9671ca99e0fbab6d30fb96";
const apiURLWP = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=41aad7e86df21cc463e072f37de54050";


fetch(apiURLWP)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    document.querySelector('#condition').textContent = jsObject.weather[0].description;
    document.querySelector('#temp').innerHTML = jsObject.main.temp.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(0);

    let t = jsObject.main.temp;
    let ws = jsObject.wind.speed;
    
    function windChill(tempF, speed) {
      if (tempF <= 58 && speed > 3) {
          let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));
          return f;
      } else {
          let f = "N/A";
          return f;
  
      }
  }

  let value = windChill(t, ws);
  

  document.getElementById('winchill').textContent = value;

  });




fetch(apiURLP)
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
    const fiveDayForecast = jsObject.list.filter( onecall => onecall.dt_txt.includes('18:00:00'));
    

    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
      let d = new Date(x.dt_txt);

      let topp = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
      let desc = x.weather[0].description;


      document.getElementById(`day${day+1}`).textContent = week[d.getDay()];
      document.getElementById(`forecast${day+1}`).innerHTML = x.main.temp;
      
      document.getElementById(`icon${day+1}`).setAttribute('src', topp);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;

    });

  });

  /*events*/

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        console.log(jsonObject);
        const towns = jsonObject['towns'];
        

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Fish Haven") {
                
                let event = document.createElement('section');



                let first = document.createElement('p');
                let second = document.createElement('p');
                let third = document.createElement('p');
                let fourth = document.createElement('p')
                

               
                first.textContent = `${towns[i].events[0]} `;
                second.textContent = `${towns[i].events[1]} `;
                third.textContent = `${towns[i].events[2]} `;
                fourth.textContent = `${towns[i].events[3]} `;
                
                event.append(first);
                event.append(second);
                event.append(third)
                event.append(fourth)


                document.querySelector('div.activity').appendChild(event);
            }

            
        };




    });