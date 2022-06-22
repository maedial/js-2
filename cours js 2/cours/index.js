//------------------------------------------------
//-----------   CLICK   --------------------------
//------------------------------------------------
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');  //on peut aussi utiliser QuerySelector mais comme btn-2 a un id, autant utiliser getElementById
const response = questionContainer.querySelector('p');

questionContainer.addEventListener('click',() => {
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', ()=> {
    response.classList.add('show-response');
    response.style.background = 'green';
})
btn2.addEventListener('click', ()=> {
    response.classList.add('show-response');    //questionContainer.classList.remove('show-response'); pour l'enlever
    response.style.background = 'red';
})
//----------------------------------------------------------------------------------
//-----------   MOUSE EVENTS----------------------
//------------------------------------------------
const mousemove=document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.top = e.pageY +'px';
    mousemove.style.left = e.pageX +'px';
});
window.addEventListener('mousedown',()=> {
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
    mousemove.style.border = '2px solid blue';
})
window.addEventListener('mouseup',()=> {
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
    mousemove.style.border = '2px solid teal';
})
questionContainer.addEventListener('mouseenter',() => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})
questionContainer.addEventListener('mouseout',() => {
    questionContainer.style.background = "rgba(0,0,0,1)";
})
response.addEventListener('mouseover', () => {
    response.style.transform = 'rotate(2deg)';
})
//------------------------------------------------------------------
//Key press event
//------------------------------------------------------------
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio();
    audio.src ='../supports de cours/cours/Enter.mp3';
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;    //permet d'insérer du texte dans un input par exemple
    //ring();
})
//------------------------------------------------------------------
//scroll event
//------------------------------------------------------------
const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) nav.style.top = 0;
    else nav.style.top = '-50px';
})
//------------------------------------------------------------------
// Form events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
})
select.addEventListener('input', (e) => {
    language = e.target.value;
})
form.addEventListener('submit', (e) => {
    e.preventDefault();     //!!!!!!!!!! empêche le formulaire de recharger la page
    
    if(cgv.checked){
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>language préféré : ${language}</h4>
        `;   //pas aussi classe que de passer par une varialbe mais fonctionne, permet d'injecter du HTML... balise etc... par contre si au lieu de innerHTML on utilise textContent, les balise n'auraient pas été interprétées et auraient été affichées tels quel.
    }else{
        alert('Veuillez accepter les CGV');
    }
})
//------------------------------------------------------------------
// load event //se dévlenche quand la page a finit de chargée

window.addEventListener('load', ()=>{
    console.log("c'est bon c'est chargé !!");
})

//------------------------------------------------------------------
//ForEach

//sélectionner plusieurs objets qui partagent la même classe
//const boxes = document.getElementsByClassName('box'); //ATTENTION ne fonctionne QUE si plusieurs objets avec la même classe !! il y a un s à Element(s) !!
const boxes = document.querySelectorAll('.box');    //autre et meilleur technique pour selectionner les objets de la classe box
console.log(boxes);

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = 'scale(0.7)';
    })
});
//------------------------------------------------------------------
//Bubbling -> de base eventlistener est en bubbling = A LA FIN
document.body.addEventListener('click', ()=>{
    console.log('click #1 !');
})
//Usecapture -> AU DEBUT, il faut passer le 3ieme argument à true (false par defaut)
document.body.addEventListener('click', ()=>{
    console.log('click #2 !');
}, true)

//------------------------------------------------------------------
//stop propagation
questionContainer.addEventListener('click',(e)=>{
    alert('test');
    e.stopPropagation();    //empêche que d'autre clicks puissent être pris en compte, n'empêche cependant pas l'evènement qui avait le Usecapture puisqu'il passe avant cet evènement là
})
//------------------------------------------------------------------
//methode removeEventListener pour retirer un eventListener

//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------
// BOM : Brother Object Model

//Evénements addossés à l'objet window
//alert
//alert('hello');

//confirm
/* btn2.addEventListener('click', ()=>{
    confirm('voulez vous vraiment vous tromper ?');
}) */

//prompt
/* btn1.addEventListener('click', ()=>{
    let answer = prompt('entrez votre nom');

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
}) */

//Timer, compte à rebours
//temps en milisecondes avant de déclancher la logique ou la fonction (en premier paramètre)
setTimeout(()=>{
questionContainer.style.borderRadius = "300px";
},2000)

//Execute un bout de code toutes les x milisecondes
//dans cet example ce sont les guillemets de la touche 7 qui permettent d'indenter le 'innerHtml
/* let interval = setInterval(()=>{
        document.body.innerHTML +=`
        <div class='box'>
            <h2>Nouvelle boite !</h2>
        </div>`;
    },1000);

document.body.addEventListener('click', (e)=>{
    //e.target.remove();      //permet de supprimer un elément du DOM (balise, bouton, body... TOUT)
    clearInterval(interval);
}) */

//------------------------------------------------------------------
//Location
/* console.log(window.location.href);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.protocol);
console.log(window.location.port);
console.log(window.location.ancestorOrigins);
console.log(window.location.pathname); */

//location.replace('http://lemonde.fr')
/* window.onload=()=>{
    location.href = "http://lequipe.fr";
}; */

//------------------------------------------------------------------
//Navigator
//console.log(navigator.userAgent);

//------------------------------------------------------------------
//history
//console.log(history);
//window.history.back();
//history.go(-2); //revient 2 pages en arrière

//------------------------------------------------------------------
//Set property
window.addEventListener('mousemove',(e)=>{
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
})