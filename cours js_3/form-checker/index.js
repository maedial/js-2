const form = document.querySelector('form');
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password, confirmPass;
const progressBar = document.getElementById('progress-bar');

//fonction d'affichage
const errorDisplay = (tag, message, valid) =>{  
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid){
        container.classList.add('error');
        span.textContent = message;
    }else{
        container.classList.remove('error');
        span.textContent = message;
    }
}

const pseudoChecker = (value) => {
    if(value.length > 0 && (value.length < 3 || value.length > 20)){
        errorDisplay('pseudo', 'Le pseudo doit faire entre 3 et 20 caractères', false);
        pseudo = null;
    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay('pseudo', 'Le pseudo ne doit pas contenir de caractères spéciaux', false);
        pseudo = null;
    }else{
        errorDisplay('pseudo', '', true);
        pseudo = value;
    }
}

const emailChecker = (value) => {
    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay('email', 'L\'email est invalide.', false);
        email = null;
    }else{
        errorDisplay('email', '', true);
        email = value;
    }
}

const passwordChecker = (value) => {
    progressBar.classList="";   //réinit de progressbar pour que les classes ne s'empilent pas.
    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay('password','Minimum 8 caractères, une majuscule, un chiffre et un caractère spécial', false);
        progressBar.classList.add('progressRed');
        password=null
    }else if(value.length < 12){
        progressBar.classList.add('progressBlue');
        errorDisplay('password','', true)
        password=value;
    }else{
        progressBar.classList.add('progressGreen');
        errorDisplay('password','', true)
        password=value;
    }
    if(confirmPass) confirmChecker(confirmPass);
}

const confirmChecker = (value) => {
    if(value !== password){
        errorDisplay('confirm','Les mots de passe ne correspondent pas', false);
        confirmPass = null;
    }else{
        errorDisplay('confirm','', true);
        confirmPass = value;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;

            case "email":
                emailChecker(e.target.value);
                break;

            case "password":
                passwordChecker(e.target.value);
                break;

            case "confirm":
                confirmChecker(e.target.value);
                break;
        
            default:
                null;
        }
    })
})

//Envoi du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(pseudo && email && password && confirmPass){
        const data = {pseudo,email,password,}   //exactement identique à la ligne ci-dessous
        // const data = {pseudo: pseudo,email: email,password: password,} 
        console.log(data);      //simule l'envoi de la data

        inputs.forEach((input)=>{input.value=''});
        progressBar.classList= "";

        alert('Inscription validée !');
    }else{
        alert('Veuillez remplir correctement les champs')
    }
})