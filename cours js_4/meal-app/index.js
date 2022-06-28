const result = document.getElementById('result');
const form = document.querySelector('form');
const input = document.querySelector('input');
let meals = [];

//FETCH
async function fetchMeals (requete){
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + requete)
    .then((res) => res.json())
    .then((data) => meals = data.meals)

    console.log(meals);
}

//RENDU
function mealsDisplay(){
    if(meals === null){
        result.innerHTML = `<h2>Aucun résultat</h2>`;
    }else{
        meals.length = 12;  //limite arbitraire à 12 résultats
        
        result.innerHTML = meals
            .map((meal) => {
                let ingredients = [];

                for (let i =1; i < 21; i++ ){
                    if (meal[`strIngredient${i}`]){
                        let ingredient = meal[`strIngredient${i}`];
                        let measure = meal[`strMeasure${i}`];

                        ingredients.push(`<li>${ingredient} - ${measure}</li>`);
                    }
                }

                //ATTENTION, return doit être sur la même ligne que le guillemet de la ligne 7
                return `  
                    <li class='card'>
                        <h2>${meal.strMeal}</h2>
                        <p>${meal.strArea}</p>
                        <img src=${meal.strMealThumb} alt = "photo ${meal.strMeal}">
                        <ul>${ingredients.join("")}</ul>
                    </li>
                    `
            }
            )
            .join("");
    }    
}

//Event sur formulaire
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    mealsDisplay();
})

//Event sur input pour pré-charger les data
input.addEventListener('input', (e)=>{
    fetchMeals(e.target.value);

})