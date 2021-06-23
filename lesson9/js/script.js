const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston") {
                let info = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let motto = document.createElement('p');
                let year = document.createElement('p');
                let img = document.createElement('img');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                h2.innerHTML = `${towns[i].name} <span class="black"></span>`;
                h3.innerHTML = `${towns[i].motto} <span class="black"></span>`;
                year.innerHTML = `${towns[i].yearFounded} <span class="black"></span>`;
                population.innerHTML = `${towns[i].currentPopulation} <span class="black"></span>`;
                rainfall.innerHTML = `${towns[i].averageRainfall} <span class="black"></span>`;
                img.setAttribute('src', towns[i].photo);
                img.setAttribute('Alt', `The offical portrait of ${towns[i].name}!`);

                info.append(h2);
                info.append(img);
                info.append(h3);
                info.append(motto);
                info.append(year);
                info.append(population);
                info.append(rainfall);

                document.querySelector('div.individual').append(info);
            }
        };




    });