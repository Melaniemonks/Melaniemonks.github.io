
/*pancake*/
let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
    document.querySelector('#pancake').style.display = 'block';
}



/*toggle menu*/
function toggleMenu() {

    document.getElementById("navo").classList.toggle("navigation");
}

function adjustRating(ranged) {
    document.getElementById("rangevalue").innerHTML = ranged;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
};

/* to get the current date footer*/
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



