// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
const boutonMenu = document.getElementById('btn');
const sideBar = document.getElementById('side-bar');
const page = document.querySelector(".content");
let menuOuvert = false;
console.log(page);

boutonMenu.addEventListener('click', ()=>{
    if(menuOuvert) {
        sideBar.style.left = "0px";
        menuOuvert = !menuOuvert;
    }else{
        sideBar.style.left = "-230px";
        menuOuvert = !menuOuvert;
    }
})

page.addEventListener('click', ()=>{
    if(!menuOuvert) {
        sideBar.style.left = "-230px";
        menuOuvert = false;
    }
})
