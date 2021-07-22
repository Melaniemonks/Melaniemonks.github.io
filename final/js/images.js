var elements = document.getElementsByClassName("businesses");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "10%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
    
  }
}






const requestURL = 'https://melaniemonks.github.io/final/file.JSON';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {

            let words = document.createElement('section')
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let contact = document.createElement('p');
            let ul = document.createElement('ul');
            let li = document.createElement('li')
            let a = document.createElement('a')
            let img = document.createElement('img');

            h2.innerHTML = `${business[i].name} <span class="purple"></span>`;
            contact.textContent =  business[i].contact;
            a.textContent = 'Visit us:';
            a.setAttribute('href',  business[i].links);
            card.setAttribute('class', 'businesses')
            img.setAttribute('src', "images/"+ business[i].imageurl);
            img.setAttribute ('class', 'image1size')
            img.setAttribute('Alt', `The  portrait of ${business[i].name}!` );
            

            li.append(a)
            ul.append(li)
            words.append(h2, contact, ul)
            card.append(img);
            card.append(words)
            
            
            


            document.querySelector('div.cards').append(card);
        }




    });