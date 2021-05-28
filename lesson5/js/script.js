let thedate = new Date();
console.thedate
if (thedate.getDay() == 4) {
    document.querySelector('#pancake').style.display = 'block';
}


let currentYear = "2021";
let yearElement = document.querySelector('#year')
yearElement.textContent = currentYear;

function toggleMenu(){
    
    document.getElementById("navo").classList.toggle("navigation");
}

