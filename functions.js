const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

        for (var i = 0; i < data.paid.length; i++) {

            const card = document.createElement('div');
            card.setAttribute('class', 'card data.paid[i].searchTerms');

            const cardhead = document.createElement('div');
            cardhead.setAttribute('class', 'card-header data.paid[i].searchTerms');


            const cardnav = document.createElement('ul');
            var id = i + data.paid.length + data.paid.length;
            cardnav.setAttribute('class', 'nav nav-tabs card-header-tabs');
            cardnav.setAttribute('id', id);
            cardnav.setAttribute('role', 'tablist');

            const linav = document.createElement('li');
            linav.setAttribute('class', 'nav-item');
            const ades = document.createElement('a');
            var id1 = i;
            var id2 = data.paid.length + i;
            ades.setAttribute('id', id1);
            ades.setAttribute('class', 'nav-link active');
            ades.setAttribute('href', '#description' + id1);
            ades.setAttribute('role', 'tab');
            ades.setAttribute('aria-controls', 'description');
            ades.setAttribute('aria-selected', 'true');
            ades.textContent = ' Home ';

            const linavf = document.createElement('li');
            linavf.setAttribute('class', 'nav-item');
            const adesf = document.createElement('a');
            adesf.setAttribute('id', id2);
            adesf.setAttribute('class', 'nav-link');
            adesf.setAttribute('href', '#details' + id2);
            adesf.setAttribute('role', 'tab');
            adesf.setAttribute('aria-controls', 'history');
            adesf.setAttribute('aria-selected', 'false');
            adesf.textContent = ' Details ';

            container.appendChild(card);
            card.appendChild(cardhead);

            cardhead.appendChild(cardnav);
            cardnav.appendChild(linav);
            linav.appendChild(ades);
            cardnav.appendChild(linavf);
            linavf.appendChild(adesf);

            const cardblock = document.createElement('div');
            cardblock.setAttribute('class', 'card-block');

            const h1 = document.createElement('h4');
            h1.textContent = data.paid[i].confName;
            const tit = data.paid[i].confName;
            h1.setAttribute('class', 'card-title text-center tit');

            const cardtab = document.createElement('div');
            cardtab.setAttribute('class', 'tab-content mt-3');

            const tabact = document.createElement('div');
            tabact.setAttribute('class', 'tab-pane active');
            tabact.setAttribute('id', 'description' + id1);
            tabact.setAttribute('role', 'tabpanel');

            const ps = document.createElement('img');
            var url = correct(data.paid[i].imageURL);
            ps.setAttribute('class', 'card-img');
            ps.setAttribute('src', url);

            const tabinact = document.createElement('div');
            tabinact.setAttribute('class', 'tab-pane');
            tabinact.setAttribute('id', 'details' + id2);
            tabinact.setAttribute('role', 'tabpanel');
            tabinact.setAttribute('aria-labelledby', 'history-tab');


            card.appendChild(cardblock);
            cardblock.appendChild(h1);
            cardblock.appendChild(cardtab);
            cardtab.appendChild(tabinact);
            cardtab.appendChild(tabact);
            tabact.appendChild(ps);



            const tabflex = document.createElement('div');
            tabflex.setAttribute('class', 'd-flex bd-highlight');

            const tabflex1 = document.createElement('div');
            tabflex1.setAttribute('class', 'p-2 flex-fill bd-highlight');


            const datep = document.createElement('p');
            datep.setAttribute('class', 'flex1');
            datep.textContent = "Date";

            const entry = document.createElement('p');
            entry.setAttribute('class', 'flex1');
            entry.textContent = "Entry";

            const place = document.createElement('p');
            place.setAttribute('class', 'flex1');
            place.textContent = "Venue";

            const a = document.createElement('a');
            a.textContent = "link >>";
            a.setAttribute('href', data.paid[i].confUrl);
            a.setAttribute('target', '_blank');
            a.setAttribute('class','links');


            tabinact.appendChild(tabflex);
            tabflex.appendChild(tabflex1);

            tabflex1.appendChild(datep);
            tabflex1.appendChild(entry);
            tabflex1.appendChild(place);
            

            const tabflex2 = document.createElement('div');
            tabflex2.setAttribute('class', 'p-2 flex-fill bd-highlight');

            const dates = document.createElement('p');
            dates.textContent = data.paid[i].confStartDate;
            dates.setAttribute('class', 'flex1 dates');

            const entryp = document.createElement('p');
            entryp.textContent = data.paid[i].entryType;
            entryp.setAttribute('class', 'flex1 entryp');

            const venue = document.createElement('p');
            venue.textContent = data.paid[i].venue;
            venue.setAttribute('class', 'flex1 venue');
            
            const cities = document.createElement('p');
            cities.textContent = data.paid[i].city;
            cities.setAttribute('class','cities');
   

            tabflex.appendChild(tabflex2);
            tabflex2.appendChild(dates);
            tabflex2.appendChild(entryp);
            tabflex2.appendChild(venue);
            tabflex2.appendChild(cities);
            tabflex1.appendChild(a);
            var id3 = "#" + id + " li a";

            $(id3).on('click', function (e) {

                console.log(this)
                $(this).tab('show')

                e.preventDefault()
            })



        }
      


    }

}



// Send request
request.send();


//***********************/
// implementing tabs

function correct(url) {
    var index = url.indexOf("h");
    var str = "";
    for (var i = index; i < url.length; i++) {
        if (url.charAt(i) == "\"") {

        } else {
            str += url.charAt(i);
        }
    }
    return str;
}

//***********************/
// implementing search bar

function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("root");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card h4.tit");
        title1 = cards[i].querySelector(".card p.cities");
        if (title.innerText.toUpperCase().indexOf(filter) > -1 || title1.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}



