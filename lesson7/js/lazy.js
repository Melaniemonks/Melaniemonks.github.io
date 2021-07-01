const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
  threshold:0,
  rootMargin:"0px 0px 50px 0px"


};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
    document.querySelector('#pancake').style.display = 'block';
}

function toggleMenu() {

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


function getNumberOfDays(start, end) {

  //day one
  const one = 1000 * 60 * 60 * 24;
  const time = end - start;
  const days = Math.round(time / one);
  return days;
}


const lastVisit = localStorage.getItem('last') || Date.now();

const daysLastVisit = getNumberOfDays(lastVisit, Date.now());

document.querySelector('.last span').innerHTML = daysLastVisit;

localStorage.setItem('last', Date.now());
