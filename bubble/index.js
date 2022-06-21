const counterDisplay = document.querySelector("h3");
let counter = 0;
console.log(counterDisplay);

const bubblemaker = ()=> {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 +"%";
    bubble.style.left = Math.random() * 100 +"%";

    const plusMinus = Math.random()> 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * plusMinus * 100 + "%");

    bubble.addEventListener('click',()=>{
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })

    setTimeout(()=> {
        bubble.remove();
    },8000);
};

setInterval(bubblemaker, 3000);