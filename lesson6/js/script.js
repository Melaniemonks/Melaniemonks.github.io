let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
    document.querySelector('#pancake').style.display = 'block';
}

function toggleMenu(){
    
    document.getElementById("navo").classList.toggle("navigation");
}

/* to get the current date*/ 
let daysofweek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let date = new Date();
let day = daysofweek[date.getDay()];
let months = month[date.getMonth()];
year = date.getFullYear();
let completeDate = day + ', ' + date.getDate() + ' ' + months + ' ' + year;
document.querySelector('#presentDate').textContent = completeDate;


function windChill(tempF, speed){
    let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed**0.16)) + (0.4275 * tempF * (speed**0.16));
    return f;
}

let value = windChill(3, 1).toFixed(2);

document.getElementById('wind').innerHTML = value + "°";