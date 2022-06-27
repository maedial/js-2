 const input = document.getElementById('inputTodo');
 const form = document.querySelector('form');
 const containerList = document.getElementById('containerList');

//storage part
function storeList(){
    window.localStorage.todolist = containerList.innerHTML;
}

function getTodo(){
    containerList.innerHTML = window.localStorage.todolist
}
getTodo();

//ajout des stickers
function addTodo(message){
    const sticker = document.createElement('span');
    sticker.classList.add('todo');
    sticker.textContent = '* ' + message;
    sticker.addEventListener('click',(e) => {
        sticker.remove();
        storeList();
    })

    containerList.appendChild(sticker);
}

//listener sur form
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTodo(input.value);
    input.value='';
    storeList();
})