const requestURL = 'https://melaniemonks.github.io/final/file.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {


            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthday = document.createElement('p');
            let location = document.createElement('p');
            let img = document.createElement('img');

            h2.innerHTML = `${prophets[i].name} <span class="purple"> ${prophets[i].lastname}</span>`;
            birthday.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
            location.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('Alt', `The offical portrait of ${prophets[i].name} ${prophets[i].lastname}!` );
            
            card.append(h2);
            card.append(img);
            card.append(location);
            card.append(birthday);

            document.querySelector('div.cards').append(card);
        }




    });