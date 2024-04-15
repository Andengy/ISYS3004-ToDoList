console.log("script loaded");

// 1. Write variables

let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoContainer = document.getElementById("todo-list");
let templateElement = document.getElementById("todo-item-template")
let template = templateElement.innerHTML

// 2. Write events
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = ""

    let todoHTML = template.replace("<!-- task_name -->", taskName)


    todoContainer.insertAdjacentHTML('afterbegin', todoHTML);

}

// 3. Linking events and element to the function
addTaskButton.addEventListener('click', onAddTaskClicked);

