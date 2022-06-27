const choix = document.getElementById('choice');
const compte = document.getElementById('countdownDisplay');
const form = document.getElementById('form');
let minutes = 0;
let secondes = 0;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (isNaN(choix.value)){
        alert('La valeur saisie n\'est pas un chiffre valide.');
    }else{
        minutes = choix.value-1;
        secondes = 60;
        compteRebours(minutes,secondes);
        choix.value="";
    }
})

function compteRebours(minutes, secondes){
    setInterval(() => {
        if(secondes===0){ //il faut changer de minutes, s'il en reste
            if(minutes>0){  
                secondes = 59;
                minutes--;
            }else if(minutes === 0){ //cas particulier ou c'est la fin
                console.log('youhou');
                compte.textContent = "Terminé";
            }
        }else{
            secondes--;
        }
        compte.textContent = minutes + ':' + secondes;
    }, 300);
}