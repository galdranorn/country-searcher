// links to html
const url = 'https://restcountries.eu/rest/v2/name/';

const countriesList = document.querySelector('#countries');
const searchBtn = document.querySelector('#search');
const countryInput = document.querySelector('#country-name');

searchCountries();

// event listeners
searchBtn.addEventListener('click', searchCountries);
countryInput.addEventListener('keypress', function(e){
    if (e.key==='Enter') {
        searchCountries();
    }
});

// function for searching countries
function searchCountries() {
    let countryName = countryInput.value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

// function for creating html element with results
function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
        let liEl = document.createElement('div');
        liEl.innerHTML = 
        `<div class="country-heading">
            <img src=${item.flag} alt="">
            <h3>${item.name}</h3>
        </div>
        <ul class="properties">
            <li>Native name:</li>
            <li>Language:</li>
            <li>Area:</li>
            <li>Capital:</li>
            <li>Currency:</li>
        </ul>
        <ul class="values">
            <li>${item.nativeName}</li>
            <li>${item.languages[0].name}</li>
            <li>${item.area}</li>
            <li>${item.capital}</li>
            <li>${item.currencies[0].name}</li>
        </ul>`
        //item.name+item.area;
        countriesList.appendChild(liEl);
    });
}