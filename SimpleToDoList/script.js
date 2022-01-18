// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const modalInput = document.getElementById("modal-input");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckEdit);
filterOption.addEventListener("click", filterTodo);

//Functhion
function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement("button");
    completedButton.textContent = "Complete";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    const trashButton = document.createElement("button");
    trashButton.textContent = "Delete";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheckEdit(e){
    const item = e.target;
    // Delete
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    // complete
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    // Edit
    if(item.classList[0] === "edit-btn"){
        modal.classList.toggle("none");
    }
}

function filterTodo(e){
    const todoArr = Array.from(todoList.childNodes);
    for( let i=1; i<todoArr.length; i++){
        switch(e.target.value){
            case "all":
                todoArr[i].style.display = "flex";
                break;
            case "completed":
                if( todoArr[i].classList.contains("completed")){   
                    todoArr[i].style.display = "flex";
            } else {
                todoArr[i].style.display = "none";
            }
            break;
            case "uncompleted":
                if( !todoArr[i].classList.contains("completed")){
                    todoArr[i].style.display = "flex";
            } else {
                todoArr[i].style.display = "none";
            }
            break;
            }
        }
    }
    
//ShowModal
const modal = document.getElementById("myModal");
const btnclose = document.getElementsByClassName("close")[0];
const btnsave = document.getElementsByClassName("save")[0];
modalInput.value = "Не получаетмя взять информацию из todoInput и перезаписать в итоговое значение";
btnclose.addEventListener("click", function() {
    modal.classList.toggle("none");
    }
)
window.addEventListener("click", function(event) {
  if (event.target == modal) { 
    modal.classList.toggle("none");
        }
    }
)
btnsave.addEventListener("click", function() {
    // modalInput.value = "newTodo.value";
    }
)


// 
// function saveLocalTodo(todo){
//     let todos;
//     //проверка есть ли чтонибудь в localStorage
//     if (localStorage.getItem("todos") === null){
//         todos = [];
//     } else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify("todos"));

// }
