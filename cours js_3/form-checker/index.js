const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password, confirmPass;

//fonction d'affichage
const errorDisplay = (tag, message, valid) =>{  
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-span");

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
    console.log(value);
}

const passwordChecker = (value) => {
    console.log(value);
}

const confirmChecker = (value) => {
    console.log(value);
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