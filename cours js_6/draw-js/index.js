const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');
let penSize = 8;
let penColor = "salmon";

function getMousePos(e){
    const rect = canvas.getBoundingClientRect();    //dimensions du canvas

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    }
}

function mouseMove(e){
    const mousePos = getMousePos(e);
    console.log(mousePos);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke(); 
    ctx.strokeStyle= penColor;
    ctx.lineWidth = penSize;
}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const mousePos = getMousePos(e);

    //démarrer le dessin
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', ()=>{
        canvas.removeEventListener('mousemove', mouseMove);
    })
});

reset.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})



