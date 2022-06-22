const navbar = document.getElementById('navbar');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('closeBtn');
const imageImprovise = document.getElementById('imgImprovise');
let popupBurnt = false;

window.addEventListener('load', ()=>{
    navbar.style.setProperty('--h','90px');
})

window.addEventListener('scroll',()=>{
    let scrollValue = (window.scrollY + window.innerHeight)/document.body.offsetHeight;

    //console.log(window.scrollY);
    //réduit le bandeau nav à partir de 100px
    if(window.scrollY>100) navbar.style.setProperty('--h','40px');
    else navbar.style.setProperty('--h','90px');
    
    //fait apparaître l'image Improvise à partir de 250px
    if(scrollValue > 0.45) {
        imageImprovise.style.opacity = 1;
        imageImprovise.style.transform = 'none';
    };

    //fait apparaître la popup en bas de page si elle ne s'était pas encore affichée
    if(scrollValue >0.9 && !popupBurnt){
        popup.style.opacity = '1';
        popup.style.transform = 'none';
        popupBurnt=true;
    };
})

//renvoi la popup dans les limbes
popupClose.addEventListener('click', ()=>{
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(400px)';
})

// Faire apparaitre l'image de la partie improvise