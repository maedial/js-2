//----------------------------------------------------------------------------------------
//Rappel des types de données
//----------------------------------------------------------------------------------------
let string = 'chaine';
let number = 25;
let boolean = true;
let maVariable; //undefined

//Tableaux
let array = ['Bordeaux', 'Toulouse', 'Nantes'];
//console.log(array[0]);      //affiche item 0 -> Bordeaux
//console.log(array[0][3]);   //affiche 4ième lettre de l'item 0 -> d

let array2 = ['Bordeaux', 24, true, [1,2], {nom: "Denis"}];
//console.log(array2[3][1]);      //accéder tableau dans un tableau
//console.log(array2[4].nom);     //accéder objet dans un tableau


let objet = {
    pseudo: 'Denis',
    age:33,
    technos: ['javascrip', 'react', 'nodeJs'], 
    admin: false
}
//console.log(objet.technos[0][1]);
objet.adresse = "22 rue du code";
//console.log(objet);

let data = [
    {
        pseudo: 'Denis',
        age:33,
        technos: ['Javascrip', 'React', 'NodeJs'], 
        admin: false
    },{
        pseudo: 'Samia',
        age:24,
        technos: ['CSS', 'React', 'NodeJs'], 
        admin: false
    },{
        pseudo: 'Nicolas',
        age:42,
        technos: ['Php', 'React', 'NodeJs'], 
        admin: true
    }
]
//console.log(data[2]);

//----------------------------------------------------------------------------------------
//Les Structures de controle (itérations)
//----------------------------------------------------------------------------------------
//While
let w=0; 
while (w < 10) {
    w++;
    //console.log("la valeur de w est de "+ w);
}

//Do while
let d=0; 
do {
    d++;
    //console.log("la valeur de d est de "+ d);
}while (d<5);

//For
for (const user of data){
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;   //les guillemets du 7 permettent d'insérer le tag $ au lieu de concatener avec des +
}

for (i=0; i < data.length; i++){
    //document.body.innerHTML += `<h3>${data[i].pseudo} - ${data[i].age} ans</h2>`
}

//Switch
document.body.addEventListener('click', (e)=>{
    switch (e.target.id) {
        case "javascript":
            document.body.style.background= "yellow";
            break;

        case "php":
            document.body.style.background= "violet";
            break;

        case "python":
            document.body.style.background= "blue";
            break;
    
        default:
            null;
    }
})

//----------------------------------------------------------------------------------------
//Les Méthodes String
//----------------------------------------------------------------------------------------
let string2 = 'Javascript est un langage orienté objet';

//typeof
//console.log(typeof string2); 

//eval
//console.log(eval('1' + 2)); //va concatener pour obtenir 12

//parseInt  -> convertit une chaine en int
//console.log(eval(parseInt('1') + 2)); //va pouvoir additioner et obtenir 3

//isNaN -> retourne booleen et test si n'est pas un nombre

//indexOf
//length
//slice
//split
//toLowerCase()
//toUpperCase()
//replace


//----------------------------------------------------------------------------------------
//Les Méthodes Numbers
//----------------------------------------------------------------------------------------
let number2 = 42.1234;

//toFixed -> #chiffres à garder après la virgule
//console.log(number2.toFixed(2));

//parseInt  -> attention il va couper après la virgule

//parseFloat    -> identique à parseInt mais garde les chiffres après la virgule

//Math  !!c'est un objet
//Math.round(4.5)   -> arrondi au plus proche 5
//Math.floor(4.9)   -> arrondi au plus bas à 4
//Math.ceil(4.1)    -> arrondi au plus haut à 5
//Math.pow(2,7)     -> puissance, ici 2 puissance 7 = 128
//Math.sqrt(16)       -> racine carrée
//Math.random()       -> nombre entre 0 et 1
//console.log(Math.floor(Math.random()*100));   nombre entre 0 et 100



//----------------------------------------------------------------------------------------
//Les Méthodes Tableaux
//----------------------------------------------------------------------------------------
let array3 = ['Javascript', 'Php', 'Python'];
let array4 = ['Ruby', 'Solidity'];

//FUSIONNER 2 tableaux
    //avec concat
    //let newArray= array3.concat(array4);

    //avec spread opérateur
    let newArray= [...array3, ...array4];
    //console.log(newArray);

//rendu text d'un tableau JOIN
//console.log(array3.join(' '));

//SLICE -> Découpe un tableau
    //newArray.slice(1)     -> garde le 1er élement du tableau
    //newArray.slice(2,5)     -> garde les eléments 3 à 5

//indexOf
    //console.log(newArray.indexOf('Ruby'));

//forEach   -> parcourir un tableau
//array3.forEach((languages)=> console.log(languages));

//Every --> retourne true si toutes les valeurs sont identiques à celle passée en parametre
    //console.log(array3.every((language) => language == "Php"));

//Some --> retourne true si au moins une valeur est identique à celle passée en parametre
    //console.log(array3.some((language) => language == "Php"));

//Shift --> enleve le 1er element du tableau
//let shift = array3.shift(); //nouveau tableau sans le 1er element

//Pop --> enleve le dernier element du tableau
//let pop = array3.pop(); //nouveau tableau sans le dernier element

//Splice    --> permet de remplacer/insérer dans un tableau
    //const restArray = array3.splice(1,1,"C++", "Perl"); //à l'index 1, delete 1 item et rajoute les items suivants
    //const restArray = array3.splice(1,1,...array4); //à l'index 1, delete 1 item et rajoute array4

//------------------------
//  IMPORTANT TABLEAU//
//------------------------
//additioner un tableau
let arrayNumber = [4,74,28,12,1];
//console.log(arrayNumber.reduce((x,y)=> x +y));

//ajouter un element à un tableau
//arrayNumber.push(...array4);
//arrayNumber.push(174);

//FILTER -> filtrer
//console.log(arrayNumber.filter((number) => number >10));

//SORT   -> trier
//console.log(arrayNumber.sort((a,b) => b-a));//du plus grand au plus petit
//console.log(arrayNumber.sort((a,b) => a-b));//du plus petit au plus grand

//MAP sur un tableau  -> parcourir
/* document.body.innerHTML = arrayNumber
.map((number)=> `<li>${number}</li>`)
.join(""); */


//------------------------
//  IMPORTANT OBJETS//
//------------------------
document.body.innerHTML = data
    .filter((user) => user.admin === false)
    //.filter((user) => user.age > 30)
    .filter((user) => user.pseudo.includes('i'))
    .sort((a,b)=> b.age - a.age)
    .map((user)=>
    `
        <div class="user-card">
            <h2>${user.pseudo}</h2>
            <p>${user.age} ans</p>
            <p>${user.admin ? 'Modérateur':'Membre'}</p>
        </div>
    `)
    .join("")