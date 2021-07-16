
const todosList = document.querySelector(".tasks");
const userInput = document.querySelector(".userInput");

// add todo items
function addTask(event) {
    if (event.code == "Enter" || event.type == "click") {
        if (userInput.value) {
            const newTask = document.createElement('li');
            const icon = `<span><i class="far fa-trash-alt"></i></span>`
            newTask.innerHTML += icon;
            newTask.innerHTML += userInput.value;
            todosList.appendChild(newTask);
            
            userInput.value = "";
            localStorage.setItem("todos", todosList.innerHTML);
        } else {
            console.log("Enter a valid todo item!");
        }
    }
}

// delete todo items, update todos in local storage
todosList.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName == "I" || e.target.tagName == "SPAN")  {
        if (e.target.tagName == "I") {
            e.target.parentElement.parentElement.remove()
        } else {
            e.target.parentElement.remove()
        }
        localStorage.setItem("todos", todosList.innerHTML);
    } else {
        e.target.classList.toggle('completed');
        localStorage.setItem("todos", todosList.innerHTML);
    }
})

// fetch todo items from local storage
window.addEventListener('load', () => {
    console.log("sdfjakl");
    todosList.innerHTML += localStorage.getItem("todos"); 
})