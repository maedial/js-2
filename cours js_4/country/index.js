const countriesContainer = document.getElementById('countriesContainer');
const inputRange = document.getElementById('inputRange');
const rangeValue = document.getElementById('rangeValue');
const btnSort = document.querySelectorAll('.btnSort');

let sortType = 'minToMax';
let countries = [];

//fetch de la data
async function fetchCountries (){
    await fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json()
    .then((data) => countries = data));

    displayCountry();
}

//Affichage
function displayCountry(){
    countriesContainer.innerHTML = countries
        .filter((country) => country.name.official.toLowerCase().includes(inputSearch.value.toLowerCase()))
        .slice(0,inputRange.value)
        .sort((a,b)=>{
            if(sortType === 'minToMax'){
                return a.population - b.population;
            }else if(sortType === 'maxToMin'){
                return b.population - a.population;
            }else if(sortType === 'alpha'){
                return a.name.official.toLowerCase().localeCompare(b.name.official.toLowerCase());
            }
        })
        .map((country) => `
            <div class="card">
                <img src="${country.flags.png}" alt="drapeau ${country.name.official}">
                <h2>${country.name.official}</h2>
                <h3>${country.capital}</h3>
                <p>Population ${country.population.toLocaleString()}</p>
            </div>
        `)
        .join('');
}

//Listeners
window.addEventListener('load', fetchCountries());

inputSearch.addEventListener('input', ()=> fetchCountries());

inputRange.addEventListener('change', (e) => {
    rangeValue.textContent = e.target.value;
    fetchCountries();
});

btnSort.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        sortType = e.target.id;
        fetchCountries();
    })
});