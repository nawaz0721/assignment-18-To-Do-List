var input = document.getElementById('userInput');
var clicksHistory = document.getElementById('tasks');


function addTask() {
    var li = `<li> <span> ${input.value} </span> 
    <button onclick="editThis(this)" id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button onclick="deleteThis(this)" id="delete"><i class="fa-solid fa-trash"></i ></button> </li>`
    clicksHistory.innerHTML += li;
    input.value = '';
}

function editThis(currentElement){
    var newText = prompt(currentElement.parentElement.firstElementChild.innerText);
    currentElement.parentElement.firstElementChild.innerText = newText;
}

function deleteThis(currentElement){
    currentElement.parentElement.remove();
}


