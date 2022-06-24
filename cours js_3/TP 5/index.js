const messageBox = document.querySelector('body > p');

function getColor(){
    return Math.floor(Math.random()*255);
}

setInterval(() => {
    let colorRGB = "rgba(" + getColor() + ", " + getColor() + ", " + getColor() + ")";

    document.body.style.setProperty('--color',colorRGB);
    messageBox.textContent = colorRGB;
}, 10000);