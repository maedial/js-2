//--------------------------------------------------
//          OBJETS -> présentation
//--------------------------------------------------
const obj = {
    pseudo : 'from scratch',
    ville : 'Narbonne',
    admin: false,

    direBonjour: function (){
        console.log('Bonjour je suis ' + this.pseudo);
    }
  /*   direBonjour(){
        console.log('Bonjour je suis ' + this.pseudo);
    } */
}

/* console.log(typeof document.body);  //-> retourne object
console.log(typeof obj);            //-> retourne object
let array = [1,2,3];
console.log(typeof array);          //-> retourne object
console.log(typeof null);           //-> retourne object */

//ajouter propriété à un objet
    obj.age = 24;
    obj['admin'] = true;

//supprimer un propriété
    delete obj.ville;

//modifier un propriété
    obj.pseudo = 'adrien';

//checker si propriété existe
//console.log('pseudo' in obj); //-> retourne un booleen

//parcourir un objet
    for (const key in obj){
        //console.log(key + ' : ' + obj[key]);
    }

    //console.log(obj);
    //obj.direBonjour();


//--------------------------------------------------
//          OBJETS -> méthoders natives
//--------------------------------------------------

//obtenir les clés
    const keys = Object.keys(obj);
    //console.log(keys);;

//obtenir les valeurs
    const values = Object.values(obj);
    //console.log(values);

//décomposer objet en tableaux
    const nestedArray = Object.entries(obj);
    //console.log(nestedArray);

//fusionner objets  -> ATTENTION si les 2 objets ont la même clé, le second l'emporte
    const obj2 = {
        taille : '1m80',
        poids : '75kg', 
        pseudo : 'Bébert'
    }

    const fusion = Object.assign({},obj, obj2);
    //console.log(fusion);

// FREEZE -> empêche les modifications à l'objet
    /* const newObj = Object.freeze(obj);
    newObj.pseudo = 'test';                 //pas de modif car freeze
    newObj.addresse = '42 rue du code';     //pas d'ajout car freeze
    console.log(newObj); */

//SEAL -> empêche les ajouts de propriétés mais on permet la modification des propriétés existantes
/*     const newObj2 = Object.seal(obj);
    newObj2.pseudo = 'test';                //modif OK en SEAL
    newObj2.addresse = '42 rue du code';    //pas d'ajout car SEAL
    console.log(newObj2); */



//--------------------------------------------------
//          OBJETS -> constructeurs
//--------------------------------------------------

// Fonction CONSTRUCTOR
    function User(pseudo, ville){   //première lette en majuscule
        this.pseudo = pseudo;
        this.ville = ville;

        this.getCity = function(){
            console.log(this.pseudo + ' habites à ' + this.ville);
        }
    }
    const user1 = new User('bob','Montpellier');
    //console.log(user1);
    const user2 = new User('Teddy', 'Paris');
    //console.log(user2);
    //user2.getCity();

// FACTORY functions
    function UserBis (pseudo, ville){
        return{
            pseudo,
            ville
        }
    }
    const user3 = UserBis('Charles', 'Versailles');
    //console.log(user3);


// CLASSES      -> dans la POO attention les foctions fléchées perdent le scope, il faut utiliser function
    class Utilisateur{
        constructor(pseudo, ville){
            this.pseudo = pseudo;
            this.ville =ville;
        }

        //!!!! fonctions dans l'objet sont 30% plus lentes que si elle était dans le prototype
        sayMyName = function(){
            console.log("Bonjour je suis " + this.pseudo);
        }
    }
    const user4 = new Utilisateur('Samia', 'Lyon');

    //PROTOTYPES -> 30% plus rapide que si était déclarée dans l'objet
    // ajout d'1 prototype
    Utilisateur.prototype.sayCity = function(){         //ne se rajoute pas dans la classe mais dans les prototypes
        console.log("j'habite à " + this.ville);
    }
    //console.log(user4);
    //user4.sayCity();

    //Ajout de plusieurs prototypes d'un coup
    Object.assign(Utilisateur.prototype,{
        method1(){
            //ma méthode
        },
        method2(){
            //mon autre méthode
        }
    })
    //console.log(user4);


//--------------------------------------------------
//          OBJETS -> héritage
//--------------------------------------------------
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    saySomething(text){
        console.log(this.name + " dit j'ai : " + this.age + " ans");
    }
}

class Dog extends Animal {
    run(){
        console.log('Le chien court !');
    }
}

class Cat extends Animal{
    chasser(){
        console.log(this.name +  " a tué un oiseau");
    }
}

const rintintin = new Dog('rintintin', 9);
const matou = new Cat('matou', 9);
console.log(rintintin);
rintintin.saySomething();
matou.chasser();