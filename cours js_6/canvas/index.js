//      CANVAS
//--------------------------------------------
function draw(){
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = "rgb(200,200,0)";
    context.fillRect(50,10,50,150);

    context.fillStyle = "rgb(0,100,200,0.5)";   //R,G,B, transparency
    context.fillRect(30,30,100,50);         //absX, absY, width, height

    context.fillStyle = "rgb(100,15,50,0.5)";
    context.fillRect(100,25,100,100);   
    context.clearRect(35,35,40,40); //carré vide (blanc du coup ?) absX, absY, w,h

    context.strokeRect(125,75,50,50);   //forme non remplie

    context.fillStyle = "rgb(200,0,0,0.8)";
    context.beginPath();
    context.moveTo(180,150);
    context.lineTo(100,75);
    context.lineTo(100,150);
    context.fill();
}

window.addEventListener('load', draw());