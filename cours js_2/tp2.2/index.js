// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
const navbar = document.getElementById('navbar');
let scrollPosition = 0;

window.addEventListener('scroll',()=>{
    if(scrollPosition>window.scrollY)
        navbar.style.top = '0px';
    else 
        navbar.style.top = '-60px';
    
    scrollPosition=window.scrollY;
})