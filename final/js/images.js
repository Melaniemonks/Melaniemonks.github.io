window.addEventListener("DOMContentLoaded", function(){
  document.getElementById("listView").addEventListener("click", function(){
    document.getElementById("cards").classList.remove("grid");
    document.getElementById("cards").classList.add("list");
  });
  document.getElementById("gridView").addEventListener("click", function(){
    document.getElementById("cards").classList.add("grid");
  });
  


});





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
            
            
            


            document.querySelector('#cards').append(card);
        }




    });


