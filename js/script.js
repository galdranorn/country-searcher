// links to html
const url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = document.querySelector('#countries');
const searchBtn = document.querySelector('#search');
const countryInput = document.querySelector('#country-name');

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
        let liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}