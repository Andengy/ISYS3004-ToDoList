console.log("script loaded");

// 1. Write variables

let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoContainer = document.getElementById("todo-list");

// 2. Write events
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = ""
    todoContainer.insertAdjacentHTML('afterbegin', taskName);


}

// 3. Linking events and element to the function
addTaskButton.addEventListener('click', onAddTaskClicked);

