const requestURL = './data/catalog.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const catalog = jsonObject['catalog'];
        for (let i = 0; i < catalog.length; i++) {
            let card = document.createElement('section');
            let h4 = document.createElement('h4');
            let nPerson = document.createElement('p');
            let reservation = document.createElement('p');
            let reservationWalkin = document.createElement('p');
            let image = document.createElement('img');

                h4.textContent = 'Rental Type #' + catalog[i].rentalTypeNumber + ' ' + catalog[i].rentalType;
                nPerson.textContent = 'Max. Persons: ' + catalog[i].numberPersons;
                reservation.textContent = 'Reservation Price : Half Day ' + catalog[i].reservation[0].half + '/ Full Day ' + catalog[i].reservation[0].full;
                reservationWalkin.textContent = 'Walk-In Price : Half Day ' + catalog[i].walkIn[0].half + '/ Full Day ' + catalog[i].walkIn[0].full;
                image.setAttribute('src', catalog[i].imgURL);
                image.setAttribute('alt', catalog[i].rentalType);

                    card.appendChild(h4);
                    card.appendChild(nPerson);
                    card.appendChild(reservation);
                    card.appendChild(reservationWalkin);
                    card.appendChild(image);

                        document.querySelector('div.cards').appendChild(card);
        }
    });