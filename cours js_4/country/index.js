const countriesContainer = document.getElementById('countriesContainer');
const inputRange = document.getElementById('inputRange');
const rangeValue = document.getElementById('rangeValue');
const  minToMax = document.getElementById('minToMax');
const  maxToMin = document.getElementById('maxToMin');
const  alpha = document.getElementById('alpha');
let sortMinToMax = false;
let sortMaxToMin = false;
let sortAlpha = true;
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
            if(sortMinToMax){
                return a.population - b.population;
            }else if(sortMaxToMin){
                return b.population - a.population;
            }else{
                return a.name.official.toLowerCase().localeCompare(b.name.official.toLowerCase());
            }
        })
        .map((country) => `
            <div class="card">
                <img src="${country.flags.png}" alt="${country.name.official}">
                <h2>${country.name.official}</h2>
                <h3>${country.capital}</h3>
                <p>Population ${country.population}</p>
            </div>
        `)
        .join('');
}

//gestion du statut du tri
function sortCountries (sortType){
    sortMinToMax = sortType === 'minToMax'?true:false;
    sortMaxToMin = sortType === 'maxToMin'?true:false;
    sortAlpha = sortType === 'alpha'?true:false;
    
    fetchCountries();
}


//Listeners
fetchCountries();
inputSearch.addEventListener('input', ()=> fetchCountries());

inputRange.addEventListener('change', (e) => {
    rangeValue.textContent = e.target.value;
    fetchCountries();
});

minToMax.addEventListener('click', ()=> sortCountries('minToMax'));
maxToMin.addEventListener('click', ()=> sortCountries('maxToMin'));
alpha.addEventListener('click', ()=> sortCountries('alpha'));