 const input = document.getElementById('inputTodo');
 const form = document.querySelector('form');
 const containerList = document.getElementById('containerList');

//ajout des stickers
function addTodo(message){
    const sticker = document.createElement('span');
    sticker.classList.add('todo');
    sticker.textContent = '* ' + message;
    sticker.addEventListener('click',(e) => {
        sticker.remove();
    })

    containerList.appendChild(sticker);
}

//listener sur form
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTodo(input.value);
    input.value='';
})