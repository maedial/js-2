const countriesContainer = document.getElementById('countriesContainer');
const inputRange = document.getElementById('inputRange');
const rangeValue = document.getElementById('rangeValue');

let countries = [];

async function fetchCountries (){
    await fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json()
    .then((data) => countries = data));

    //console.log(countries);
    displayCountry();
}

fetchCountries();

function displayCountry(){
    console.log(rangeValue.textContent);
    countriesContainer.innerHTML = countries
        .slice(0,inputRange.value)
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

inputRange.addEventListener('change', (e) => {
    rangeValue.textContent = e.target.value
    fetchCountries();
});

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays


//architecture de la fonction d'affichage
/* countriesContainer.innerHTML =  monTableau
    .filter((country) => country.nomdupays.includes(inputSearch))
    .sort((a,b) => {
        if(...){
            return...
        }else if(...){
            return ...
        }
    })
    .slice(0,inputValue)
    .map((country) => `
        <div class= "card>

        </div>
    `) */