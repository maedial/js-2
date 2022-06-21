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
    e.preventDefault();
    
    if(cgv.checked){
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>language préféré : ${language}</h4>
        `;   //pas aussi classe que de passer par une varialbe mais fonctionne, permet d'injecter du HTML... balise etc...
    }else{
        alert('Veuillez accepter les CGV');
    }
})