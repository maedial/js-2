//--------------------------------
//  import export de fichiers js
//--------------------------------
//isntall parcel:
//1) se placer dans le répertoire de W
//2) npm init -y
//3) npm parcel i -g
//4) dans package.json rajouter la ligne suivante sous 'script' ->  "start": "parcel index.html"
//5) npm start

/* import { addNumber } from "./add.js";

console.log(addNumber(5,17)); */




//--------------------------------
//  TESTS UNITAIREs
//--------------------------------
//1) se positionner dans le répertoire de travail
//2) npm init -y si besoin
//3) npm i -- save-dev jest
//4) dans package.json modifier la ligne suivante sous 'script' ->  "test": "jest --coverage"
//5) créer par exemple pour un fichier add.js, le fichier add.test.js
//6) npm test
//7) aller dans coverage\lcov-report et lancer le index.html avec liveServer pour avoir le rapport en html