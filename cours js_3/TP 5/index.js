const messageBox = document.querySelector('body > p');

function getColor(){
    return Math.floor(Math.random()*255);
}

function setColor(){
    let colorRGB = "rgb(" + getColor() + ", " + getColor() + ", " + getColor() + ")";
    
    document.body.style.setProperty('--color',colorRGB);
    messageBox.textContent = colorRGB;
}

setInterval(() => {
    setColor();
}, 1000);