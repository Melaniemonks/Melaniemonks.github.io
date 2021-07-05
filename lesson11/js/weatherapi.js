let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
  document.querySelector('#pancake').style.display = 'block';
}


function toggleMenu() {

  document.getElementById("navo").classList.toggle("navigation");
}


/*preston*/

const apiURLF = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c2bccc72d71af873e9f74670c57bda56";
const apiURLWF = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=41aad7e86df21cc463e072f37de54050";


fetch(apiURLWF)
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




fetch(apiURLF)
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
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));


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

      if (towns[i].name === "Preston") {

        let event = document.createElement('section');



        let first = document.createElement('p')
        let second = document.createElement('p')
        let third = document.createElement('p')



        first.textContent = `${towns[i].events[0]} `;
        second.textContent = `${towns[i].events[1]} `;
        third.textContent = `${towns[i].events[2]} `;

        event.append(first);
        event.append(second);
        event.append(third)


        document.querySelector('div.activity').appendChild(event);
      }


    };




  });