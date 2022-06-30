//-----------------------------------------------
//----   TRY / CATCH   --------------------------
//-----------------------------------------------

try{
    //block de code, fonction
}catch(err){
    //gestion de l'erreur
}finally{
    //sera joué dans tous les cas
}


//On peut aussi imaginer ce type d'utilisation
function isValidJSON(txt){
    try {
        JSON.parse(txt);
        return true;
    } catch {
        return false;
    }
}
//console.log(isValidJSON(15));


// THROW
function isNumber(num){
    if(isNaN(num)){
        throw 'mon erreur à moi';
    }else{
        console.log("c'est un nombre");
    }
    //Plein de code
}

try {
   // isNumber("2d");
} catch (error) {
    console.log(error);
}


//-----------------------------------------------
//----   STRICT MODE   --------------------------
//-----------------------------------------------
"use strict";   //à mettre en début de document

//par exemple pour déclarer une variable
//voiture = 'toyota';   -> ne marcherais pas
//let voiture = 'toyota'; -> ca ça marcherais


//-----------------------------------------------
//----   STRICT MODE   --------------------------
//-----------------------------------------------