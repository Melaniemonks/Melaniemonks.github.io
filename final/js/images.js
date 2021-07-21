const requestURL = 'https://melaniemonks.github.io/final/file.JSON';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {


            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let contact = document.createElement('p');
            let link = document.createElement('p');
            let img = document.createElement('img');

            h2.innerHTML = `${business[i].name} <span class="purple"></span>`;
            contact.textContent = 'Contact information:' + ' ' + business[i].contact;
            link.textContent = 'Visit us:' + ' ' + business[i].links;
            img.setAttribute('src', "images/"+ business[i].imageurl);
            img.setAttribute ('class', 'image1size')
            img.setAttribute('Alt', `The  portrait of ${business[i].name}!` );
            
            card.append(h2);
            card.append(contact);
            card.append(link);
            card.append(img);

            document.querySelector('div.cards').append(card);
        }




    });