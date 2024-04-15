console.log("script loaded");

// 1. Write variables

let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoContainer = document.getElementById("to-do-list");
let templateElement = document.getElementById("todo-item-template")
let template = templateElement.innerHTML
let showActiveButton = document.getElementById("show-active")

// 2. Write events
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = ""

    let todoHTML = template.replace("<!-- Task_Name -->", taskName)


    todoContainer.insertAdjacentHTML('afterbegin', todoHTML);

}

function onTodoClicked(event) {
    let targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
        if (!targetElement) return;
    }

    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}

function showActive(){

}

// 3. Linking events and element to the function
addTaskButton.addEventListener('click', onAddTaskClicked);
todoContainer.addEventListener('click', onTodoClicked)
