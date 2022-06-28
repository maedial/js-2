//          FETCH   txt, json, api...
//--------------------------------------------------
/* fetch('monlien','objet d options').then((response)=>{
    //gestion de la reponse
}).then('blabla').catch((err)=> console.log(err)) */

/* fetch("data.txt")
    .then((res) => res.text())
    .then((res)=> console.log(res));

    fetch("data.json")
    .then((res) => res.json())
    .then((res)=> console.log(res)); */


//          les objets en paramètre de fetch
//--------------------------------------------------

//préparation de l'objet de paramètre
const myHeaders = new Headers();
const init ={
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache : "default"
};

//Fetch avec objet en paramètre
//fetch("data.json", init).then((res) => console.log(res));

//CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)


//        JSON-SERVER  --->   DB JSON en local
//--------------------------------------------------
//npm init -y
//npm i -g json-server
/* const init2 ={
    method: "POST",
    headers : {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo : "Adrien",
        message : "Yo man !"
    }),
    mode: "cors",
    credentials: "same-origin"
};
const form1 = document.getElementById('myForm');
form1.addEventListener('submit', (e)=>{
    e.preventDefault();
   fetch('http://localhost:3000/posts', init2).then(()=> console.log('data envoyée !'));
   console.log('test');
}) */


//--------------------------------------------------
//        Asynchrone
//--------------------------------------------------

//manière primaire
/* setTimeout(() => {
    
}, 10000);

//Promise
fetch('monlien').then();    //c'est asynchrone

//async/await
async function fetchData (){    //fonction old school
    await fetch('monLien'); //attend que ce await soit exécuté avant de faire la suite.

    await executeFonction();

    console.log('coucou');
}

const fetchData2 = async () => {    //fonction fléchée async
    await fetch('monLien'); //attend que ce await soit exécuté avant de faire la suite.

    await executeFonction();

    console.log('coucou');
} */

//--------------------------------------------------
//        JSON
//--------------------------------------------------

//Méthode .json() => méthode qui s'auto-résout toute seule en renvoyant le corps de la requête.

fetch('data.json')
    .then((res) => res.json())              //transforme le json en objet javascript
    .then((data) => {

    //Stringify convertit l'objet en json
    let settings = JSON.stringify(data);      //stingify convertit l'objet en json

    //Parse -> transforme json en objet js
    //console.log(JSON.parse(settings));
});

//--------------------------------------------------
//        WEB API    (API du navigateur: web, canvas, history, client storage...)
//--------------------------------------------------

    //----------------
    // CLIENT STORAGE > Local storage (différent des coockies)
    //coockies 4ko, local storage par defaut 10Mo sur chrome et firefox
    localStorage.data = 'je stock la data';     //créé une clé data avev la valeur 'je stock la data'

    document.body.textContent = localStorage.data;
    localStorage.removeItem('data');

    // ATTENTION, uniquement des chaines de caractères, pad d'objets dans le local storage, sauf si on convertit en json bien sûr
    const obj = {
        nom : "denis",
        age : 22,
    };

    //on peut stocker l'objet en JSON comme suit:
    localStorage.user = JSON.stringify(obj);

    //on le récupère de cette manière
    //console.log(JSON.parse(localStorage.user));

    //----------------
    //SESSION STORAGE, similaire au local storage mais durée provisoire (dès que la page est fermée)
    sessionStorage.test = "55px";
    sessionStorage.clear();

    //----------------
    //  COOKIES
    //de base un cookie expire à la fin de la session
    document.cookie = "test=Mon premier cookie";

    //bonne pratique
    document.cookie = "pseudo=FS;path=/;max-age=45000;secure;samesite"