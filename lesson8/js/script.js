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
	
}